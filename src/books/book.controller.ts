import {
  Controller,
  Post,
  Patch,
  Delete,
  Body,
  Get,
  Param,
} from "@nestjs/common";
import { BookService } from "./book.service";

@Controller("books")
export class BookController {
  constructor(private readonly booksService: BookService) {}

  @Get()
  async getAllBooks() {
    const books = await this.booksService.getAllBooks();
    return books;
  }

  @Post()
  async addProduct(
    @Body()
    bookData: {
      bookId: number,
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
      copies: number,
    }
  ) {
    const generatedId = await this.booksService.insertBook(
      bookData.bookTitle,
      bookData.bookAuthor,
      bookData.authorlf,
      bookData.additionalAuthor,
      bookData.bookISBN,
      bookData.bookISBN13,
      bookData.rating,
      bookData.avgRating,
      bookData.publisher,
      bookData.binding,
      bookData.pages,
      bookData.pubYear,
      bookData.originalPubYear,
      bookData.dateRead,
      bookData.dateAdded,
      bookData.shelves,
      bookData.shelvesPos,
      bookData.exShelf,
      bookData.myReview,
      bookData.spoiler,
      bookData.privateNotes,
      bookData.count,
      bookData.copies
    );
    return { id: generatedId };
  }

  @Get(":id")
  async getBookById(@Param("id") bookId: string) {
    const book = await this.booksService.getBookById(bookId);

    return book;
  }

  @Patch(":id")
  async updateBookById(
    @Param("id") bookId: string,
    @Body()
    bookData: {
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
      copies: number,
    }
  ) {
    await this.booksService.updateBookById(
      bookId,
      bookData.bookTitle,
      bookData.bookAuthor,
      bookData.authorlf,
      bookData.additionalAuthor,
      bookData.bookISBN,
      bookData.bookISBN13,
      bookData.rating,
      bookData.avgRating,
      bookData.publisher,
      bookData.binding,
      bookData.pages,
      bookData.pubYear,
      bookData.originalPubYear,
      bookData.dateRead,
      bookData.dateAdded,
      bookData.shelves,
      bookData.shelvesPos,
      bookData.exShelf,
      bookData.myReview,
      bookData.spoiler,
      bookData.privateNotes,
      bookData.count,
      bookData.copies,
    );
    return null;
  }

  @Delete(":id")
  async deleteBookById(@Param("id") bookId: string) {
    await this.booksService.deleteBookById(bookId);
    return null;
  }
}
