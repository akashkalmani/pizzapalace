import { test, expect } from '@playwright/test';

test('Validate Users API', async ({ request }) => {

  const response = await request.get(
    'https://jsonplaceholder.typicode.com/users'
  );

  // Validate Status Code
  expect(response.status()).toBe(200);

  // Validate Response Header
  expect(response.headers()['content-type'])
    .toContain('application/json');

  // Convert response to JSON
  const users = await response.json();

  // Validate total users
  expect(users.length).toBe(10);

  // Validate first user
  expect(users[0].name).toBe('Leanne Graham');

  expect(users[0].email)
    .toContain('@');

  console.log(users[0]);

});