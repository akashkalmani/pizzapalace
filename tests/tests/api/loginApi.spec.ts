// import = bring Playwright test functions
import { test, expect } from '@playwright/test';

// test() = create API test
// request = Playwright API client
test('Login API with Headers', async ({ request }) => {

  // post() = send POST request to login API
  const response = await request.post('https://your-ecommerce-api.com/api/login', {

    // headers = extra information sent along with the request
    headers: {

      // Content-Type = tells server we're sending JSON data
      'Content-Type': 'application/json',

      // Accept = tells server we expect JSON in response
      'Accept': 'application/json'

    },

    // data = request body
    data: {

      // username sent to server
      username: 'standard_user',

      // password sent to server
      password: 'secret_sauce'

    }

  });

  // verify login was successful
  expect(response.status()).toBe(200);

});
