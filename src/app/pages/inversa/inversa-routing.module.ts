import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InversaComponent } from './inversa.component';

const routes: Routes = [
    { path: '', component: InversaComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InversaRoutingModule { }
