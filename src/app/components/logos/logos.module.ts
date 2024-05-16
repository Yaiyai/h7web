import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared.module';
import { LogosComponent } from './logos.component';
@NgModule({
    imports: [
        CommonModule,
        SharedModule
    ],
    declarations: [LogosComponent],
    exports: [LogosComponent]
})
export class LogosModule { }