# Angular Book Library

Angular Book Library is a simple Angular 18 application designed to showcase a list of books fetched from an API, categorized into 10-year intervals based on their publication year. The application includes functionality to add new books via a modal form and dynamically updates the book list.

## Features

### Home Page: Book List

- Dynamic Fetching: Books are fetched from a provided API and displayed on the homepage.
- Categorization by Decade:
    - Books are grouped into 10-year intervals starting from the most recent publication year.
    - Displays "No publications" for intervals with no books.
    - Combines consecutive intervals with no publications into a single range.
- Sorting: Books within each decade are displayed in descending order of publication year.

### Add a Book

- Interactive Modal: An "Add a Book" button opens a modal with a form.
- Comprehensive Form:
    - Fields: title, author, publishedYear, genre.
    - All fields are mandatory.
    - Client-side validation ensures completeness before submission.
- Seamless Integration: On successful form submission:
    - A POST request is sent to the API.
    - The new book is added dynamically to the appropriate decade category on the homepage.

## Getting Started

1. Clone the repository.
2. Install dependencies: npm install.
3. Run the application: npm run start.
4. Access the application at http://localhost:4200.

## Running unit tests

Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).
Run `npm run test:watch` to continuously execute the unit tests via [Karma](https://karma-runner.github.io).

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Technologies

- Framework: Angular 18
- Language: TypeScript
- Styling: SCSS
- API Specification: OpenAPI 3.0 (refer to books 3.yaml)