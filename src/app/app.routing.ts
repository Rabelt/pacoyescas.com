import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/**Importar los componentes a utilizar*/
import { NoticarruselComponent } from './noticarrusel/noticarrusel.component';
import { VideotutorialComponent } from './videotutorial/videotutorial.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { PatrocinadoresComponent } from './patrocinadores/patrocinadores.component';
import { ZonavipComponent } from './zonavip/zonavip.component';
import { AmigospacoComponent } from './amigospaco/amigospaco.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { ConfigcarruselComponent } from './configcarrusel/configcarrusel.component';

const appRoutes: Routes = [
{path: "", component: NoticarruselComponent },
{path: "videotutorial", component: VideotutorialComponent},
{path: "tutorial", component: TutorialComponent},
{path: "patrocinadores", component: PatrocinadoresComponent},
{path: "zonavip", component: ZonavipComponent},
{path: "amigospaco", component: AmigospacoComponent},
{path: "contacto", component: ContactoComponent},
{path: "configuracion", component: ConfiguracionComponent},
{path: "configcarrusel", component: ConfigcarruselComponent},
{path: "**", component: NoticarruselComponent}
];

export const appRoutingProviders: any[] = [] ;
export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);