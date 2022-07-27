import { Book } from "./models/Book";
import { Item } from "./models/Item";

export const resolvers = {
  Query: {
    hello: () => "hi",
    findAllBooks: async () => await Book.find({}),
    findAllItems: async () => await Item.find({}),
  },

  Mutation: {
    createBook: async (_, { title, author }) => {
      const newBook = new Book({ title: title, author: author });
      await newBook.save();
      return newBook;
    },
    deleteBook: async (_, { id }) => {
      const newBook = await Book.findByIdAndDelete(id);
      return newBook;
    },
    createItem: async (_, { name, price }) => {
      const newItem = new Item({ name: name, price: price });
      await newItem.save();
      return newItem;
    
    },
    deleteBook: async (_, { id }) => {
      const newItem = await Book.findByIdAndDelete(id);
      return newItem;
    }
}
};
