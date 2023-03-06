import { Injectable, NotFoundException } from "@nestjs/common";
import { Book } from "./book.model";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { title } from "process";
import { CONFIGURABLE_MODULE_ID } from "@nestjs/common/module-utils/constants";

@Injectable()
export class BookService {
  constructor(@InjectModel("Book") private readonly bookModel: Model<Book>) {}

  async getAllAuthors() {
    const books = await this.bookModel.find({ sect: 'bookAuthor' }).exec();
    const authors = books.map((book) => book.bookAuthor);
    return authors;
  }

  async getAllBooks() {
    const books = await this.bookModel.find().exec();

    return books.map((book) => ({
      bookId: book.bookId,
      bookTitle: book.bookTitle,
      bookAuthor: book.bookAuthor,
      authorlf: book.authorlf,
      additionalAuthor: book.additionalAuthor,
      bookISBN: book.bookISBN,
      bookISBN13: book.bookISBN13,
      rating: book.rating,
      avgRating: book.avgRating,
      publisher: book.publisher,
      binding: book.binding,
      pages: book.pages,
      pubYear: book.pubYear,
      originalPubYear: book.originalPubYear,
      dateRead: book.dateRead,
      dateAdded: book.dateAdded,
      shelves: book.shelves,
      shelvesPos: book.shelvesPos,
      exShelf: book.exShelf,
      myReview: book.myReview,
      spoiler: book.spoiler,
      privateNotes: book.privateNotes,
      count: book.count,
      copies: book.copies,
    }));
  }

  async insertBook(
    bookTitle: string,
    bookAuthor: string,
    authorlf: string,
    additionalAuthor: string,
    bookISBN: string,
    bookISBN13: number,
    rating: number,
    avgRating: number,
    publisher: string,
    binding: string,
    pages: number,
    pubYear: number,
    originalPubYear: number,
    dateRead: string,
    dateAdded: string,
    shelves: string,
    shelvesPos: string,
    exShelf: string,
    myReview: string,
    spoiler: string,
    privateNotes: string,
    count: number,
    copies: number
  ) {
    console.log(copies);
    const newBook = new this.bookModel({
      bookTitle: bookTitle,
      bookAuthor: bookAuthor,
      authorlf: authorlf,
      additionalAuthor: additionalAuthor,
      bookISBN: bookISBN,
      bookISBN13: bookISBN13,
      rating: rating,
      avgRating: avgRating,
      publisher: publisher,
      binding: binding,
      pages: pages,
      pubYear: pubYear,
      originalPubYear: originalPubYear,
      dateRead: dateRead,
      dateAdded: dateAdded,
      shelves: shelves,
      shelvesPos: shelvesPos,
      exShelf: exShelf,
      myReview: myReview,
      spoiler: spoiler,
      privateNotes: privateNotes,
      count: count,
      copies: copies,
    });
    console.log(newBook);
    const result = await newBook.save();
    return result.id as string;
  }

  async getBookById(bookId: string) {
    const book =  await this.findBook(bookId);
    console.log(bookId);

    return {
      bookTitle: book.bookTitle,
      bookAuthor: book.bookAuthor,
      authorlf: book.authorlf,
      additionalAuthor: book.additionalAuthor,
      bookISBN: book.bookISBN,
      bookISBN13: book.bookISBN13,
      rating: book.rating,
      avgRating: book.avgRating,
      publisher: book.publisher,
      binding: book.binding,
      pages: book.pages,
      pubYear: book.pubYear,
      originalPubYear: book.originalPubYear,
      dateRead: book.dateRead,
      dateAdded: book.dateAdded,
      shelves: book.shelves,
      shelvesPos: book.shelvesPos,
      exShelf: book.exShelf,
      myReview: book.myReview,
      spoiler: book.spoiler,
      privateNotes: book.privateNotes,
      count: book.count,
      copies: book.copies,
    };
  }

  async updateBookById(
    bookId: string,
    bookTitle: string,
    bookAuthor: string,
    authorlf: string,
    additionalAuthor: string,
    bookISBN: string,
    bookISBN13: number,
    rating: number,
    avgRating: number,
    publisher: string,
    binding: string,
    pages: number,
    pubYear: number,
    originalPubYear: number,
    dateRead: string,
    dateAdded: string,
    shelves: string,
    shelvesPos: string,
    exShelf: string,
    myReview: string,
    spoiler: string,
    privateNotes: string,
    count: number,
    copies: number
  ) {
    const updatedBook = await this.findBook(bookId);

    if (bookTitle) {
      updatedBook.bookTitle = bookTitle;
    }
    if (bookAuthor) {
      updatedBook.bookAuthor = bookAuthor;
    }
    if (authorlf) {
      updatedBook.authorlf = authorlf;
    }
    if (additionalAuthor) {
      updatedBook.additionalAuthor = additionalAuthor;
    }
    if (bookISBN) {
      updatedBook.bookISBN = bookISBN;
    }
    if (bookISBN13) {
      updatedBook.bookISBN13 = bookISBN13;
    }
    if (rating) {
      updatedBook.rating = rating;
    }
    if (avgRating) {
      updatedBook.avgRating = avgRating;
    }
    if (publisher) {
      updatedBook.publisher = publisher;
    }
    if (binding) {
      updatedBook.binding = binding;
    }
    if (pages) {
      updatedBook.pages = pages;
    }
    if (pubYear) {
      updatedBook.pubYear = pubYear;
    }
    if (originalPubYear) {
      updatedBook.originalPubYear = originalPubYear;
    }
    if (dateRead) {
      updatedBook.dateRead = dateRead;
    }
    if (dateAdded) {
      updatedBook.dateAdded = dateAdded;
    }
    if (shelves) {
      updatedBook.shelves = shelves;
    }
    if (shelvesPos) {
      updatedBook.shelvesPos = shelvesPos;
    }
    if (exShelf) {
      updatedBook.exShelf = exShelf;
    }
    if (myReview) {
      updatedBook.myReview = myReview;
    }
    if (spoiler) {
      updatedBook.spoiler = spoiler;
    }
    if (privateNotes) {
      updatedBook.privateNotes = privateNotes;
    }
    if (count) {
      updatedBook.count = count;
    }
    if (copies) {
      updatedBook.copies = copies;
    }
    updatedBook.save();
  }

  async deleteBookById(bookId: string) {
    const result = await this.bookModel.deleteOne({ _id: bookId }).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException("book does not exist");
    }
  }

  private async findBook(bookId: string): Promise<Book> {
    let book;
    console.log(bookId);
    try {
      book = await this.bookModel.findById(bookId);
    } catch (error) {
      throw new NotFoundException("book does not exist");
    }
    if (!book) {
      throw new NotFoundException("book does not exist!!!!!");
    }
    console.log(book);
    return book;
  }
}
