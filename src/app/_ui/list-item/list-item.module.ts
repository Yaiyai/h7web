import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemComponent } from './list-item.component';
import { PipesModule } from 'src/app/pipes/pipes.module';
@NgModule({
    imports: [
        CommonModule,
        PipesModule,

    ],
    declarations: [ListItemComponent],
    exports: [ListItemComponent]
})
export class ListItemModule { }