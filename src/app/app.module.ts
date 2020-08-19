import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TopBarAppComponent } from './top-bar-app/top-bar-app.component';
import { CreateGoalComponent } from './create-goal/create-goal.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarAppComponent,
    CreateGoalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
