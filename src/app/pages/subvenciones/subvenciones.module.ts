import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { SubvencionesRoutingModule } from './subvenciones-routing.module';
import { SubvencionesComponent } from './subvenciones.component';
import { SharedModule } from 'src/app/components/shared.module';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
    ],
    declarations: [
        SubvencionesComponent
    ],
    exports: [
        SubvencionesComponent,
        SubvencionesRoutingModule
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
    ]
})
export class SubvencionesModule { }