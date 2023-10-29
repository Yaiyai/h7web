import { NgModule } from '@angular/core';
import { ButtonModule } from '../_ui/button/button.module';
import { ContainerModule } from '../_ui/container/container.module';
import { PipesModule } from '../pipes/pipes.module';
import { HeaderModule } from './header/header.module';
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