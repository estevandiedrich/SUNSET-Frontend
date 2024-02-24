import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchPipe } from './SearchPipe';
import { FormsModule } from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';
import { NewpropspectComponent } from './newpropspect/newpropspect.component';
import { PropspectsComponent } from './propspects/propspects.component';
import { DatePipe } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import {registerLocaleData} from '@angular/common';
registerLocaleData(localePt);
@NgModule({
  declarations: [
    AppComponent,
    SearchPipe,
    NewpropspectComponent,
    PropspectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    DatePipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
