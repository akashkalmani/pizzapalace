import { test, expect } from '@playwright/test';

test('Update user using PATCH', async ({ request }) => {

  const response = await request.patch(
    'https://jsonplaceholder.typicode.com/users/1',
    {
      data: {
        email: 'newemail@test.com'
      }
    }
  );

  expect(response.status()).toBe(200);

  const user = await response.json();

  console.log(user);

  expect(user.email).toBe('newemail@test.com');

});
