import { Book, BooksGrouped, BooksViewModel } from "../../models/book.model";

export const mockBooks: Book[] = [
    {
        "name": "To Kill a Mockingbird",
        "author": "Harper Lee",
        "category": "Fiction",
        "ratings": [
            {
                "source": "Goodreads",
                "value": 4.3
            },
            {
                "source": "Amazon",
                "value": 4.8
            }
        ],
        "publishYear": 1960
    },
    {
        "name": "1984",
        "author": "George Orwell",
        "category": "Dystopian",
        "ratings": [
            {
                "source": "Goodreads",
                "value": 4.2
            },
            {
                "source": "Barnes & Noble",
                "value": 4.5
            }
        ],
        "publishYear": 1949
    },
    {
        "name": "Pride and Prejudice",
        "author": "Jane Austen",
        "category": "Classic",
        "ratings": [
            {
                "source": "Goodreads",
                "value": 4.6
            },
            {
                "source": "Amazon",
                "value": 4.7
            }
        ],
        "publishYear": 1813
    },
    {
        "name": "The Great Gatsby",
        "author": "F. Scott Fitzgerald",
        "category": "Classic",
        "ratings": [
            {
                "source": "Goodreads",
                "value": 3.9
            },
            {
                "source": "Barnes & Noble",
                "value": 4
            }
        ],
        "publishYear": 1925
    },
    {
        "name": "Moby Dick",
        "author": "Herman Melville",
        "category": "Adventure",
        "ratings": [
            {
                "source": "Goodreads",
                "value": 3.5
            },
            {
                "source": "Amazon",
                "value": 3.8
            }
        ],
        "publishYear": 1851
    },
    {
        "name": "War and Peace",
        "author": "Leo Tolstoy",
        "category": "Historical",
        "ratings": [
            {
                "source": "Goodreads",
                "value": 4.1
            },
            {
                "source": "Barnes & Noble",
                "value": 4.2
            }
        ],
        "publishYear": 1869
    },
    {
        "name": "The Catcher in the Rye",
        "author": "J.D. Salinger",
        "category": "Fiction",
        "ratings": [
            {
                "source": "Goodreads",
                "value": 3.8
            },
            {
                "source": "Amazon",
                "value": 4
            }
        ],
        "publishYear": 1951
    },
    {
        "name": "Brave New World",
        "author": "Aldous Huxley",
        "category": "Science Fiction",
        "ratings": [
            {
                "source": "Goodreads",
                "value": 4
            },
            {
                "source": "Barnes & Noble",
                "value": 4.3
            }
        ],
        "publishYear": 1932
    },
    {
        "name": "The Lord of the Rings",
        "author": "J.R.R. Tolkien",
        "category": "Fantasy",
        "ratings": [
            {
                "source": "Goodreads",
                "value": 4.7
            },
            {
                "source": "Amazon",
                "value": 4.9
            }
        ],
        "publishYear": 1954
    },
    {
        "name": "Crime and Punishment",
        "author": "Fyodor Dostoevsky",
        "category": "Psychological Fiction",
        "ratings": [
            {
                "source": "Goodreads",
                "value": 4.2
            },
            {
                "source": "Barnes & Noble",
                "value": 4.4
            }
        ],
        "publishYear": 1866
    },
    {
        "name": "The Hobbit",
        "author": "J.R.R. Tolkien",
        "category": "Fantasy",
        "ratings": [
            {
                "source": "Goodreads",
                "value": 4.3
            },
            {
                "source": "Amazon",
                "value": 4.8
            }
        ],
        "publishYear": 1937
    },
    {
        "name": "The Brothers Karamazov",
        "author": "Fyodor Dostoevsky",
        "category": "Philosophical Fiction",
        "ratings": [
            {
                "source": "Goodreads",
                "value": 4.3
            },
            {
                "source": "Barnes & Noble",
                "value": 4.5
            }
        ],
        "publishYear": 1880
    },
    {
        "name": "Wuthering Heights",
        "author": "Emily Brontë",
        "category": "Classic",
        "ratings": [
            {
                "source": "Goodreads",
                "value": 3.9
            },
            {
                "source": "Amazon",
                "value": 4.1
            }
        ],
        "publishYear": 1847
    },
    {
        "name": "Jane Eyre",
        "author": "Charlotte Brontë",
        "category": "Classic",
        "ratings": [
            {
                "source": "Goodreads",
                "value": 4.1
            },
            {
                "source": "Barnes & Noble",
                "value": 4.4
            }
        ],
        "publishYear": 1847
    },
    {
        "name": "The Odyssey",
        "author": "Homer",
        "category": "Epic",
        "ratings": [
            {
                "source": "Goodreads",
                "value": 4
            },
            {
                "source": "Amazon",
                "value": 4.2
            }
        ],
        "publishYear": -800
    }
]

