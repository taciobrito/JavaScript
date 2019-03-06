import {SpaceCraft, ContainerShip} from './base-ships'


class MylleniumFalcon extends SpaceCraft implements ContainerShip {
	cargoContainers: number

	constructor() {
		super('hyperdrive')
		this.cargoContainers = 2
	}

	jumpIntoHyperspace () {
		if (Math.random() >= 0.5) {
			super.jumpIntoHyperspace()
		} else {
			console.log('Falha ao pular no hyperespaço')
		}
	}
}

export {MylleniumFalcon}