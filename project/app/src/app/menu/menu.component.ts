import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  items: MenuItem[];
  constructor() { }

  ngOnInit() {
    this.items = [
        {
          label: 'Menu',
          icon: "pi pi-home",
          url: 'home'
        },
        {
          label: 'Mundos',
          icon: "pi pi-globe",
          items: [{
                  label: 'Listar', 
                  icon: 'pi pi-fw pi-list',
                  url: 'world-list'
              },
              {
                  label: 'Adicionar',
                  icon: 'pi pi-fw pi-plus',
                  url: 'world-new'
              }
          ]
        },
        {
            label: 'Personagens',
            icon: "pi pi-users",
            items: [{
                    label: 'Listar', 
                    icon: 'pi pi-fw pi-list',
                    url: 'character-list'
                },
                {
                    label: 'Adicionar',
                    icon: 'pi pi-fw pi-plus',
                    url: 'character-new'
                }
            ]
        },
        {
          label: 'Poderes',
          icon: "pi pi-chart-line",
          items: [{
                  label: 'Listar', 
                  icon: 'pi pi-fw pi-list',
                  url: 'skills-list'
              },
              {
                  label: 'Adicionar',
                  icon: 'pi pi-fw pi-plus',
                  url: 'skills-new'
              }
          ]
        },        
    ];
}

}
