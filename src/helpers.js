export function findSquaresToLight(arr) {
  let array = [];

  Object.entries(arr).map(c => c.includes(true) && array.push(c));
  const refined = [];
  array.map(c => refined.push(c[0]));
  console.log("c0", refined);
  return refined;
}
export function objectMaker(el1, el2, el3) {
  let stateObject = {
    [el1]: true,
    [el2]: true,
    [el3]: true
  };
  return stateObject;
}
