addLayer("p", {
    name: "Prestige Island", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "P", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#4B96EA",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "prestige points", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade('p', 15)) mult = mult.times(5)
        if (hasUpgrade('p', 17)) mult = mult.times(10)
        if (hasUpgrade('p', 22)) mult = mult.times(50)
        if (hasUpgrade('p', 24)) mult = mult.times(100)
        if (hasUpgrade('r', 11)) mult = mult.times(10)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        //{key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    upgrades: {
        11: {
            name: "More Points",
            description: "Double your point gain",
            cost: new Decimal(1),
        },
        12: {
            name: "Even More Points",
            description: "Double your point gain again",
            cost: new Decimal(2),
        },
        13: {
            name: "Too Many Points",
            description: "Multiply you point gain by 4",
            cost: new Decimal(5),
        },
        14: {
            name: "Prestige for Points",
            description: "Prestige points multiply point gain by a factor of ^0.25",
            cost: new Decimal(20),
            effect() {
                return player[this.layer].points.add(1).pow(0.25)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        15: {
            name: "More Prestige Points",
            description: "Multiply prestige point gain by 5",
            cost: new Decimal(30),
        },
        16: {
            name: "Points x Points",
            description: "Points multiply point gain by a factor of ^0.1",
            cost: new Decimal(50),
            effect() {
                return player.points.add(1).pow(0.1)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        17: {
            name: "Even More Prestige Points",
            description: "Multiply prestige point gain by 10",
            cost: new Decimal(60),
        },
        18: {
            name: "Way Too Many Points",
            description: "Multiply point gain by 20",
            cost: new Decimal(200),
        },
        19: {
            name: "Super Points",
            description: "Multiply point gain by 30",
            cost: new Decimal(500),
        },
        21: {
            name: "Super Duper Points",
            description: "Multiply point gain by 100",
            cost: new Decimal(1000),
        },
        22: {
            name: "Super Prestige Points",
            description: "Multiply prestige point gain by 50",
            cost: new Decimal(2000),
        },
        23: {
            name: "Crazy Prestiging",
            description: "Doubles upgrade 14's effect",
            cost: new Decimal(10000),
        },
        24: {
            name: "Super Duper Prestige Points",
            description: "Multiply prestige point gain by 100",
            cost: new Decimal(20000),
        },
        25: {
            name: "Point Make More Points",
            description: "Doubles upgrade 16's effect",
            cost: new Decimal(40000),
        },
    }
})
addLayer("r", {
    name: "Rebirth Dimension", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "R", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    color: "#FACE69",
    requires: new Decimal(1000), // Can be a function that takes requirement increases into account
    resource: "rebirths", // Name of prestige currency
    baseResource: "prestige points", // Name of resource prestige is based on
    baseAmount() {return player['p'].points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        //{key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    upgrades: {
        11: {
            name: "Being To Have More Prestige Points",
            description: "Earn 10 times more prestige points",
            cost: new Decimal(1),
        },
        12: {
            name: "Being To Have More Points",
            description: "Earn 20 times more points",
            cost: new Decimal(2),
        },
    }
})
