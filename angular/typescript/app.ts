import {SpaceCraft, ContainerShip} from './base-ships'
import {MylleniumFalcon} from './starfighters'

import * as _ from 'lodash'

console.log(_.pad("typescript examples", 40, "="))

let ship = new SpaceCraft('hyperdrive')
ship.jumpIntoHyperspace()

let falcon = new MylleniumFalcon ()
falcon.jumpIntoHyperspace()

let goodForTheJob = (ship: ContainerShip) => ship.cargoContainers > 2

console.log(`Falcon é bom para o serviço? ${goodForTheJob(falcon) ? 'SIM' : 'NÃO'}`)