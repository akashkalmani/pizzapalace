import { test, expect } from '@playwright/test';

test('Handle API errors gracefully', async ({ request }) => {

  try {

    const response = await request.get(
      'https://reqres.in/api/unknown/999999'
    );

    console.log("Status:", response.status());

    expect(response.status()).toBe(404);

  }

  catch (error) {

    console.log("Something went wrong.");

    console.log(error);

  }

});

