export class Token {
  private static accessToken: string = '';

  static getAccessToken(): string {
    return this.accessToken;
  }

  static setAccessToken(token: string): void {
    this.accessToken = token;
  }

  static deleteAccessToken(): void {
    this.accessToken = '';
  }
}
