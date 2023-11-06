import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { ButtonModule } from '../button/button.module';
import { PipesModule } from 'src/app/pipes/pipes.module';
@NgModule({
    imports: [
        CommonModule,
        ButtonModule,
        PipesModule,
    ],
    declarations: [FooterComponent],
    exports: [FooterComponent]
})
export class FooterModule { }