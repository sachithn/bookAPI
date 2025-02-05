export class Book {
  constructor(id, title, author, publishYear) {
      this.id = id;
      this.title = title;
      this.author = author;
      this.publishYear = publishYear;
  }
}

// In-memory data store
export const books = [];