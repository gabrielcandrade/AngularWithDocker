import { Component, OnInit } from '@angular/core';
import { Skill } from './skills';
import { SkillService } from './skillservice';

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.css']
})
export class SkillListComponent implements OnInit {

  skills: Skill[];

  constructor(private skillService: SkillService) { }

  ngOnInit(): void {
    this.skillService.getSkills().then(data => this.skills = data);
  }

}
