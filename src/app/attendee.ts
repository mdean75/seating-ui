export class Attendee {
  constructor(
    public id: number,
    public name: string,
    public business: string,
    public industry: string,
    public pairedWith?: string[]
  ) { }
}
