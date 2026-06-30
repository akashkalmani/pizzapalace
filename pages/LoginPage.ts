import { Page } from '@playwright/test';

export class LoginPage {

  constructor(private page: Page) {}

  readonly usernameTextbox = this.page.getByPlaceholder('Username');
  readonly passwordTextbox = this.page.getByPlaceholder('Password');
  readonly loginButton = this.page.getByRole('button', { name: 'Login' });

  async fillUsername(username: string) {
    await this.usernameTextbox.fill(username);
  }

  async fillPassword(password: string) {
    await this.passwordTextbox.fill(password);
  }

  async clickLogin() {
    await this.loginButton.click();
  }

  async login(username: string, password: string) {
    await this.page.goto(process.env.BASE_URL!);

    await this.fillUsername(username);
    await this.fillPassword(password);
    await this.clickLogin();
  }
}