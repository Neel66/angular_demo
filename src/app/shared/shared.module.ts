import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyMaterialModule } from './material.module';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MyMaterialModule,
        MatGridListModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MyMaterialModule,
        MatGridListModule,
    ]
})
export class SharedModule {
}
