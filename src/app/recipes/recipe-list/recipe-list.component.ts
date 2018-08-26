import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit {
  // uses my own Recipe model in recipe.model.ts
  recipes: Recipe[] = [
    new Recipe('Creepes', 'Crepes are french-style pancakes that are thin and flat, and can be made and filled with sweet or savory ingredients. We love them filled with nutella and strawberries or bananas, or a sweet cream filling with fruit, like in this recipe.', 'https://www.thespruceeats.com/thmb/GNWmK7xLQfPVeKaXiNZGkCbZcE8=/2500x1668/filters:no_upscale():max_bytes(150000):strip_icc()/crepes-2500-56a210a33df78cf772719028.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
