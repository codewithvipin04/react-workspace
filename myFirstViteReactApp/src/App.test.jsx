import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';

describe('App', () => {
    it('renders without crashing', () => {
        render(<App />);
        expect(screen.getByText('Vite + React')).toBeInTheDocument();
    })
});