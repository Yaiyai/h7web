import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { TextImageModule } from 'src/app/_ui/text-image/text-image.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'src/app/_ui/button/button.module';
import { PipesModule } from 'src/app/pipes/pipes.module';
@NgModule({
    imports: [
        CommonModule,
        TextImageModule,
        FormsModule,
        ReactiveFormsModule,
        ButtonModule,
        PipesModule,
    ],
    declarations: [ContactComponent],
    exports: [ContactComponent]
})
export class ContactModule { }