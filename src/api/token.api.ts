export const token = {
  accessToken: '',

  getAccessToken: function () {
    return this.accessToken;
  },

  setAccessToken: function (token: string) {
    this.accessToken = token;
  },

  deleteAccessToken: function () {
    this.accessToken = '';
  },
};
