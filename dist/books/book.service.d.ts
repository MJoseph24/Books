import { Book } from "./book.model";
import { Model } from "mongoose";
export declare class BookService {
    private readonly bookModel;
    constructor(bookModel: Model<Book>);
    getAllBooks(): Promise<{
        bookId: string;
        bookTitle: string;
        bookAuthor: string;
        authorlf: string;
        additionalAuthor: string;
        bookISBN: string;
        bookISBN13: number;
        rating: number;
        avgRating: number;
        publisher: string;
        binding: string;
        pages: number;
        pubYear: number;
        originalPubYear: number;
        dateRead: string;
        dateAdded: string;
        shelves: string;
        shelvesPos: string;
        exShelf: string;
        myReview: string;
        spoiler: string;
        privateNotes: string;
        count: number;
        copies: number;
    }[]>;
    insertBook(bookTitle: string, bookAuthor: string, authorlf: string, additionalAuthor: string, bookISBN: string, bookISBN13: number, rating: number, avgRating: number, publisher: string, binding: string, pages: number, pubYear: number, originalPubYear: number, dateRead: string, dateAdded: string, shelves: string, shelvesPos: string, exShelf: string, myReview: string, spoiler: string, privateNotes: string, count: number, copies: number): Promise<string>;
    getBookById(bookId: string): Promise<{
        bookTitle: string;
        bookAuthor: string;
        authorlf: string;
        additionalAuthor: string;
        bookISBN: string;
        bookISBN13: number;
        rating: number;
        avgRating: number;
        publisher: string;
        binding: string;
        pages: number;
        pubYear: number;
        originalPubYear: number;
        dateRead: string;
        dateAdded: string;
        shelves: string;
        shelvesPos: string;
        exShelf: string;
        myReview: string;
        spoiler: string;
        privateNotes: string;
        count: number;
        copies: number;
    }>;
    updateBookById(bookId: string, bookTitle: string, bookAuthor: string, authorlf: string, additionalAuthor: string, bookISBN: string, bookISBN13: number, rating: number, avgRating: number, publisher: string, binding: string, pages: number, pubYear: number, originalPubYear: number, dateRead: string, dateAdded: string, shelves: string, shelvesPos: string, exShelf: string, myReview: string, spoiler: string, privateNotes: string, count: number, copies: number): Promise<void>;
    deleteBookById(bookId: string): Promise<void>;
    private findBook;
}
