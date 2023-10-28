import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { ImpresionRoutingModule } from './imprension-routing.module';
import { ImpresionComponent } from './impresion.component';
import { SharedModule } from 'src/app/components/shared.module';
import { QuoteModule } from 'src/app/components/quote/quote.module';
import { TextImageModule } from 'src/app/_ui/text-image/text-image.module';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        QuoteModule,
        TextImageModule,
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