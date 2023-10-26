import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { ImpresionRoutingModule } from './imprension-routing.module';
import { ImpresionComponent } from './impresion.component';
import { SharedModule } from 'src/app/components/shared.module';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
    ],
    declarations: [
        ImpresionComponent
    ],
    exports: [
        ImpresionComponent,
        ImpresionRoutingModule
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
    ]
})
export class ImpresionModule { }