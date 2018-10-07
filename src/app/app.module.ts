import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { RechercheComponent } from './components/recherche/recherche.component';
import { ListeComponent } from './components/liste/liste.component';
import { MPageComponent } from './components/mpage/mpage.component';
import { ActionEnCoursComponent } from './components/action-en-cours/action-en-cours.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'recherche', component: RechercheComponent },
  { path: 'liste', component: ListeComponent },
  { path: 'mpage', component: MPageComponent },
  { path: 'actionencours', component: ActionEnCoursComponent },
  { path: '**', component: RechercheComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RechercheComponent,
    ListeComponent,
    MPageComponent,
    ActionEnCoursComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
