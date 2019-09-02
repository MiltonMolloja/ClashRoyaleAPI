import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, /* other http imports */ } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentComponent } from './components/content/content.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';

import {NgxPaginationModule} from 'ngx-pagination';
import {DataTableModule} from "angular-6-datatable";
import { ClanComponent } from './components/clan/clan.component';
import * as moment from 'moment';
import { DataTableComponent } from './components/dataTable/data-table/data-table.component';
import { TableRowComponent } from './components/dataTable/table-row/table-row.component';
import { DataTableService } from './components/dataTable/services/data-table.service';
import { ListClanComponent } from './components/list-clan/list-clan.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    HomeComponent,
    ClanComponent,
    DataTableComponent,
    TableRowComponent,
    ListClanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    DataTableModule
  ],
  providers: [DataTableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
