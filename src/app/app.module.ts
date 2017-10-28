import {HttpModule} from '@angular/http';
import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { routing, appRoutingProviders  }  from './app.routing';

import { AppComponent } from './app.component';
import { NoticarruselComponent } from './noticarrusel/noticarrusel.component';
import { VideotutorialComponent } from './videotutorial/videotutorial.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { PatrocinadoresComponent } from './patrocinadores/patrocinadores.component';
import { ZonavipComponent } from './zonavip/zonavip.component';
import { AmigospacoComponent } from './amigospaco/amigospaco.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { ConfigcarruselComponent } from './configcarrusel/configcarrusel.component';

@NgModule({
  declarations: [
    AppComponent, 
    NoticarruselComponent,
    VideotutorialComponent,
    TutorialComponent,
    PatrocinadoresComponent,
    ZonavipComponent,
    AmigospacoComponent,
    ContactoComponent, 
    ConfiguracionComponent,
    ConfigcarruselComponent

  ],
  imports: [
    BrowserModule,
    HttpModule, 
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
