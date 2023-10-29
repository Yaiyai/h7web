import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VarianteComponent } from './variante.component';
import { SharedModule } from 'src/app/components/shared.module';
@NgModule({
    imports: [
        CommonModule,
        SharedModule,
    ],
    declarations: [VarianteComponent],
    exports: [VarianteComponent]
})
export class VarianteModule { }