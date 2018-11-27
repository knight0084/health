import fetch from '../../libs/fetch';

// login by usn and pwd
const login = data => {
  const url = '';

  return fetch({url, method: 'post', data});
};


export {login};
