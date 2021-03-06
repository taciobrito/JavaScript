"use strict";
exports.__esModule = true;
var base_ships_1 = require("./base-ships");
var starfighters_1 = require("./starfighters");
var _ = require("lodash");
console.log(_.pad("typescript examples", 40, "="));
var ship = new base_ships_1.SpaceCraft('hyperdrive');
ship.jumpIntoHyperspace();
var falcon = new starfighters_1.MylleniumFalcon();
falcon.jumpIntoHyperspace();
var goodForTheJob = function (ship) { return ship.cargoContainers > 2; };
console.log("Falcon \u00E9 bom para o servi\u00E7o? " + (goodForTheJob(falcon) ? 'SIM' : 'NÃO'));
