import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopBarAppComponent } from './top-bar-app/top-bar-app.component';
import { TaskComponent } from './task/task.component';
import { FeedBuzzComponent } from './feed-buzz/feed-buzz.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    TopBarAppComponent,
    TaskComponent,
    FeedBuzzComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
