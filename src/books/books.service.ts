import { Injectable } from '@nestjs/common';

export interface Book{
    title: string;
    author: string;
    year: number;
}

@Injectable()
export class BooksService {
    private books: Book[] = [
        { title: 'Cien años de soledad', author: 'Gabriel García Márquez', year: 1967 },
        { title: 'Harry Potter y la piedra filosofal', author: 'J.K. Rowling', year: 1997 },
        { title: 'El señor de los anillos', author: 'J.R.R. Tolkien', year: 1954 },
        { title: 'Crónica de una muerte anunciada', author: 'Gabriel García Márquez', year: 1981 },
        { title: 'La sombra del viento', author: 'Carlos Ruiz Zafón', year: 2001 },
    ];

    findBook(keyword: string) : Book[] {
        if (!keyword) return this.books;
        
        const lowerKeyword = keyword.toLowerCase();

        return this.books.filter(book => 
            book.title.toLowerCase().includes(lowerKeyword) || 
            book.author.toLowerCase().includes(lowerKeyword),
        );
    }
}
