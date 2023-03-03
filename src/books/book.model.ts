import * as mongoose from "mongoose";

export const BookSchema = new mongoose.Schema({
  bookTitle: { type: String, required: false },
  bookAuthor: { type: String, required: false },
  authorlf: { type: String, required: false },
  additionalAuthor: { type: String, required: false },
  bookISBN: { type: String, required: false },
  bookISBN13: { type: Number, required: false },
  rating: { type: Number, required: false },
  avgRating: { type: Number, required: false },
  publisher: { type: String, required: false },
  binding: { type: String, required: false },
  pages: { type: Number, required: false },
  pubYear: { type: Number, required: false },
  originalPubYear: { type: Number, required: false },
  dateRead: { type: String, required: false },
  dateAdded: { type: String, required: false },
  shelves: { type: String, required: false },
  shelvesPos: { type: String, required: false },
  exShelf: { type: String, required: false },
  myReview: { type: String, required: false },
  spoiler: { type: String, required: false },
  privateNotes: { type: String, required: false },
  count: { type: Number, required: false },
  copies: { type: Number, required: false },
});

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
