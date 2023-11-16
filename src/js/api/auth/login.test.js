import fetch from 'node-fetch';
import 'jest-localstorage-mock';
import { login } from './login';

jest.mock('node-fetch');

describe('login function', () => {
  it('logs in user and saves data in local storage', async () => {
    const mockResponse = {
      ok: true,
      json: () => Promise.resolve({ accessToken: 'testAccessToken' }),
    };
    fetch.mockResolvedValue(mockResponse);

    await login('nille@noroff.no', 'password123');

    expect(localStorage.getItem('token')).toBeTruthy();
  });
});
