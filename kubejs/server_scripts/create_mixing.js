//create_mixing.js

ServerEvents.recipes( event => {
    // Add bronze recipe.
    event.recipes.create.mixing(['#forge:ingots/bronze'],['#forge:ingots/tin','4x #forge:ingots/copper']).heated()

    // cobblestone
    event.recipes.create.mixing('minecraft:cobblestone',[Fluid.water(10),Fluid.lava(10)])

});
