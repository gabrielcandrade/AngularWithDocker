import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from './app-routing.module';
import { ContaComponent } from './conta/conta.component';
import { HttpClientModule } from '@angular/common/http';

import {TableModule} from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { PasswordModule } from 'primeng/password';
import { CalendarModule } from 'primeng/calendar';
import { MenubarModule} from 'primeng/menubar';
import {RatingModule} from 'primeng/rating';
import {StepsModule} from 'primeng/steps';
import {InputSwitchModule} from 'primeng/inputswitch';
import {CardModule} from 'primeng/card';


import { WorldListComponent } from './world-list/world-list.component';
import { WorldService} from './world-list/worldservice';
import { WorldNewComponent } from './world-new/world-new.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterService } from './character-list/characterservice';
import { CharacterNewComponent } from './character-new/character-new.component';
import { SkillListComponent } from './skill-list/skill-list.component';
import { SkillNewComponent } from './skill-new/skill-new.component';
import { SkillService } from './skill-list/skillservice';
import { AuthorsComponent } from './authors/authors.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ContaComponent,
    WorldListComponent,
    WorldNewComponent,
    CharacterListComponent,
    CharacterNewComponent,
    SkillListComponent,
    SkillNewComponent,
    AuthorsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    InputTextModule,
		CheckboxModule,
		ButtonModule,
		RadioButtonModule,
    InputTextareaModule,
    PasswordModule,
    CalendarModule,
    MenubarModule,
    HttpClientModule,
    TableModule,
    RatingModule,
    StepsModule,
    CardModule,
    InputSwitchModule,
    FormsModule
  ],
  providers: [WorldService, CharacterService, SkillService],
  bootstrap: [AppComponent]
})
export class AppModule { }
