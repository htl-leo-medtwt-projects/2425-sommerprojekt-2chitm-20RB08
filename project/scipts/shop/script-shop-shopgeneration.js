/**************************
 * Get sell ables
 *************************/
let sellable = loot;

// Alle gekauften Loots zusammenführen
const playerLoots = [
    player.weaponArr,
    player.armorArr,
    player.skilArr
];

// Jetzt alle Loots herausfiltern, die NICHT vom Spieler gekauft wurden
const availableLoots = loot.filter(shopLoot => {
    // Wenn kein gleiches Loot in den playerLoots ist, behalten
    return !playerLoots.some(playerLoot => playerLoot.name === shopLoot.name);
});
