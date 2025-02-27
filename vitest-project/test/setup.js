/// test/setup.js
import { setupServer } from 'msw/node';
import { handlers } from '../src/mocks/handlers';
import { beforeAll, afterAll, afterEach } from 'vitest';

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());