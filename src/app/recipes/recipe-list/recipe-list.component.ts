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
    new Recipe('Test Recipe', 'This is a test', 'https://www.thespruceeats.com/thmb/GNWmK7xLQfPVeKaXiNZGkCbZcE8=/2500x1668/filters:no_upscale():max_bytes(150000):strip_icc()/crepes-2500-56a210a33df78cf772719028.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
