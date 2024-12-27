//BWG_logs.js

let bwg_stripped_log = [
    'biomeswevegone:stripped_aspen_log',
    'biomeswevegone:stripped_baobab_log',
    'biomeswevegone:stripped_blue_enchanted_log',
    'biomeswevegone:stripped_cika_log',
    'biomeswevegone:stripped_cypress_log',
    'biomeswevegone:stripped_ebony_log',
    'biomeswevegone:stripped_fir_log',
    'biomeswevegone:stripped_florus_log',
    'biomeswevegone:stripped_green_enchanted_log',
    'biomeswevegone:stripped_holly_log',
    'biomeswevegone:stripped_ironwood_log',
    'biomeswevegone:stripped_jacaranda_log',
    'biomeswevegone:stripped_mahogany_log',
    'biomeswevegone:stripped_maple_log',
    'biomeswevegone:stripped_palm_log',
    'biomeswevegone:stripped_pine_log',
    'biomeswevegone:stripped_rainbow_eucalyptus_log',
    'biomeswevegone:stripped_redwood_log',
    'biomeswevegone:stripped_sakura_log',
    'biomeswevegone:stripped_skyris_log',
    'biomeswevegone:stripped_white_mangrove_log',
    'biomeswevegone:stripped_willow_log',
    'biomeswevegone:stripped_witch_hazel_log',
    'biomeswevegone:stripped_zelkova_log',
    'biomeswevegone:stripped_palo_verde_log',
];

let bwg_stripped_wood = [
    'biomeswevegone:stripped_aspen_wood',
    'biomeswevegone:stripped_baobab_wood',
    'biomeswevegone:stripped_blue_enchanted_wood',
    'biomeswevegone:stripped_cika_wood',
    'biomeswevegone:stripped_cypress_wood',
    'biomeswevegone:stripped_ebony_wood',
    'biomeswevegone:stripped_fir_wood',
    'biomeswevegone:stripped_florus_wood',
    'biomeswevegone:stripped_green_enchanted_wood',
    'biomeswevegone:stripped_holly_wood',
    'biomeswevegone:stripped_ironwood_wood',
    'biomeswevegone:stripped_jacaranda_wood',
    'biomeswevegone:stripped_mahogany_wood',
    'biomeswevegone:stripped_maple_wood',
    'biomeswevegone:stripped_palm_wood',
    'biomeswevegone:stripped_pine_wood',
    'biomeswevegone:stripped_rainbow_eucalyptus_wood',
    'biomeswevegone:stripped_redwood_wood',
    'biomeswevegone:stripped_sakura_wood',
    'biomeswevegone:stripped_skyris_wood',
    'biomeswevegone:stripped_white_mangrove_wood',
    'biomeswevegone:stripped_willow_wood',
    'biomeswevegone:stripped_witch_hazel_wood',
    'biomeswevegone:stripped_zelkova_wood',
    'biomeswevegone:stripped_palo_verde_wood',
];

let bwg_log = [
    'biomeswevegone:aspen_log',
    'biomeswevegone:baobab_log',
    'biomeswevegone:blue_enchanted_log',
    'biomeswevegone:cika_log',
    'biomeswevegone:cypress_log',
    'biomeswevegone:ebony_log',
    'biomeswevegone:fir_log',
    'biomeswevegone:florus_log',
    'biomeswevegone:green_enchanted_log',
    'biomeswevegone:holly_log',
    'biomeswevegone:ironwood_log',
    'biomeswevegone:jacaranda_log',
    'biomeswevegone:mahogany_log',
    'biomeswevegone:maple_log',
    'biomeswevegone:palm_log',
    'biomeswevegone:pine_log',
    'biomeswevegone:rainbow_eucalyptus_log',
    'biomeswevegone:redwood_log',
    'biomeswevegone:sakura_log',
    'biomeswevegone:skyris_log',
    'biomeswevegone:white_mangrove_log',
    'biomeswevegone:willow_log',
    'biomeswevegone:witch_hazel_log',
    'biomeswevegone:zelkova_log',
    'biomeswevegone:palo_verde_log',
];

let bwg_wood = [
    'biomeswevegone:aspen_wood',
    'biomeswevegone:baobab_wood',
    'biomeswevegone:blue_enchanted_wood',
    'biomeswevegone:cika_wood',
    'biomeswevegone:cypress_wood',
    'biomeswevegone:ebony_wood',
    'biomeswevegone:fir_wood',
    'biomeswevegone:florus_wood',
    'biomeswevegone:green_enchanted_wood',
    'biomeswevegone:holly_wood',
    'biomeswevegone:ironwood_wood',
    'biomeswevegone:jacaranda_wood',
    'biomeswevegone:mahogany_wood',
    'biomeswevegone:maple_wood',
    'biomeswevegone:palm_wood',
    'biomeswevegone:pine_wood',
    'biomeswevegone:rainbow_eucalyptus_wood',
    'biomeswevegone:redwood_wood',
    'biomeswevegone:sakura_wood',
    'biomeswevegone:skyris_wood',
    'biomeswevegone:white_mangrove_wood',
    'biomeswevegone:willow_wood',
    'biomeswevegone:witch_hazel_wood',
    'biomeswevegone:zelkova_wood',
    'biomeswevegone:palo_verde_wood',
];

//add BWG logs to forge logs tag
ServerEvents.tags('item', event => {

    // let stripped_all = bwg_stripped_log.concat(bwg_stripped_wood);

    for(let log of bwg_stripped_log){
        event.add('forge:stripped_logs',log);
    }

    for(let wood of bwg_stripped_wood){
        event.add('forge:stripped_wood',wood);
    }
});



//allow mechanical saw to strip logs
ServerEvents.recipes( event => {
    for (let i = 0; i < bwg_log.length; i++) {
        let log = bwg_log[i];
        let stripped_log = bwg_stripped_log[i];
        
        // Create the cutting recipe
        event.recipes.create.cutting(stripped_log, log);
    }
});