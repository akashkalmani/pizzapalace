import { test, expect } from '@playwright/test';

test('Create user without API key', async ({ request }) => {

  // Manager:
  // Verify the API rejects unauthorized requests.

  const response = await request.post(
    'https://reqres.in/api/users',
    {
      headers: {

        // Intentionally NO API KEY

        'Content-Type': 'application/json'
      },

      data: {
        name: 'Akash',
        job: 'SDET'
      }
    }
  );

  console.log("Status:", response.status());

  console.log(await response.text());

  // We EXPECT the API to reject us.
  expect(response.status()).toBe(401);

});
