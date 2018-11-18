const env = process.env.VUE_APP_API_ENV || 'development';

let protocol = window.location.protocol
  , host
  , port
  , version = '/v2'
  , prefix = '/api';

switch (env) {
  case 'test':
    host = 'sop.supplus.cn';
    port = '';
    break;

  case 'production':
    host = 'sop-fec.ministudy.com';
    port = '';
    break;

  default :
    host = '10.247.67.206';
    port = 8001;
}

export {protocol, host, port, version, prefix};
