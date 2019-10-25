export class Card {
    constructor(
        // public id: string,
        // public idComponents:
        // {
        //     set: number,
        //     region:
        //     {
        //         id: string,
        //         name: string
        //     }
        // },
        public cardCode: string,
        public name: string,
        public type: string,
        public subType: string,
        public superType: string,
        public spellSpeed: string,
        public spellSpeedRef: string,
        public rarity: string,
        public rarityRef: string,
        public description: string,
        public descriptionRaw: string,
        public keywords: [{string}],
        public keywordsRefs: [{string}],
        public associatedCards: [{string}],
        public associatedCardRefs: [{string}],
        public health: number,
        public attack: number,
        public cost: number,
        public assets: Assets,
        public region: string,
        public regionRef: string,
        public collectible: boolean
    ) { }
}

export class CardCode {
    code: string;
    constructor(
      public components: CardIdComponents
    ) {
        this.code = components.set.toString() + components.region.toString();
    }
}

export class CardIdComponents {
    constructor(
      public set: number,
      public region: CardRegion
    ) { }
}

export class CardRegion {
    constructor(
      public id: string,
      public name: string,
    ) { }
}

export class Assets {
    constructor(
      public gameAbsolutePath: string,
      public fullAbsolutePath: string,
    ) { }
}
