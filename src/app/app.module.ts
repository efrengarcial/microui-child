import { BrowserModule } from '@angular/platform-browser';
import {ApplicationRef, DoBootstrap, Injector, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import {SampleModule} from './sample/sample.module';
import {createCustomElement} from '@angular/elements';
import {SampleComponent} from './sample/sample.component';
import { Routes } from '@angular/router';
import {HeroListComponent} from './heros/hero-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, outlet: 'micro' },
  { path: 'heroes', component: HeroListComponent , outlet: 'micro'},
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

const local = true;
@NgModule({
  declarations: [
    AppComponent,
    HeroListComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    SampleModule,
    RouterTestingModule.withRoutes(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  entryComponents: [SampleComponent],
  bootstrap: [local ? AppComponent : []],
  exports: [RouterTestingModule]
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {
    const micro = createCustomElement(SampleComponent, {injector: this.injector});
    customElements.define('micro-app', micro);
  }
  ngDoBootstrap(appRef: ApplicationRef): void {
  }
}
