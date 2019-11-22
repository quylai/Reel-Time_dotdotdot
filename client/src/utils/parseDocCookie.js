
// this will extract a particular data in document.cookie
export const parseDocCookie = item => {

  // convert document.cookie into string for processing
  let dcStr = JSON.stringify(document.cookie);

  // search index location of key/value of interest 
  let start = dcStr.search(item);

  // partitioning cookie, beginning at searched-point,
  // cookiePieces[0] is cookie of interest
  let cookiePieces = document.cookie.substring(start).split(';');
  
  // CookieKeyNValue[0] is key, CookieKeyNValue[1] is value
  let cookieKeyNValue = cookiePieces[0].split('=');

  return cookieKeyNValue[1];
}