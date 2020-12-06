import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterListComponent } from './character-list.component';
import { CharacterNewComponent } from '../character-new/character-new.component';

const routes: Routes = [
    {
        path: '',
        component: CharacterListComponent
    }
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [ RouterModule ]
})
export class CharacterListRoutingModule { }