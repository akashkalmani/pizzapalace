import { test, expect } from '@playwright/test';

test('Headers Demo', async ({ request }) => {

  const response = await request.get(
    'https://jsonplaceholder.typicode.com/users',
    {
      headers: {
        Accept: 'application/json'
      }
    }
  );

  expect(response.status()).toBe(200);

});
