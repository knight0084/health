// mapped route according to the role
export default {
  all: {
    routes: [
      'home',
      'family-doctor',
      'family-doctor-contract',
      'family-doctor-statement',
      'transfer-treatment',
      'transfer-treatment-coordination',
      'transfer-treatment-statement',
      'news-info',
      'health-pedia'
    ],
    initial: 'home'
  },
  doctor: {
    routes: [
      'home',
      'family-doctor',
      'family-doctor-contract',
      'family-doctor-statement',
      'transfer-treatment',
      'transfer-treatment-coordination',
      'transfer-treatment-statement',
      'news-info',
      'health-pedia'
    ],
    initial: 'home'
  },
  // do not match anyone above, use default
  default: {
    routes: [
      'home',
      'news-info',
      'health-pedia'
    ],
    initial: 'home'
  }
};
