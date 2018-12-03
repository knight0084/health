import fetch from '../../libs/fetch';

// login by usn and pwd
const login = data => {
  const url = '/auth/login';

  return fetch({url, method: 'post', data});
};


export {login};
