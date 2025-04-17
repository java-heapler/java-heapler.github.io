import React from 'react';
import { render, screen } from '@testing-library/react';
import Projects from '../components/Projects';
import { BrowserRouter } from 'react-router-dom';

test('renders Projects section with heading', () => {
  render(
    <BrowserRouter>
      <Projects />
    </BrowserRouter>
  );
  const heading = screen.getByRole('heading', { level: 2, name: /projects/i });
  expect(heading).toBeInTheDocument();
}); 