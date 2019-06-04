import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomAgmMapComponent } from './custom-agm-map/custom-agm-map.component';

@NgModule({
  declarations: [
    CustomAgmMapComponent,
  ],
  imports: [
    CommonModule,
    CustomAgmMapComponent,
  ]
})
export class ComponentsModule { }
