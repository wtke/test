import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-corr-cp',
  templateUrl: './corr-cp.component.html',
  styleUrls: ['./corr-cp.component.css']
})
export class CorrCpComponent implements OnInit {
  panelOpenState = false;
  constructor() { }
  typesOfShoes;
  days;

  ngOnInit(): void {
    this.typesOfShoes = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
    this.days = [
      {
        date: "Mon 01", 
        subDay: [
          {
            name: "morning"
          }, 
          {
            name:"afternoon"
          },
          {
            name: "evening"
          },
          {
            name: "night"
          }
        ]
      },
      {
        date: "Tue 02", 
        subDay: [
          {
            name: "morning"
          }, 
          {
            name:"afternoon"
          },
          {
            name: "evening"
          },
          {
            name: "night"
          }
        ]
      },
      {
        date: "Wed 03", 
        subDay: [
          {
            name: "morning"
          }, 
          {
            name:"afternoon"
          },
          {
            name: "evening"
          },
          {
            name: "night"
          }
        ]
      }
    ];
  }

  
}
