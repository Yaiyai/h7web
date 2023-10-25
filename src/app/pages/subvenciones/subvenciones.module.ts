import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { ButtonModule } from 'src/app/_ui/button/button.module';
import { SubvencionesRoutingModule } from './subvenciones-routing.module';
import { SubvencionesComponent } from './subvenciones.component';

@NgModule({
    imports: [
        CommonModule,
        ButtonModule,
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
export class HomeModule { }