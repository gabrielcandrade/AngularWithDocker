import { Component, OnInit } from '@angular/core';
import { WorldService } from './worldservice';
import { World } from './world';


@Component({
  selector: 'app-world-list',
  templateUrl: './world-list.component.html',
  styleUrls: ['./world-list.component.css']
})
export class WorldListComponent implements OnInit {
  
  worlds: World[];

  constructor(private worldService: WorldService) { }

  ngOnInit(): void {
    this.worldService.getWorlds().then(data => this.worlds = data);
  }

}
