import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppComponent } from './app.component';

import { JL } from 'jsnlog';

export class UncaughtExceptionHandler implements ErrorHandler {
  handleError(error: any) {
    JL().fatalException('Uncaught Exception', error);
  }
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [  
    { provide: 'JSNLOG', useValue: JL },
    { provide: ErrorHandler, useClass: UncaughtExceptionHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
