import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { IdatisUiAngularModule } from '@idatis/idatis-ui-angular';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

const REGISTER_ROUTES = [{
  path: '',
  component: AppComponent
}]

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    LottieModule.forRoot({player: playerFactory}),
    IdatisUiAngularModule,
    RouterModule.forChild(REGISTER_ROUTES),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
