import { NgModule } from '@angular/core';
import { PipesModule } from '../pipes/pipes.module';
import { ContainerModule } from '../_ui/container/container.module';
@NgModule({
    imports: [
    ],
    declarations: [],
    exports: [
        PipesModule,
        ContainerModule,
    ]
})
export class SharedModule { }