import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatIconModule, MatTreeModule } from '@angular/material';
import { StoreModule } from '@ngrx/store';
import { reducers /*, metaReducers */ } from './reducers';
import { AppEffects } from './app.effects';
import { EffectsModule } from '@ngrx/effects';
import { SkillsComponent } from './skills/skills.component';


@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatTreeModule,
    StoreModule.forRoot(
      reducers,
      /**
      {
        metaReducers,
        runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
        }
    }
     */
    ),
    EffectsModule.forRoot([AppEffects])    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
