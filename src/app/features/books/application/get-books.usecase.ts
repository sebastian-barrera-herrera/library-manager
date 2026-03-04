import { Inject, inject, Injectable } from "@angular/core";
import { BookRepository } from "../domain/repositories/book.repository";
import { Book } from "../domain/entities/book";

@Injectable()

export class GetBookUseCase{
    constructor(
        @Inject('BookRepository') private repository:BookRepository
    ){}

    execute():Promise<Book[]>{
        return this.repository.getAll();
    }
}