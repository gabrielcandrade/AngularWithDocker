import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorldListComponent } from './world-list.component';
import { CharacterNewComponent } from '../character-new/character-new.component';

const routes: Routes = [
    {
        path: '',
        component: WorldListComponent
    }
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [ RouterModule ]
})
export class WorldListRoutingModule { }