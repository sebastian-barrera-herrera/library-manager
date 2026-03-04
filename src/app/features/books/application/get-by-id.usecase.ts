import { Inject,  Injectable } from "@angular/core";
import { BookRepository } from "../domain/repositories/book.repository";
import { Book } from "../domain/entities/book";

@Injectable()

export class GetByIdUseCase{
    constructor(
        @Inject("BookRepositoy") private repository:BookRepository
    ){}

    execute(id: number): Promise<Book>{
        return this.repository.getById(id)
    }
};