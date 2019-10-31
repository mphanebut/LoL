export class SortOptions {
    public property: string;
    public icon:
        {
            name: string,
            viewBox: string
            title: string
        };
    public sortDirection ? = 'asc';
    public isActive ? = false;
}
