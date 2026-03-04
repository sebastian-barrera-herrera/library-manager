export class Author {
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public nationality?: string
  ) {}

  fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
