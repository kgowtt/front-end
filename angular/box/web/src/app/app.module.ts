import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './view/index/index.component';
import { ChooseComponent } from './view/choose/choose.component';
import { NewStockComponent } from './view/new-stock/new-stock.component';



import { NgbPaginationModule, NgbAlertModule ,NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';


// owl
import { OwlModule } from 'ngx-owl-carousel';  

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ChooseComponent,
    NewStockComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbPaginationModule, 
    NgbAlertModule,
    NgbModule,
    FormsModule,
    OwlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
