import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-corr-cp',
  templateUrl: './corr-cp.component.html',
  styleUrls: ['./corr-cp.component.css']
})
export class CorrCpComponent implements OnInit {

  constructor() { }
  typesOfShoes;

  ngOnInit(): void {
    this.typesOfShoes = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  }

}
