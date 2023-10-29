import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { TextImageModule } from 'src/app/_ui/text-image/text-image.module';
@NgModule({
    imports: [
        CommonModule,
        TextImageModule,
    ],
    declarations: [ContactComponent],
    exports: [ContactComponent]
})
export class ContactModule { }