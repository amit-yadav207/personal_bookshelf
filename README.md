# Personal Bookshelf

## Objective

The "Personal Bookshelf" project aims to develop a React application enabling users to search for books using the Open Library API and maintain a personal bookshelf in the browser using localStorage.

## Pages

### Book Search Page

#### Objective
Allow users to search for books using the Open Library API.

#### Components

- **Search bar:** Input field for users to type in the book's name.
- **Search results:** Display the search results in real-time as the user types.
- **Book cards:** Each card represents a book result from the search.

#### Functionality

- **Real-time search:** Display search results in real-time as the user types in the search input.
- **Accurate results:** Fetch accurate search results from the Open Library API.

#### Tech Stack

- React
- Axios for API requests
- React Router DOM for navigation
- React Icons for search icon
- React Toastify for toast notifications

### Personal Bookshelf Page

#### Objective
Allow users to maintain a personal bookshelf in the browser using localStorage.

#### Components

- **Book cards:** Display the user's saved books in their personal bookshelf.
- **Remove book functionality:** Allow users to remove books from their bookshelf.

#### Functionality

- **Persistent storage:** Store the user's bookshelf persistently using localStorage.
- **Display saved books:** Display the user's saved books on the bookshelf page.
- **Remove book:** Allow users to remove books from their bookshelf by clicking on a button.

#### Tech Stack

- React
- LocalStorage for persistent storage

## Tech Stack & Styling

- Styling: You're free to use any styling approach - CSS-in-JS, CSS modules, or regular CSS classnames.
- Client-Side Rendering: Only client-side rendering is needed; no server-side rendering.

## Evaluation Criteria

- Efficient API usage and data fetching.
- Proper React component structure and interactivity.
- Smooth user experience and intuitive interface.
- Effective styling and layout presentation.
