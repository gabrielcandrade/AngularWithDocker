import { Component, OnInit } from '@angular/core';
import { Character } from './characters';
import { CharacterService } from './characterservice';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  characters: any = []

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    // this.characterService.getCharacters().then(data => this.characters = data);
    this.characterService.getCharacters().subscribe(
      response => {
        this.characters = response
      }
    )
  }

}
