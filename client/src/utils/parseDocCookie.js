
export const parseDocCookie = item => {

	let start = document.cookie.search(item);
	let arr = document.cookie.substring(start).split("\"");
  let result;

  if(item === "id") {

    result = arr[1];
    // removing ':' and ','
    result = result.substring(1, result.length - 1)
    // convert to int
    result = parseInt(result);
  }
  else
    result = arr[2];

  return result;
}