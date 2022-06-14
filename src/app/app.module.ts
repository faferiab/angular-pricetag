import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchProductComponent } from './components/search-product/search-product.component';
import { TableGraphComponent } from './components/table-product/table-graph/table-graph.component';
import { TableHeaderComponent } from './components/table-product/table-header/table-header.component';
import { TableProductComponent } from './components/table-product/table-product.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchProductComponent,
    TableProductComponent,
    TableHeaderComponent,
    TableGraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MultiSelectModule,
    FormsModule,
    BrowserAnimationsModule,
    ButtonModule,
    HttpClientModule,
    AccordionModule,
    InputTextModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
