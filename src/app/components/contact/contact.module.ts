import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { TextImageModule } from 'src/app/_ui/text-image/text-image.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'src/app/_ui/button/button.module';
@NgModule({
    imports: [
        CommonModule,
        TextImageModule,
        FormsModule,
        ReactiveFormsModule,
        ButtonModule,
    ],
    declarations: [ContactComponent],
    exports: [ContactComponent]
})
export class ContactModule { }