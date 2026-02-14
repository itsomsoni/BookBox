export const Category = {
  Fiction: "Fiction",
  NonFiction: "Non-fiction",
} as const;

export const Genre = {
  SelfHelp: "Self-help",
  Finance: "Finance",
  Romance: "Romance",
  Productivity: "Productivity",
  Adventure: "Adventure",
  Philosophy: "Philosophy",
} as const;

export type Category = typeof Category[keyof typeof Category];
export type Genre = typeof Genre[keyof typeof Genre];

export type Book = {
  bookId: number
  title: string
  author: string
  price: number
  images: string[]
  category: typeof Category[keyof typeof Category]
  genre: typeof Genre[keyof typeof Genre]
};

export const books: Book[] = [
  {
    bookId: 1,
    title: "Atomic Habits",
    author: "James Clear",
    price: 499,
    images: [
      "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/71g2ednj0JL.jpg"
    ],
    category: Category.NonFiction,
    genre: Genre.SelfHelp,
  },
  {
    bookId: 2,
    title: "The Psychology of Money",
    author: "Morgan Housel",
    price: 399,
    images: [
      "https://images-na.ssl-images-amazon.com/images/I/71g2ednj0JL.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/71g2ednj0JL.jpg"
    ],
    category: Category.NonFiction,
    genre: Genre.Finance,
  },
  {
    bookId: 3,
    title: "Ikigai",
    author: "Héctor García",
    price: 299,
    images: [
      "https://images-na.ssl-images-amazon.com/images/I/81l3rZK4lnL.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/81l3rZK4lnL.jpg"
    ],
    category: Category.NonFiction,
    genre: Genre.Philosophy,
  },
  {
    bookId: 4,
    title: "Do Epic Shit",
    author: "Ankur Warikoo",
    price: 349,
    images: [
      "https://images-na.ssl-images-amazon.com/images/I/71UwSHSZRnS.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/71UwSHSZRnS.jpg"
    ],
    category: Category.NonFiction,
    genre: Genre.SelfHelp,
  },
  {
    bookId: 5,
    title: "The Alchemist",
    author: "Paulo Coelho",
    price: 249,
    images: [
      "https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg"
    ],
    category: Category.Fiction,
    genre: Genre.Adventure,
  }
];