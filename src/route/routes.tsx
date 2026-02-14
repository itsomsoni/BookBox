import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import HomePage from '../features/home/HomePage';
import BookPage from '../features/books/BookPage';
import BookDetail from '../components/books/BookDetails';
import AboutPage from '../features/about/AboutPage';

export const router = createBrowserRouter([{
    path: '/',
    element: <App />,
    children: [
        { path: '', element: <HomePage /> },
        { path: '/about', element: <AboutPage /> },
        { path: '/books', element: <BookPage /> },
        { path: '/books/:id', element: <BookDetail /> },
    ]
}])