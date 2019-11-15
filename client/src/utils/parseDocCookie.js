
export const parseDocCookie = item => {

	let start = document.cookie.search(item);
	let arr = document.cookie.substring(start).split("\"");
  let result = arr[2];
  
  return result;
}