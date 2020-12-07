import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleComponent } from './sample.component';
import {FormsModule} from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

@NgModule({
    declarations: [SampleComponent],
    exports: [
        SampleComponent
    ],
  imports: [
    CommonModule,
    FormsModule,
    RouterTestingModule
  ]
})
export class SampleModule { }
