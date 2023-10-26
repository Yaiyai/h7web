import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { ControlComponent } from './control.component';
import { ControlRoutingModule } from './control-routing.module';
import { SharedModule } from 'src/app/components/shared.module';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
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