/**
 * @desc clip the over chars while overflow limit count and append '...' if specified
 * @param {String} string
 * @param {Number} count
 * @param {Boolean} ellipsis, whether append ellipsis
 * @return {String}
 */
const limitCharCount = (string, count, ellipsis = true) => {
  return string && string.length > count ? string.slice(0, count - 1) + (ellipsis && "…") : string;
};

export default {limitCharCount};
