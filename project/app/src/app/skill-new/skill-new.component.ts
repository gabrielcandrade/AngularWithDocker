import { Component, OnInit } from '@angular/core';
import { SkillService } from '../skill-list/skillservice';

@Component({
  selector: 'app-skill-new',
  templateUrl: './skill-new.component.html',
  styleUrls: ['./skill-new.component.css']
})
export class SkillNewComponent implements OnInit {

  public skill
  constructor(private skillService:SkillService) { }

  ngOnInit() {
  }

  public salvar(){
    this.skillService.salvar(this.skill).subscribe(
      response => {
        alert("Salvo com sucesso!")
      },
      error => {
        alert(this.skill)
      }
    )
  }

}
