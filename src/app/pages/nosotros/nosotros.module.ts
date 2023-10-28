import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { NosotrosRoutingModule } from './nosotros-routing.module';
import { NosotrosComponent } from './nosotros.component';
import { SharedModule } from 'src/app/components/shared.module';
import { TextImageModule } from 'src/app/_ui/text-image/text-image.module';
import { QuoteModule } from 'src/app/components/quote/quote.module';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        TextImageModule,
        QuoteModule,
    ],
    declarations: [
        NosotrosComponent
    ],
    exports: [
        NosotrosComponent,
        NosotrosRoutingModule
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
    ]
})
export class NosotrosModule { }