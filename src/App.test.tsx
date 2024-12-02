import { render, screen, fireEvent } from '@testing-library/react';

import App from './App';

describe('App Component', () => {
  test('increments counter on button click', () => {
    render(<App />);

    const button = screen.getByRole('button', { name: /count is 0/i });
    expect(button).toBeInTheDocument();

    fireEvent.click(button);

    expect(button).toHaveTextContent('count is 1');
  });
});
