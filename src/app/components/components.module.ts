import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomAgmMapComponent } from './custom-agm-map/custom-agm-map.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    CustomAgmMapComponent,
  ],
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC8yXlPxcDXMYty_SroLUGOFEpwhPxh1bg',
    })
  ],
  exports: [
    CustomAgmMapComponent,
  ]
})
export class ComponentsModule { }
