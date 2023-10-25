import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { ButtonModule } from 'src/app/_ui/button/button.module';
import { NosotrosRoutingModule } from './nosotros-routing.module';
import { NosotrosComponent } from './nosotros.component';

@NgModule({
    imports: [
        CommonModule,
        ButtonModule,
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
export class HomeModule { }