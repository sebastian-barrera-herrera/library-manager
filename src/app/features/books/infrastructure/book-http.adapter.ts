import { inject, Injectable } from "@angular/core";
import { BookRepository } from "../domain/repositories/book.repository";
import { Book } from "../domain/entities/book";
import { HttpClient } from "@angular/common/http";
import { firstValueFrom } from "rxjs";

@Injectable()

export class BookHttpAdapter implements BookRepository{
    
    http = inject(HttpClient);

    async getAll(): Promise<Book[]> {
        return firstValueFrom(
            this.http.get<Book[]>('api')
        )
    }

    async getById(id: number): Promise<Book> {
        return firstValueFrom(
            this.http.get<Book>('api/id')
        )
    }

    async save(book: Book): Promise<void> {
        return firstValueFrom(
            this.http.put<void>('api', book)
        )
    }
}