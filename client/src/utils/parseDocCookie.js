
export const parseDocCookie = item => {

  let temp = JSON.stringify(document.cookie);

  if(item === "id") {
    console.log("**** getting id");  //debug
    console.log(temp);  //debug
  }

  // starting point to split cookie
  let start = temp.search(item);

  // partitioning cookie, beginning at searched-point
  // at index 0 is cookie of interest
	let cookiePieces = document.cookie.substring(start).split(';');
  
  // index 0 is key, 1 is value
  let CookieKeyNValue = cookiePieces[0].split('=');

  return CookieKeyNValue[1];
}