import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { EndComponent } from './end.component';
import { EndRoutingModule } from './end-routing.module';
import { SharedModule } from 'src/app/components/shared.module';
import { TextImageModule } from 'src/app/_ui/text-image/text-image.module';
import { QuoteModule } from 'src/app/components/quote/quote.module';
import { ContactModule } from 'src/app/components/contact/contact.module';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        TextImageModule,
        QuoteModule,
        ContactModule,
    ],
    declarations: [
        EndComponent
    ],
    exports: [
        EndComponent,
        EndRoutingModule
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
    ]
})
export class EndModule { }