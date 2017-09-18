import './polyfills';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import AppComponent from "./components/app";

@NgModule({
    declarations: [
        AppComponent
      ],
      imports: [
        BrowserModule,
        HttpModule
      ],
      providers: [],
      bootstrap: [AppComponent]
})
class AppModule {
    constructor() {
        console.log('App Module Loaded')
    }
}

platformBrowserDynamic().bootstrapModule(AppModule);
