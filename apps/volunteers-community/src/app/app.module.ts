import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { IdatisMenuComponent } from '@idatis/idatis-ui';
import { AppComponent } from './app.component';

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
]

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IdatisMenuComponent,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
