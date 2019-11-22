
// this will extract a particular data in document.cookie
export const parseDocCookie = item => {

  console.log("**************** item" + item);

  // convert document.cookie into string for processing
  let dcStr = JSON.stringify(document.cookie);
  console.log("**** dcStr is");  //debug
  console.log(dcStr);  //debug
  
  // search index location of key/value of interest 
  let start = dcStr.search(item);
  console.log("**** start is");  //debug
  console.log(start);  //debug

  // partitioning cookie, beginning at searched-point,
  // cookiePieces[0] is cookie of interest
  let cookiePieces = document.cookie.substring(start).split(';');
  console.log("**** cookiePieces is");  //debug
  console.log(cookiePieces);  //debug
  
  // CookieKeyNValue[0] is key, CookieKeyNValue[1] is value
  let cookieKeyNValue = cookiePieces[0].split('=');
  console.log("**** cookieKeyNValue is");  //debug
  console.log(cookieKeyNValue);  //debug

  return cookieKeyNValue[1];
}