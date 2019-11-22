

export const parseDocCookie = item => {

  // convert document.cookie into string for processing
  let dcStr = JSON.stringify(document.cookie);
  if(item === "id=") {
    console.log("**** dcStr type-" + typeof dcStr + " is");  //debug
    console.log(dcStr);  //debug
  }

  // search index location of key/value of interest 
  let start = dcStr.search(item);
  if(item === "id=") {
    console.log("**** start type-" + typeof start + " is");  //debug
    console.log(start);  //debug
  }

  // partitioning cookie, beginning at searched-point
  // at index 0 is cookie of interest
  let cookiePieces = document.cookie.substring(start).split(';');
  if(item === "id=") {
    console.log("**** cookiePieces type-" + typeof cookiePieces + " is");  //debug
    console.log(cookiePieces);  //debug
  }
  
  // index 0 is key, 1 is value
  let CookieKeyNValue = cookiePieces[0].split('=');
  if(item === "id=") {
    console.log("**** CookieKeyNValue type-" + typeof CookieKeyNValue + " is");  //debug
    console.log(CookieKeyNValue);  //debug
  }


  if(item === "id=") {
    console.log("**** CookieKeyNValue[1] type-" + 
                typeof CookieKeyNValue[1] + " is");  //debug
    console.log(CookieKeyNValue[1]);  //debug
  }
  return CookieKeyNValue[1];
}