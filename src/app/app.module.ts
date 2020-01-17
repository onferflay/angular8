import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { UserDemoModule } from "./user-deom/user-demo.module";
import { HttpClientModule } from "@angular/common/http";
import { AnalyticsDemoModule } from "./analytics-demo/analytics-demo.module";
import { AppComponent } from "./app.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductRowComponent } from "./product-row/product-row.component";
import { ProductImageComponent } from "./product-image/product-image.component";
import { PriceDisplayComponent } from "./price-display/price-display.component";
import { ProductDepartmentComponent } from "./product-department/product-department.component";
import { DemoFormComponent } from "./demo-form/demo-form.component";
import { UserDeomComponent } from "./user-deom/user-deom.component";
import { AnalyticsDemoComponent } from "./analytics-demo/analytics-demo.component";
import { SimpleHttpComponent } from "./simple-http/simple-http.component";
import { YoutubeComponent } from "./youtube/youtube.component";
import { youTubeSearchInjectables } from "./youtube/youtube.injectables";
import { SearchResultComponent } from './search-result/search-result.component';
import { YtsearchComponent } from './ytsearch/ytsearch.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductRowComponent,
    ProductImageComponent,
    PriceDisplayComponent,
    ProductDepartmentComponent,
    DemoFormComponent,
    UserDeomComponent,
    AnalyticsDemoComponent,
    SimpleHttpComponent,
    YoutubeComponent,
    SearchResultComponent,
    YtsearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    UserDemoModule,
    AnalyticsDemoModule
  ],
  providers: [youTubeSearchInjectables],
  bootstrap: [AppComponent]
})
export class AppModule {}
