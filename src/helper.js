/**
 * Converts a string into a slug.
 *
 * @param {string} str - The input string to be converted into a slug.
 * @returns {string} The slug version of the input string.
 */
const stringToSlug = (str) => {
  if(!str){
    return ''
  }
  str = str.toLowerCase(); // Convert to lowercase
  str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, "a");
  str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, "e");
  str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, "i");
  str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, "o");
  str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, "u");
  str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, "y");
  str = str.replace(/(đ)/g, "d");
  str = str.replace(/^\s+|\s+$/g, ""); // Remove leading/trailing spaces
  str = str
    .replace(/[^a-z0-9 -]/g, "") // Remove non-alphanumeric characters (except for hyphens and spaces)
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-"); // Replace multiple hyphens with single hyphen
  return str;
};

module.exports = {
  stringToSlug
}