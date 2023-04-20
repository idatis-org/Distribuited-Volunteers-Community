import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

const VOLUNTEER_REGISTER_ROUTES = [{
  path: '',
  component: AppComponent
}]

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(VOLUNTEER_REGISTER_ROUTES),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
