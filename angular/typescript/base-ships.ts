class SpaceCraft {
	
	constructor (public propulsor: string) {}

	jumpIntoHyperspace () {
		console.log(`Entrando no hyperespaço com ${this.propulsor}`)
	}	
}

interface ContainerShip {
	cargoContainers: number
}

export {SpaceCraft, ContainerShip}