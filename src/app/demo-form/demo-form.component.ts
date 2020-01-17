import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";

@Component({
  selector: "app-demo-form",
  templateUrl: "./demo-form.component.html",
  styleUrls: ["./demo-form.component.css"]
})
export class DemoFormComponent implements OnInit {
  productName: string;
  users = [
    {
      name: "ivan",
      cockpits: [
        {
          name: "name1",
          hedges: ["hed1", "hed2", "hed3"],
          library: ["lib1", "lib2", "lib3"]
        },
        {
          name: "name1",
          hedges: ["hed1", "hed2", "hed3"],
          library: ["lib1", "lib2", "lib3"]
        },
        {
          name: "name1",
          hedges: ["hed1", "hed2", "hed3"],
          library: ["lib1", "lib2", "lib3"]
        }
      ]
    },
    {
      a: "vlad",
      b: ["vlad1", "vlad2", "vlad3"]
    }
  ];
  constructor() {
    this.productName = "ng-book: The Complete Guide to Angular";
  }

  onSubmit(value: string): void {
    console.log("you submitted value: ", value);
  }

  ngOnInit() {}
}
