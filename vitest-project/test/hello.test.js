/// tests/hello.test.js
import { describe, it, expect } from 'vitest';

describe('My First Test Suite', () => {
  it('should pass', () => {
    expect(true).toBe(true);
  });
});