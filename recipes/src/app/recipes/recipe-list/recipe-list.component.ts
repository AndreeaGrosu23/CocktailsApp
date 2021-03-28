import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Mojito', 'Mix this classic cocktail for a party using fresh mint, white rum, sugar, zesty lime and cooling soda water. Play with the quantities to suit your taste.', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/mojito-cocktails-150961e.jpg?quality=90&webp=true&resize=300,272'),
    new Recipe('Rhubarb gin', 'Use seasonal rhubarb to make this G&T-with-a-difference, or top the finished gin with soda water for a refreshing and gloriously pink summertime drink', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/rhubarb-gin-93e56de.jpg?quality=90&webp=true&resize=300,272'),
    new Recipe('Easy sangria', 'Embrace balmy summer days with a jug of sangria. With red wine, Spanish brandy, sparkling water, cinnamon and chopped fruit, it\'s a lovely sharing cocktail', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/sangria-new-crop-8fbb7a1.jpg?quality=90&webp=true&resize=300,272')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
