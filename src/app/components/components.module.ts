import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomAgmMapComponent } from './custom-agm-map/custom-agm-map.component';
import { AgmCoreModule } from '@agm/core';
import { MapStoreService } from './custom-agm-map/custom-agm-map.model';

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
  providers: [
    MapStoreService,
  ],
  exports: [
    CustomAgmMapComponent,
  ]
})
export class ComponentsModule { }