export const mockBooksGroupedByDecade= {
    "1960": [
        {"name":"To Kill a Mockingbird","author":"Harper Lee","category":"Fiction","ratings":[{"source":"Goodreads","value":4.3},{"source":"Amazon","value":4.8}],"publishYear":1960}
    ],
    "1950": [
        {"name":"The Lord of the Rings","author":"J.R.R. Tolkien","category":"Fantasy","ratings":[{"source":"Goodreads","value":4.7},{"source":"Amazon","value":4.9}],"publishYear":1954},{"name":"The Catcher in the Rye","author":"J.D. Salinger","category":"Fiction","ratings":[{"source":"Goodreads","value":3.8},{"source":"Amazon","value":4}],"publishYear":1951}
    ],
    "1940": [
        {"name":"1984","author":"George Orwell","category":"Dystopian","ratings":[{"source":"Goodreads","value":4.2},{"source":"Barnes & Noble","value":4.5}],"publishYear":1949}
    ],
    "1930": [
        {"name":"The Hobbit","author":"J.R.R. Tolkien","category":"Fantasy","ratings":[{"source":"Goodreads","value":4.3},{"source":"Amazon","value":4.8}],"publishYear":1937},{"name":"Brave New World","author":"Aldous Huxley","category":"Science Fiction","ratings":[{"source":"Goodreads","value":4},{"source":"Barnes & Noble","value":4.3}],"publishYear":1932}
    ],
    "1920": [
        {"name":"The Great Gatsby","author":"F. Scott Fitzgerald","category":"Classic","ratings":[{"source":"Goodreads","value":3.9},{"source":"Barnes & Noble","value":4}],"publishYear":1925}
    ],
    "1880": [
        {"name":"The Brothers Karamazov","author":"Fyodor Dostoevsky","category":"Philosophical Fiction","ratings":[{"source":"Goodreads","value":4.3},{"source":"Barnes & Noble","value":4.5}],"publishYear":1880}
    ],
    "1860": [
        {"name":"War and Peace","author":"Leo Tolstoy","category":"Historical","ratings":[{"source":"Goodreads","value":4.1},{"source":"Barnes & Noble","value":4.2}],"publishYear":1869},
        {"name":"Crime and Punishment","author":"Fyodor Dostoevsky","category":"Psychological Fiction","ratings":[{"source":"Goodreads","value":4.2},{"source":"Barnes & Noble","value":4.4}],"publishYear":1866}
    ],
    "1850": [
        {"name":"Moby Dick","author":"Herman Melville","category":"Adventure","ratings":[{"source":"Goodreads","value":3.5},{"source":"Amazon","value":3.8}],"publishYear":1851}
    ],
    "1840": [
        {"name":"Jane Eyre","author":"Charlotte Brontë","category":"Classic","ratings":[{"source":"Goodreads","value":4.1},{"source":"Barnes & Noble","value":4.4}],"publishYear":1847},
        {"name":"Wuthering Heights","author":"Emily Brontë","category":"Classic","ratings":[{"source":"Goodreads","value":3.9},{"source":"Amazon","value":4.1}],"publishYear":1847}
    ],
    "1810": [
        {"name":"Pride and Prejudice","author":"Jane Austen","category":"Classic","ratings":[{"source":"Goodreads","value":4.6},{"source":"Amazon","value":4.7}],"publishYear":1813}
    ],
    "-800": [
        {"name":"The Odyssey","author":"Homer","category":"Epic","ratings":[{"source":"Goodreads","value":4},{"source":"Amazon","value":4.2}],"publishYear":-800}
    ]
}

