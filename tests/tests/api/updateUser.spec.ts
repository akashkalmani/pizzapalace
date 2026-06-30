import { test, expect } from '@playwright/test';

test('Update user using PUT', async ({ request }) => {

  const response = await request.put(
    'https://jsonplaceholder.typicode.com/users/1',
    {
      data: {
        id: 1,
        name: 'Akash Kalmani',
        username: 'akash123',
        email: 'akash@gmail.com'
      }
    }
  );

  expect(response.status()).toBe(200);

  const user = await response.json();

  console.log(user);

  expect(user.name).toBe('Akash Kalmani');
  expect(user.email).toBe('akash@gmail.com');

});
