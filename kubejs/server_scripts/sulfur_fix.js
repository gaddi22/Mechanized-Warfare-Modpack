// sulfur_fix.js

//add other sulfur to single tag.
ServerEvents.tags('item', event => {
    event.get('forge:dusts/sulfur')
        .add('tfmg:sulfur_dust')
        .add('createloveandwar:raw_sulphur');
});
