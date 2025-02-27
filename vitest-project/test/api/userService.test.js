/// test/api/userService.test.js
import { describe, it, expect, vi } from 'vitest';
import { fetchUser } from '../../src/api/userService';

// Mock the API function
vi.mock('../../src/api/userService', () => ({
  fetchUser: vi.fn(() => Promise.resolve({ id: 1, name: 'John Doe' })),
}));

describe('fetchUser API', () => {
  it('returns mock user data', async () => {
    const user = await fetchUser();
    expect(user).toEqual({ id: 1, name: 'John Doe' });
  });
});