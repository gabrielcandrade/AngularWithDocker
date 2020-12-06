import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character-list/characterservice';

@Component({
  selector: 'app-character-new',
  templateUrl: './character-new.component.html',
  styleUrls: ['./character-new.component.css']
})
export class CharacterNewComponent implements OnInit {

  public character
  constructor(private characterService:CharacterService) { }

  ngOnInit() {
  }

  public salvar(){
    this.characterService.salvar(this.character).subscribe(
      response => {
        alert("Salvo com sucesso!")
      },
      error => {
        alert(this.character)
      }
    )
  }

}