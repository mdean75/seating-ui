export class Attendee {

  public id: number;
  public name: string;
  public business: string;
  public industry: string;
  public pairedWith?: number[];
  public pairedWithName?: string[];

  constructor(
    id: number,
    name: string,
    business: string,
    industry: string,
    pairedWithName?: string[],
    pairedWith?: number[]
  ) {
    this.name = name;
    this.business = business;
    this.industry = industry;
    this.id = id;
    this.pairedWith = pairedWith;
    this.pairedWithName = pairedWithName;
  }
}
