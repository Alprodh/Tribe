import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopBarAppComponent } from './top-bar-app/top-bar-app.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarAppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
