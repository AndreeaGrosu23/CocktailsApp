import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Red wine', 1),
        // new Ingredient('Gin', 1),
        // new Ingredient('Rum', 1),
        // new Ingredient('Lime', 2),
        // new Ingredient('Orange', 2),
        // new Ingredient('Vodka', 1),
        // new Ingredient('Sugar', 1),
        // new Ingredient('Tonic', 1),
        // new Ingredient('Mint', 7),
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        // for(let ingredient of ingredients) {
        //    this.addIngredient(ingredient);
        // }
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}