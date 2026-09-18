import React from 'react';
import { renderToString } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import { PagesContent } from './pages/index.jsx';

export function render(url) {
  return {
    html: renderToString(
      <React.StrictMode>
        <MemoryRouter initialEntries={[url]}>
          <PagesContent />
        </MemoryRouter>
      </React.StrictMode>
    )
  };
}
