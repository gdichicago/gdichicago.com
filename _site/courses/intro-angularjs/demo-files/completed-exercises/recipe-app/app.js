(function(){

    angular
        .module('recipeApp', [])

        .controller('RecipeController', function(){
            
            // for first exercise with a single object
            this.recipe = recipe;

            // for second exercise with an array of objects
            // this.recipes = recipes;
        });

    var recipe = {
        name: 'Oatmeal',
        cookTime: 10,
        prepTime: 2,
        ingredients: ['oats', 'water', 'maple syrup'],
        directions: "Boil the oats in water and add maple syrup to taste",
        isVegan: true,
        isPaleo: false,
        isGlutenFree: true
    }

    var recipes = [
        {
            name: 'Waffles',
            cookTime: 9,
            prepTime: 10,
            ingredients: ['flour', 'water', 'sugar', 'vanilla'],
            directions: "Mix everything together in a bowl with a whisk. Use a waffle press to make your waffles!",
            isVegan: false,
            isPaleo: true,
            isGlutenFree: false
        },
        {
            name: 'Fruit Salad',
            cookTime: 0,
            prepTime: 10,
            ingredients: ['apples', 'oranges', 'grapes', 'watermelon'],
            directions: "Chop the fruit and mix together in a bowl",
            isVegan: true,
            isPaleo: true,
            isGlutenFree: true
        }
    ];

})();