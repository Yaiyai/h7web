import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { ButtonModule } from 'src/app/_ui/button/button.module';
import { ImpresionRoutingModule } from './imprension-routing.module';
import { ImpresionComponent } from './impresion.component';

@NgModule({
    imports: [
        CommonModule,
        ButtonModule,
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