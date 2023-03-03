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
exports.BookController = void 0;
const common_1 = require("@nestjs/common");
const book_service_1 = require("./book.service");
let BookController = class BookController {
    constructor(booksService) {
        this.booksService = booksService;
    }
    async getAllBooks() {
        const books = await this.booksService.getAllBooks();
        return books;
    }
    async addProduct(bookTitle, bookAuthor, authorlf, additionalAuthor, bookISBN, bookISBN13, rating, avgRating, publisher, binding, pages, pubYear, originalPubYear, dateRead, dateAdded, shelves, shelvesPos, exShelf, myReview, spoiler, privateNotes, count, copies) {
        const generatedId = await this.booksService.insertBook(bookTitle, bookAuthor, authorlf, additionalAuthor, bookISBN, bookISBN13, rating, avgRating, publisher, binding, pages, pubYear, originalPubYear, dateRead, dateAdded, shelves, shelvesPos, exShelf, myReview, spoiler, privateNotes, count, copies);
        return { id: generatedId };
    }
    async getBookById(bookId) {
        const book = await this.booksService.getBookById(bookId);
        return book;
    }
    async updateBookById(bookId, bookTitle, bookAuthor, authorlf, additionalAuthor, bookISBN, bookISBN13, rating, avgRating, publisher, binding, pages, pubYear, originalPubYear, dateRead, dateAdded, shelves, shelvesPos, exShelf, myReview, spoiler, privateNotes, count, copies) {
        await this.booksService.updateBookById(bookId, bookTitle, bookAuthor, authorlf, additionalAuthor, bookISBN, bookISBN13, rating, avgRating, publisher, binding, pages, pubYear, originalPubYear, dateRead, dateAdded, shelves, shelvesPos, exShelf, myReview, spoiler, privateNotes, count, copies);
        return null;
    }
    async deleteBookById(bookId) {
        await this.booksService.deleteBookById(bookId);
        return null;
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BookController.prototype, "getAllBooks", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)('bookTitle')),
    __param(1, (0, common_1.Body)('bookAuthor')),
    __param(2, (0, common_1.Body)('authorlf')),
    __param(3, (0, common_1.Body)('additionalAuthor')),
    __param(4, (0, common_1.Body)('bookISBN')),
    __param(5, (0, common_1.Body)('bookISBN13')),
    __param(6, (0, common_1.Body)('rating')),
    __param(7, (0, common_1.Body)('avgRating')),
    __param(8, (0, common_1.Body)('publisher')),
    __param(9, (0, common_1.Body)('binding')),
    __param(10, (0, common_1.Body)('pages')),
    __param(11, (0, common_1.Body)('pubYear')),
    __param(12, (0, common_1.Body)('originalPubYear')),
    __param(13, (0, common_1.Body)('dateRead')),
    __param(14, (0, common_1.Body)('dateAdded')),
    __param(15, (0, common_1.Body)('shelves')),
    __param(16, (0, common_1.Body)('shelvesPos')),
    __param(17, (0, common_1.Body)('exShelf')),
    __param(18, (0, common_1.Body)('myReview')),
    __param(19, (0, common_1.Body)('spoiler')),
    __param(20, (0, common_1.Body)('privateNotes')),
    __param(21, (0, common_1.Body)('count')),
    __param(22, (0, common_1.Body)('copies')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String, Number, Number, Number, String, String, Number, Number, Number, String, String, String, String, String, String, String, String, Number, Number]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "addProduct", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "getBookById", null);
__decorate([
    (0, common_1.Patch)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)('bookTitle')),
    __param(2, (0, common_1.Body)('bookAuthor')),
    __param(3, (0, common_1.Body)('authorlf')),
    __param(4, (0, common_1.Body)('additionalAuthor')),
    __param(5, (0, common_1.Body)('bookISBN')),
    __param(6, (0, common_1.Body)('bookISBN13')),
    __param(7, (0, common_1.Body)('rating')),
    __param(8, (0, common_1.Body)('avgRating')),
    __param(9, (0, common_1.Body)('publisher')),
    __param(10, (0, common_1.Body)('binding')),
    __param(11, (0, common_1.Body)('pages')),
    __param(12, (0, common_1.Body)('pubYear')),
    __param(13, (0, common_1.Body)('originalPubYear')),
    __param(14, (0, common_1.Body)('dateRead')),
    __param(15, (0, common_1.Body)('dateAdded')),
    __param(16, (0, common_1.Body)('shelves')),
    __param(17, (0, common_1.Body)('shelvesPos')),
    __param(18, (0, common_1.Body)('exShelf')),
    __param(19, (0, common_1.Body)('myReview')),
    __param(20, (0, common_1.Body)('spoiler')),
    __param(21, (0, common_1.Body)('privateNotes')),
    __param(22, (0, common_1.Body)('count')),
    __param(23, (0, common_1.Body)('copies')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String, String, Number, Number, Number, String, String, Number, Number, Number, String, String, String, String, String, String, String, String, Number, Number]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "updateBookById", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "deleteBookById", null);
BookController = __decorate([
    (0, common_1.Controller)("books"),
    __metadata("design:paramtypes", [book_service_1.BookService])
], BookController);
exports.BookController = BookController;
//# sourceMappingURL=book.controller.js.map