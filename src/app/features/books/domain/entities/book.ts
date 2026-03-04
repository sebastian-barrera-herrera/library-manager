
import { Author } from "../../../authors/domain/entities/author";
import { Category } from "../../../categories/domain/entities/category";
import { Copy } from "../../../copies/domain/entities/copy";

export class Book {
  constructor(
    public id: number,
    public title: string,
    public isbn: string,
    public publicationYear: number,
    public category: Category,
    public authors: Author[],
    public copies: Copy[]
  ) {}

  availableCopies(): Copy[] {
    return this.copies.filter(c => c.isAvailable());
  }

  hasAvailableCopies(): boolean {
    return this.availableCopies().length > 0;
  }
}
