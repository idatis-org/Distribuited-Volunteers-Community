import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { IdatisUiAngularModule } from '@idatis/idatis-ui-angular';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

export const ROUTES = [
  {
    path: '',
    component: AppComponent
  },
  {
   path: 'volunteer-profile',
    loadChildren: () => loadRemoteModule({
      type: 'manifest',
      remoteName: 'volunteer-profile',
      exposedModule: './Module'
    })
    .then(m => m.AppModule)
  },
  {
    path: 'volunteer-register',
     loadChildren: () => loadRemoteModule({
       type: 'manifest',
       remoteName: 'volunteer-register',
       exposedModule: './Module'
     })
     .then(m => m.AppModule)
   },
]

export function playerFactory() {
  return player;
}
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IdatisUiAngularModule,
    //Until error related with libraries and microfrontends be fixed is needed also here
    LottieModule.forRoot({player: playerFactory}),
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
