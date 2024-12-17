// Question:
/** You are creating a Library Management System. You need to manage books in the system. Each book has the following properties:

id: A unique identifier for the book.
title: A string representing the title of the book.
author: A string representing the name of the author.
genre: A genre for the book, which should be an enum (Fiction, NonFiction, Science, History).
publishedDate: The publication date of the book as a Date object.
Additionally, implement a generic function that will:

Accept an array of books and a genre.
Filter the books based on the genre and return the filtered books.
The function should be generic so that it can work with any object that has a genre field. **/


import React, { useEffect } from 'react';

interface Book {
    id: number;
    title: string;
    author: string;
    genre: genreEnum;
    publishedDate: Date;
}

enum genreEnum {
    Fiction = 'Fiction',
    NonFiction = 'NonFiction',
    Science = 'Science',
    History = 'History'
}

function filteredBooks<T extends Book>(books:T[] , genre: genreEnum): T[] {
    return books.filter((book) => book.genre === genre);
}

const BookList: React.FC = () => {

    const books: Book[] = [
        { id: 1, title: 'Book 1', author: "author 1", genre: genreEnum.Fiction, publishedDate: new Date("2023-03-23")},
        { id: 2, title: 'Book 2', author: "author 2" , genre: genreEnum.Fiction, publishedDate: new Date("2022-03-23")},
        { id: 3, title: 'Book 3', author: "author 3" , genre: genreEnum.Fiction, publishedDate: new Date("2013-03-23")},
        { id: 4, title: 'Book 4', author: "author 4" , genre: genreEnum.History, publishedDate: new Date("2023-03-12") },
      ];

      useEffect(() => {
        const filtered = filteredBooks(books, genreEnum.Fiction);
        console.log('Fiction Books:', filtered);
      }, [books]);



      return (
        <div>
          <h1>Book List</h1>
          <p>Check the console for filtered books!</p>
        </div>
      );
}

export default BookList;
