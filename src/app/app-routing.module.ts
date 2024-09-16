import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'quienes-somos', loadChildren: () => import('./pages/nosotros/nosotros.module').then(m => m.NosotrosModule) },
  { path: 'control-dimensional', loadChildren: () => import('./pages/control/control.module').then(m => m.ControlModule) },
  { path: 'end', loadChildren: () => import('./pages/end/end.module').then(m => m.EndModule) },
  { path: 'ingenieria-inversa', loadChildren: () => import('./pages/inversa/inversa.module').then(m => m.InversaModule) },
  { path: 'impresion-3d', loadChildren: () => import('./pages/impresion/impresion.module').then(m => m.ImpresionModule) },
  { path: 'subvenciones', loadChildren: () => import('./pages/subvenciones/subvenciones.module').then(m => m.SubvencionesModule) },
  { path: 'certificaciones', loadChildren: () => import('./pages/certificaciones/certificaciones.module').then(m => m.CertificacionesModule) },
];

const routerOptions: ExtraOptions = {
  initialNavigation: 'enabledBlocking',
  scrollPositionRestoration: "top",
  useHash: false,
  anchorScrolling: 'enabled',
  onSameUrlNavigation: 'reload' //Must have if you want to be able to use the anchor more than once
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
