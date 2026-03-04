import { Inject, Injectable } from "@angular/core";
import { BookRepository } from "../domain/repositories/book.repository";
import { Book } from "../domain/entities/book";

@Injectable()

export class SaveBookUseCase{
    constructor(
        @Inject("bookRepository")private repository:BookRepository
    ){}

    execute(book:Book):Promise<void>{
        return this.repository.save(book)
    }
}