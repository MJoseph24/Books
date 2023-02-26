"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let BookService = class BookService {
    constructor(bookModel) {
        this.bookModel = bookModel;
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
    async insertBook(bookTitle, bookAuthor, authorlf, additionalAuthor, bookISBN, bookISBN13, rating, avgRating, publisher, binding, pages, pubYear, originalPubYear, dateRead, dateAdded, shelves, shelvesPos, exShelf, myReview, spoiler, privateNotes, count, copies) {
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
        const result = await newBook.save();
        return result.id;
    }
    async getBookById(bookId) {
        const book = await await this.findBook(bookId);
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
    async updateBookById(bookId, bookTitle, bookAuthor, authorlf, additionalAuthor, bookISBN, bookISBN13, rating, avgRating, publisher, binding, pages, pubYear, originalPubYear, dateRead, dateAdded, shelves, shelvesPos, exShelf, myReview, spoiler, privateNotes, count, copies) {
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
    async deleteBookById(bookId) {
        const result = await this.bookModel.deleteOne({ _id: bookId }).exec();
        if (result.deletedCount === 0) {
            throw new common_1.NotFoundException("book does not exist");
        }
    }
    async findBook(bookId) {
        let book;
        try {
            book = await this.bookModel.findById(bookId);
        }
        catch (error) {
            throw new common_1.NotFoundException("book does not exist");
        }
        if (!book) {
            throw new common_1.NotFoundException("book does not exist");
        }
        return book;
    }
};
BookService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)("Book")),
    __metadata("design:paramtypes", [mongoose_2.Model])
], BookService);
exports.BookService = BookService;
//# sourceMappingURL=book.service.js.map