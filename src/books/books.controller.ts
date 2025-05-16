import { Controller, Get, NotFoundException, Query } from '@nestjs/common';
import { Book, BooksService } from './books.service';

@Controller('books')
export class BooksController {
    constructor (private readonly bookService: BooksService) {}

   @Get()
    getBooks(@Query('keyword') keyword: string): Book[] {
        const results = this.bookService.findBook(keyword || '');

        if (results.length === 0) {
        throw new NotFoundException('No se encontraron libros que coincidan con la búsqueda');
        }

        return results;
    }
}
