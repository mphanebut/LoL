export class Filter {
    public property: string;
    public match: string;
    public value: string;
    public isChecked: boolean;

    constructor(property: string, match: string, value: string, isChecked: boolean) {
      this.property = property;
      this.match = match;
      this.value = value;
      this.isChecked = isChecked;
    }

}

export class FilterInput {
    public title: string;
    public property: string;
    public filters: FilterInputOptions[];
}

export class FilterInputOptions {
    public value: string;
    public label: string;
    public match ? = 'eq';
    public isChecked ? = false;
}

