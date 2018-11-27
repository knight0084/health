// mapped route according to the role
export default {
  doctor: [
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
  // do not match anyone above, use default
  default: [
    'home',
    'news-info',
    'health-pedia'
  ]
};
