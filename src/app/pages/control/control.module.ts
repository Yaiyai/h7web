import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { ControlComponent } from './control.component';
import { ControlRoutingModule } from './control-routing.module';
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
        VariantesModule,
    ],
    declarations: [
        ControlComponent
    ],
    exports: [
        ControlComponent,
        ControlRoutingModule
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
    ]
})
export class ControlModule { }