import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillListComponent } from './skill-list.component';
import { CharacterNewComponent } from '../character-new/character-new.component';

const routes: Routes = [
    {
        path: '',
        component: SkillListComponent
    }
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [ RouterModule ]
})
export class SkillListRoutingModule { }