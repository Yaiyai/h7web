import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { InversaRoutingModule } from './inversa-routing.module';
import { InversaComponent } from './inversa.component';
import { SharedModule } from 'src/app/components/shared.module';
import { TextImageModule } from 'src/app/_ui/text-image/text-image.module';
import { QuoteModule } from 'src/app/components/quote/quote.module';
import { ContactModule } from 'src/app/components/contact/contact.module';
import { VariantesModule } from 'src/app/components/variantes/variantes.module';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        TextImageModule,
        QuoteModule,
        ContactModule,
        VariantesModule
    ],
    declarations: [
        InversaComponent
    ],
    exports: [
        InversaComponent,
        InversaRoutingModule
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
    ]
})
export class InversaModule { }