import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { ButtonModule } from 'src/app/_ui/button/button.module';
import { InversaRoutingModule } from './inversa-routing.module';
import { InversaComponent } from './inversa.component';

@NgModule({
    imports: [
        CommonModule,
        ButtonModule,
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
export class HomeModule { }