import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NoticarruselComponent } from './noticarrusel/noticarrusel.component';
@NgModule({
  declarations: [
    AppComponent, 
    NoticarruselComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
