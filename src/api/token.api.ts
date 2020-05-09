import {asyncStorage} from '~/helper/async-storage-helper';

export class Token {
  private static accessToken: string = '';

  static getAccessToken(): string {
    return this.accessToken;
  }

  static setAccessToken(token: string): void {
    this.accessToken = token;
  }

  static refreshAccessToken(token: string): void {
    this.setAccessToken(token);
    asyncStorage.get('auth').then(({data}: any) => {
      const auth = {
        ...data,
        token,
      };
      asyncStorage.set('auth', auth);
    });
  }

  static deleteAccessToken(): void {
    this.accessToken = '';
  }
}
