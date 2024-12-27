//create_crushing.js

//add other sulfur to single tag.
ServerEvents.recipes( event => {
    event.recipes.create.crushing([Item.of('biomesoplenty:rose_quartz_chunk',4)],'biomesoplenty:rose_quartz_block')
    event.recipes.create.crushing([Item.of('minecraft:quartz',4)],'minecraft:quartz_block')
});
