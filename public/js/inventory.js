var Inventory = require("inventory");
var ItemPile = require("itempile");
var inv = new Inventory(10);

inv.give(new ItemPile("key"));
inv.give(new ItemPile("fireScroll"));
inv.give(new ItemPile("hammer"));
inv.give(new ItemPile("potion"));
inv.give(new ItemPile("uniqueKey"));
//inv.give(new ItemPile("key"));

//var fireScroll = new ItemPile("fireScroll");
//inv.give(fireScroll);
// inv.take(key);
//console.log(inv);
//console.log(inv.array[0].item);
//console.log(inv.array[0].count);
module.exports = inv;
