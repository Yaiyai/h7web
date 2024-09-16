import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { SharedModule } from 'src/app/components/shared.module';
import { CertificacionesComponent } from './certificaciones.component';
import { CertificacionesRoutingModule } from './certificaciones-routing.module';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
    ],
    declarations: [
        CertificacionesComponent
    ],
    exports: [
        CertificacionesComponent,
        CertificacionesRoutingModule
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
    ]
})
export class CertificacionesModule { }