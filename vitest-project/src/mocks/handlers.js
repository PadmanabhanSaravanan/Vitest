// src/mocks/handlers.js
import { rest } from 'msw';

export const handlers = [
  rest.get('https://jsonplaceholder.typicode.com/users/1', (req, res, ctx) => {
    return res(ctx.json({ id: 1, name: 'Mock User' }));
  })
];