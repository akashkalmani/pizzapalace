import { test, expect } from '@playwright/test';

test('Query Parameters', async ({ request }) => {

  const response = await request.get(
    'https://jsonplaceholder.typicode.com/posts',
    {
      params: {
        userId: 1
      }
    }
  );

  expect(response.status()).toBe(200);

  const posts = await response.json();

  console.log(posts.length);

  expect(posts.length).toBeGreaterThan(0);

});
