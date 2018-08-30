import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  // defined in ingredient.model.ts
  // the type is "Ingredient" from Ingredient array in the ingredient model.
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 7),
    new Ingredient('Tomatoes', 5)
  ]; 
  
  constructor() { }

  ngOnInit() {
  }

}
