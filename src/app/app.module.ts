import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IframeAutoResizeDirective } from './iframe-auto-resize.directive';

@NgModule({
  declarations: [
    AppComponent,
    IframeAutoResizeDirective,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
