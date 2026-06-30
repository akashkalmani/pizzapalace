import { test, expect } from '@playwright/test';

test('Delete a user', async ({ request }) => {

  const response = await request.delete(
    'https://jsonplaceholder.typicode.com/users/1'
  );

  expect(response.status()).toBe(200);

  console.log(await response.text());

});
