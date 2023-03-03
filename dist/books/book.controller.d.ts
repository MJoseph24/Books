import { BookService } from "./book.service";
export declare class BookController {
    private readonly booksService;
    constructor(booksService: BookService);
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
    addProduct(bookTitle: string, bookAuthor: string, authorlf: string, additionalAuthor: string, bookISBN: string, bookISBN13: number, rating: number, avgRating: number, publisher: string, binding: string, pages: number, pubYear: number, originalPubYear: number, dateRead: string, dateAdded: string, shelves: string, shelvesPos: string, exShelf: string, myReview: string, spoiler: string, privateNotes: string, count: number, copies: number): Promise<{
        id: import("./book.model").Book & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
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
    updateBookById(bookId: string, bookTitle: string, bookAuthor: string, authorlf: string, additionalAuthor: string, bookISBN: string, bookISBN13: number, rating: number, avgRating: number, publisher: string, binding: string, pages: number, pubYear: number, originalPubYear: number, dateRead: string, dateAdded: string, shelves: string, shelvesPos: string, exShelf: string, myReview: string, spoiler: string, privateNotes: string, count: number, copies: number): Promise<any>;
    deleteBookById(bookId: string): Promise<any>;
}
