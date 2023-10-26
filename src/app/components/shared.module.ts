import { NgModule } from '@angular/core';
import { PipesModule } from '../pipes/pipes.module';
import { ContainerModule } from '../_ui/container/container.module';
import { HeaderModule } from './header/header.module';
import { ButtonModule } from '../_ui/button/button.module';
@NgModule({
    imports: [
    ],
    declarations: [],
    exports: [
        PipesModule,
        ContainerModule,
        HeaderModule,
        ButtonModule,
    ]
})
export class SharedModule { }