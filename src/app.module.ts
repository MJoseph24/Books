import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { BookModule } from "./books/book.module";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [
    BookModule,
    MongooseModule.forRoot(
      "mongodb+srv://MJoseph24:MJoseph24@cluster0.jeo1kca.mongodb.net/test"
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
