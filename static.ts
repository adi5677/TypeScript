class company {
    name: string;
    location: string;
    established: number;

    constructor(name: string, location: string, established: number) {
        this.name = name;
        this.location = location;
        this.established = established;
    }

    displayCompanyInfo(): void {
        console.log(`Company Name: ${this.name}`);
        console.log(`Location: ${this.location}`);
        console.log(`Established: ${this.established}`);
    }

}

var c1 = new company("Tech Solutions", "San Francisco", 2005);
c1.displayCompanyInfo();