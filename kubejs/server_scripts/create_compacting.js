//create_compacting.js

ServerEvents.recipes( event => {
    //recipe overlaps with cast iron, stone cutter is much more efficient anyway
    event.remove({ type: 'create:compacting', input: '#forge:ingots/iron', output:'#createdeco:internal/ingots/industrial_iron_ingots'})
});
