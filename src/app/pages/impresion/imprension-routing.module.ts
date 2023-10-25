import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImpresionComponent } from './impresion.component';

const routes: Routes = [
    { path: '', component: ImpresionComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ImpresionRoutingModule { }
