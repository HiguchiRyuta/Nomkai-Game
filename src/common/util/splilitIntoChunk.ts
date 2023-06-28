export function splitIntoChunk(arr: any[], chunk: number) {
  const chunkedArr = [];
  for (let i = 0; i < arr.length; i += chunk) {
    let tempArray;
    tempArray = arr.slice(i, i + chunk);
    chunkedArr.push(tempArray);
  }
  return chunkedArr;
}
