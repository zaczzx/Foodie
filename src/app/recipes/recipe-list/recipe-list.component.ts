import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [new Recipe('TEST', 'THIS IS FOR TEST',
    'https://cdn3.tmbi.com/secure/RMS/attachments/37/300x300/exps25157_FM153592B03_18_12b.jpg')
  ];


  constructor() { }

  ngOnInit() {
  }

}
