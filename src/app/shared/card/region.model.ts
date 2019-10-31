export class Globals {
    public keywords: Keywords[];
    public regions: Region[];
    public spellSpeeds: SpellSpeeds[];
    public rarities: Rarities[];
  constructor(
    jsonObject: Globals
    ) {
        this.keywords = jsonObject.keywords;
        this.regions = jsonObject.regions;
        this.spellSpeeds = jsonObject.spellSpeeds;
        this.rarities = jsonObject.rarities;
    }
}

export class Region {
    constructor(
      public abbreviation: string,
      public iconAbsolutePath: string,
      public name: string,
      public nameRef: string
    ) { }
}

export class Keywords {
    constructor(
      public description: string,
      public name: string,
      public nameRef: string
    ) { }
}

export class SpellSpeeds {
    constructor(
      public name: string,
      public nameRef: string
    ) { }
}

export class Rarities {
    constructor(
      public name: string,
      public nameRef: string
    ) { }
}
