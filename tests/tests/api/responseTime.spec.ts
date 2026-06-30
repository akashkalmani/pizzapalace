import { test, expect } from '@playwright/test';

test('Response Time', async ({ request }) => {

  const start = Date.now();

  const response = await request.get(
    'https://jsonplaceholder.typicode.com/users'
  );

  const end = Date.now();

  console.log('Time:', end - start);

  expect(end - start).toBeLessThan(3000);

});
