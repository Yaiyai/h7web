import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuoteComponent } from './quote.component';
import { SharedModule } from '../shared.module';
@NgModule({
    imports: [
        CommonModule,
        SharedModule
    ],
    declarations: [QuoteComponent],
    exports: [QuoteComponent]
})
export class QuoteModule { }