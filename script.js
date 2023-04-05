const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const settings = { actualPageIdx: 1, entriesOnPage: 2 };


const paginateArray = (dataEntries, settings) => {
  let thisArr = []
  for(i = 0; i < dataEntries.length; i++) {
    thisArr.push(dataEntries.splice(0 , settings.entriesOnPage) )
  }
  console.log(thisArr)
  console.log(thisArr[settings.actualPageIdx])
  return thisArr[settings.actualPageIdx]
};
paginateArray(data, settings);
