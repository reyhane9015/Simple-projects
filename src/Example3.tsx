import React, { useEffect } from 'react';


interface Book {
    id: number;
    title: string;
    author: string;
    genre: genreEnum;
    publishedDate: { day: string; month: string; year: string };  // Custom date format
}


enum genreEnum {
    Fiction = 'Fiction',
    NonFiction = 'NonFiction',
    Science = 'Science',
    History = 'History'
}


function convertToComparableDate(publishedDate: { day: string; month: string; year: string }): string {

    return `${publishedDate.year}-${publishedDate.month.padStart(2, '0')}-${publishedDate.day.padStart(2, '0')}`;
}


function filteredBooksByDate<T extends Book>(books: T[], targetDate: { day: string; month: string; year: string }): T[] {
    const targetComparableDate = convertToComparableDate(targetDate); // Convert the target date to comparable format

    return books.filter((book) => {
        const bookComparableDate = convertToComparableDate(book.publishedDate); // Convert each book's published date
        return bookComparableDate === targetComparableDate;  // Compare dates
    });
}

const BookList: React.FC = () => {
    const books: Book[] = [
        { id: 1, title: 'Book 1', author: "author 1", genre: genreEnum.Fiction, publishedDate: { day: "23", month: "3", year: "2023" } },
        { id: 2, title: 'Book 2', author: "author 2", genre: genreEnum.Fiction, publishedDate: { day: "23", month: "3", year: "2023" } },
        { id: 3, title: 'Book 3', author: "author 3", genre: genreEnum.Fiction, publishedDate: { day: "24", month: "3", year: "2023" } },
        { id: 4, title: 'Book 4', author: "author 4", genre: genreEnum.History, publishedDate: { day: "9", month: "3", year: "2023" } },
    ];

    useEffect(() => {
        const targetDate = { day: "23", month: "3", year: "2023" };
        const filteredBooks = filteredBooksByDate(books, targetDate);
        console.log('Books Published on 23rd March 2023:', filteredBooks);
    }, [books]);

    return (
        <div>
            <h1>Book List</h1>
            <p>Check the console for filtered books!</p>
        </div>
    );
}

export default BookList;
