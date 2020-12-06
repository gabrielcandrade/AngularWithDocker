import { Component, OnInit } from '@angular/core';
import { SkillService } from './skillservice';

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.css']
})
export class SkillListComponent implements OnInit {

  skills: any = [];

  constructor(private skillService: SkillService) { }

  ngOnInit(): void {
    // this.skillService.getSkills().then(data => this.skills = data);
    this.skillService.getSkill().subscribe(
      response => {
        this.skills = response
      }
    )
  }

}
