let summaryIndexingObj = new Map();
function createNewkey(strKey, summaryId) {
  summaryIndexingObj.set(strKey, { id: [summaryId] });
}
export function replaceUnwantedKeyString(currentSummaryObj) {
  let currentSummary = currentSummaryObj.summary;
  const regex = /[!“”#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
  currentSummary = currentSummary.replace(regex, "");
  currentSummary = currentSummary.replace("The Book in Three Sentences", "");
  currentSummary = currentSummary.replace(/\d\s/g, "");
  return currentSummary;
}
export function summaryIndexing(dataObj) {}