export const mockBooksViewModel: BooksViewModel[] = [
    {
        from: 1969,
        to: 1960,
        books:[
            {"name":"To Kill a Mockingbird","author":"Harper Lee","category":"Fiction","ratings":[{"source":"Goodreads","value":4.3},{"source":"Amazon","value":4.8}],"publishYear":1960}
        ]
    },
    {
        from: 1959,
        to: 1950,
        books: [
            {"name":"The Lord of the Rings","author":"J.R.R. Tolkien","category":"Fantasy","ratings":[{"source":"Goodreads","value":4.7},{"source":"Amazon","value":4.9}],"publishYear":1954},{"name":"The Catcher in the Rye","author":"J.D. Salinger","category":"Fiction","ratings":[{"source":"Goodreads","value":3.8},{"source":"Amazon","value":4}],"publishYear":1951}
        ]
    },
    {
        from: 1949,
        to: 1940,
        books:[
            {"name":"1984","author":"George Orwell","category":"Dystopian","ratings":[{"source":"Goodreads","value":4.2},{"source":"Barnes & Noble","value":4.5}],"publishYear":1949}
        ]
    },
    {
        from: 1939,
        to: 1930,
        books: [
            {"name":"The Hobbit","author":"J.R.R. Tolkien","category":"Fantasy","ratings":[{"source":"Goodreads","value":4.3},{"source":"Amazon","value":4.8}],"publishYear":1937},{"name":"Brave New World","author":"Aldous Huxley","category":"Science Fiction","ratings":[{"source":"Goodreads","value":4},{"source":"Barnes & Noble","value":4.3}],"publishYear":1932}
        ]
    },
    {
        from: 1929,
        to: 1920,
        books: [
            {"name":"The Great Gatsby","author":"F. Scott Fitzgerald","category":"Classic","ratings":[{"source":"Goodreads","value":3.9},{"source":"Barnes & Noble","value":4}],"publishYear":1925}
        ]
    },
    {
        from: 1919,
        to: 1890,
        books: []
    },
    {
        from: 1889,
        to: 1880,
        books: [
            {"name":"The Brothers Karamazov","author":"Fyodor Dostoevsky","category":"Philosophical Fiction","ratings":[{"source":"Goodreads","value":4.3},{"source":"Barnes & Noble","value":4.5}],"publishYear":1880}
        ]
    },
    {
        from: 1879,
        to: 1870,
        books: []
    },
    {
        from: 1869,
        to: 1860,
        books: [
            {"name":"War and Peace","author":"Leo Tolstoy","category":"Historical","ratings":[{"source":"Goodreads","value":4.1},{"source":"Barnes & Noble","value":4.2}],"publishYear":1869},
            {"name":"Crime and Punishment","author":"Fyodor Dostoevsky","category":"Psychological Fiction","ratings":[{"source":"Goodreads","value":4.2},{"source":"Barnes & Noble","value":4.4}],"publishYear":1866}
        ]
    },
    {
        from: 1859,
        to: 1850,
        books: [
            {"name":"Moby Dick","author":"Herman Melville","category":"Adventure","ratings":[{"source":"Goodreads","value":3.5},{"source":"Amazon","value":3.8}],"publishYear":1851}
        ]
    },
    {
        from: 1849,
        to: 1840,
        books: [
            {"name":"Jane Eyre","author":"Charlotte Brontë","category":"Classic","ratings":[{"source":"Goodreads","value":4.1},{"source":"Barnes & Noble","value":4.4}],"publishYear":1847},
            {"name":"Wuthering Heights","author":"Emily Brontë","category":"Classic","ratings":[{"source":"Goodreads","value":3.9},{"source":"Amazon","value":4.1}],"publishYear":1847}
        ]
    },
    {
        from: 1839,
        to: 1820,
        books: []
    },
    {
        from: 1819,
        to: 1810,
        books: [
            {"name":"Pride and Prejudice","author":"Jane Austen","category":"Classic","ratings":[{"source":"Goodreads","value":4.6},{"source":"Amazon","value":4.7}],"publishYear":1813}
        ]
    },
    {
        from: 1809,
        to: -790,
        books: []
    },
    {
        from: -791,
        to: -800,
        books: [
            {"name":"The Odyssey","author":"Homer","category":"Epic","ratings":[{"source":"Goodreads","value":4},{"source":"Amazon","value":4.2}],"publishYear":-800}
        ]
    }, 
];