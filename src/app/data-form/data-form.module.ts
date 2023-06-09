import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


import { DataFormComponent } from "./data-form.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule ({
    imports: [        
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ],
    declarations: [
        DataFormComponent
    ]
})

export class DataFormModule { }

