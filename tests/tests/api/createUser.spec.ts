import { test, expect } from '@playwright/test';

test('Create new user', async ({ request }) => {

  // NEW:
  // Measure API response time.
  const startTime = Date.now();

  const response = await request.post(
    'https://reqres.in/api/users',
    {
      headers: {

        // NEW:
        // Read the API key from the .env file.
        // This is how production projects manage secrets.
        'x-api-key': process.env.REQRES_API_KEY!,

        'Content-Type': 'application/json'
      },

      data: {
        name: 'Akash',
        job: 'SDET'
      }
    }
  );

  const responseTime = Date.now() - startTime;

  // NEW:
  // Print useful debugging information.
  console.log('Status:', response.status());
  console.log('Headers:', response.headers());

  const body = await response.json();
  console.log('Body:', body);

  // Validate status code.
  expect(response.status()).toBe(201);

  // Validate response headers.
  expect(response.headers()['content-type'])
    .toContain('application/json');

  // Validate response body.
  expect(body.name).toBe('Akash');
  expect(body.job).toBe('SDET');
  expect(body.id).toBeTruthy();
  expect(body.createdAt).toBeTruthy();

  // Validate performance.
  expect(responseTime).toBeLessThan(2000);

  console.log(`Response Time: ${responseTime} ms`);
});
