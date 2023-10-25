import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { ButtonModule } from 'src/app/_ui/button/button.module';
import { EndComponent } from './end.component';
import { EndRoutingModule } from './end-routing.module';

@NgModule({
    imports: [
        CommonModule,
        ButtonModule,
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