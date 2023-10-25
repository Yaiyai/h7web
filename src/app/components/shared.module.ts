import { NgModule } from '@angular/core';
import { PipesModule } from '../pipes/pipes.module';
import { ContainerModule } from '../_ui/container/container.module';
import { HeaderModule } from './header/header.module';
@NgModule({
    imports: [
    ],
    declarations: [],
    exports: [
        PipesModule,
        ContainerModule,
        HeaderModule,
    ]
})
export class SharedModule { }