import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { WorldService } from '../world-list/worldservice';
import { World } from '../world-list/world';

@Component({
  selector: 'app-world-new',
  templateUrl: './world-new.component.html',
  styleUrls: ['./world-new.component.css']
})
export class WorldNewComponent implements OnInit {

  public world
  constructor(private worldService:WorldService) {}

  ngOnInit() {
  }

  public salvar(){
    this.worldService.salvar(this.world).subscribe(
      response => {
        alert("Salvo com sucesso!")
      },
      error => {
        alert(this.world)
      }
    )
  }

}
