import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { LocationComponent } from './location/location.component';

const ROUTES: Route[] = [
    {
        path: '',
        component: LocationComponent,
        pathMatch: 'full',
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(ROUTES)
    ],
    exports: [
        RouterModule
    ]
})
export class BusinessRoutingModule {}