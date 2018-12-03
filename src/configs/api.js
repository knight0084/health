const env = process.env.VUE_APP_API_ENV || 'development';

let protocol = window.location.protocol
  , host
  , port
  , version = ''
  , prefix = '';

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
    host = '192.168.2.103';
    port = 8011;
}

export {protocol, host, port, version, prefix};
