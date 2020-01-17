import { Component, OnInit, Output, ElementRef } from "@angular/core";
import { YouTubeSearchService } from "./youtube.service";
import { EventEmitter } from "protractor";
import { SearchResult } from "./youtube.model";
import { Observable } from "rxjs";

@Component({
  selector: "app-youtube",
  template: `
    <input type="text" class="form-control" placeholder="Search" autofocus />
  `
})
export class YoutubeComponent implements OnInit {
  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() results: EventEmitter<SearchResult[]> = new EventEmitter<
    SearchResult[]
  >();

  constructor(private youtube: YouTubeSearchService, private el: ElementRef) {}

  ngOnInit(): void {
    // convert the `keyup` event into an observable stream
    Observable.fromEvent(this.el.nativeElement, "keyup")
      .map((e: any) => e.target.value) // extract the value of the input
      .filter((text: string) => text.length > 1) // filter out if empty
      .debounceTime(250) // only once every 250ms
      .do(() => this.loading.emit(true)) // enable loading
      // search, discarding old events if new input comes in
      .map((query: string) => this.youtube.search(query))
      .switch()
      // act on the return of the search
      .subscribe(
        (results: SearchResult[]) => {
          // on sucesss
          this.loading.emit(false);
          this.results.emit(results);
        },
        (err: any) => {
          // on error
          console.log(err);
          this.loading.emit(false);
        },
        () => {
          // on completion
          this.loading.emit(false);
        }
      );
  }
}
