import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

const VOLUNTEER_PROFILE_ROUTES = [{
    path: '',
    component: AppComponent
}]
@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(VOLUNTEER_PROFILE_ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
