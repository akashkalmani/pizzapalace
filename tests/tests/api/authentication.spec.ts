import { test, expect } from '@playwright/test';

test('Authentication Demo', async ({ request }) => {

  const fakeToken = 'abc123xyz';

  const response = await request.get(
    'https://jsonplaceholder.typicode.com/users',
    {
      headers: {
        Authorization: `Bearer ${fakeToken}`,
        Accept: 'application/json'
      }
    }
  );

  expect(response.status()).toBe(200);

  console.log(await response.json());

});
