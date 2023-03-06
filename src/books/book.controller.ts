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
    @Body("bookTitle") bookTitle: string,
    @Body("bookAuthor") bookAuthor: string,
    @Body("authorlf") authorlf: string,
    @Body("additionalAuthor") additionalAuthor: string,
    @Body("bookISBN") bookISBN: string,
    @Body("bookISBN13") bookISBN13: number,
    @Body("rating") rating: number,
    @Body("avgRating") avgRating: number,
    @Body("publisher") publisher: string,
    @Body("binding") binding: string,
    @Body("pages") pages: number,
    @Body("pubYear") pubYear: number,
    @Body("originalPubYear") originalPubYear: number,
    @Body("dateRead") dateRead: string,
    @Body("dateAdded") dateAdded: string,
    @Body("shelves") shelves: string,
    @Body("shelvesPos") shelvesPos: string,
    @Body("exShelf") exShelf: string,
    @Body("myReview") myReview: string,
    @Body("spoiler") spoiler: string,
    @Body("privateNotes") privateNotes: string,
    @Body("count") count: number,
    @Body("copies") copies: number
  ) {
    console.log(copies);
    const generatedId = await this.booksService.insertBook(
      bookTitle,
      bookAuthor,
      authorlf,
      additionalAuthor,
      bookISBN,
      bookISBN13,
      rating,
      avgRating,
      publisher,
      binding,
      pages,
      pubYear,
      originalPubYear,
      dateRead,
      dateAdded,
      shelves,
      shelvesPos,
      exShelf,
      myReview,
      spoiler,
      privateNotes,
      count,
      copies
    );
    return { id: generatedId };
  }

  @Get("/authors")
  async getAllAuthors() {
    return await this.booksService.getAllAuthors();
  }

  @Get(':id')
  async getBookById(@Param('id') bookId: string,) {
    
    const book = await this.booksService.getBookById(bookId);
    console.log(bookId);
    return book;
  }

  @Patch(":id")
  async updateBookById(
    @Param("id") bookId: string,
    @Body("bookTitle") bookTitle: string,
    @Body("bookAuthor") bookAuthor: string,
    @Body("authorlf") authorlf: string,
    @Body("additionalAuthor") additionalAuthor: string,
    @Body("bookISBN") bookISBN: string,
    @Body("bookISBN13") bookISBN13: number,
    @Body("rating") rating: number,
    @Body("avgRating") avgRating: number,
    @Body("publisher") publisher: string,
    @Body("binding") binding: string,
    @Body("pages") pages: number,
    @Body("pubYear") pubYear: number,
    @Body("originalPubYear") originalPubYear: number,
    @Body("dateRead") dateRead: string,
    @Body("dateAdded") dateAdded: string,
    @Body("shelves") shelves: string,
    @Body("shelvesPos") shelvesPos: string,
    @Body("exShelf") exShelf: string,
    @Body("myReview") myReview: string,
    @Body("spoiler") spoiler: string,
    @Body("privateNotes") privateNotes: string,
    @Body("count") count: number,
    @Body("copies") copies: number
  ) {
    await this.booksService.updateBookById(
      bookId,
      bookTitle,
      bookAuthor,
      authorlf,
      additionalAuthor,
      bookISBN,
      bookISBN13,
      rating,
      avgRating,
      publisher,
      binding,
      pages,
      pubYear,
      originalPubYear,
      dateRead,
      dateAdded,
      shelves,
      shelvesPos,
      exShelf,
      myReview,
      spoiler,
      privateNotes,
      count,
      copies
    );
    return null;
  }

  @Delete(":id")
  async deleteBookById(@Param("id") bookId: string) {
    await this.booksService.deleteBookById(bookId);
    return null;
  }
}
