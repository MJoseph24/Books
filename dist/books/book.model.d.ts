import * as mongoose from "mongoose";
export declare const BookSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    bookTitle?: string;
    count?: number;
    bookAuthor?: string;
    authorlf?: string;
    additionalAuthor?: string;
    bookISBN?: string;
    bookISBN13?: number;
    rating?: number;
    avgRating?: number;
    publisher?: string;
    binding?: string;
    pages?: number;
    pubYear?: number;
    originalPubYear?: number;
    dateRead?: string;
    dateAdded?: string;
    shelves?: string;
    shelvesPos?: string;
    exShelf?: string;
    myReview?: string;
    spoiler?: string;
    privateNotes?: string;
    copies?: number;
}>;
export interface Book extends mongoose.Document {
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
}
