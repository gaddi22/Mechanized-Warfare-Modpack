// pack_crafting

ServerEvents.recipes( event => {
    // Add cigarette recipe
    event.shapeless(
        'createloveandwar:cigarette',
        [
            '#minecraft:wool',
            'minecraft:paper',
            'nethersdelight:propelplant_cane'
        ]
    )

});