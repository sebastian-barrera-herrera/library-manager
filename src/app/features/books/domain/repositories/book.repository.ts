import { Book } from "../entities/book";

export interface BookRepository {
  getAll(): Promise<Book[]>;
  getById(id: number): Promise<Book>;
//   getByIsbn(isbn: string): Promise<Book>;
  save(book:Book):Promise<void>;
}