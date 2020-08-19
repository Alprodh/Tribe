import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { FeedBuzzComponent } from './feed-buzz/feed-buzz.component';

const routes: Routes = [
  { path: 'feedbuzz', component: FeedBuzzComponent, },
  { path: '', pathMatch: 'full', redirectTo: 'feedbuzz'}
];


@NgModule({
  declarations: [],
  imports: [
	RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
