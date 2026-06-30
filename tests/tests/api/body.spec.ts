import { test, expect } from '@playwright/test';

test('Validate JSON', async ({ request }) => {

  const response = await request.get(
    'https://jsonplaceholder.typicode.com/users'
  );

  const body = await response.json();

  expect(body.length).toBe(10);

  expect(body[0].name).toBe('Leanne Graham');

});
