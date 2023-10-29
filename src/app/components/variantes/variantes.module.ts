import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VariantesComponent } from './variantes.component';
import { SharedModule } from '../shared.module';
import { VarianteModule } from 'src/app/_ui/variante/variante.module';
@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        VarianteModule,
    ],
    declarations: [VariantesComponent],
    exports: [VariantesComponent]
})
export class VariantesModule { }