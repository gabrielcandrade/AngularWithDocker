import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { WorldListComponent } from './world-list/world-list.component';
import { WorldNewComponent } from './world-new/world-new.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterNewComponent } from './character-new/character-new.component';
import { SkillListComponent } from './skill-list/skill-list.component';
import { SkillNewComponent } from './skill-new/skill-new.component';
import { AuthorsComponent } from './authors/authors.component';

const routes: Routes = [
  { path: 'world-list', component: WorldListComponent},
  { path: 'world-new', component: WorldNewComponent},
  { path: 'character-list', component: CharacterListComponent},
  { path: 'character-new', component: CharacterNewComponent},
  { path: 'skills-list', component: SkillListComponent},
  { path: 'skills-new', component: SkillNewComponent},
  { path: 'home', component: AuthorsComponent},
  { path: '', pathMatch: 'full', redirectTo: 'home'}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
