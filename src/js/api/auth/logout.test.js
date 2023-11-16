import 'jest-localstorage-mock';
import { logout } from './logout';

describe('logout function', () => {
  it('removes data from local storage', () => {
    localStorage.setItem('token', 'testAccessToken');

    logout();

    expect(localStorage.getItem('token')).toBeNull();
  });
});
