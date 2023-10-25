import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { ButtonModule } from 'src/app/_ui/button/button.module';
import { ControlComponent } from './control.component';
import { ControlRoutingModule } from './control-routing.module';

@NgModule({
    imports: [
        CommonModule,
        ButtonModule,
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