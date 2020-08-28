import { summariesList, bookTitlesList, bookAuthorsList } from "./data";
let summaryIndexingObj = new Map();

function createNewkey(wordkey, summaryId) {
  summaryIndexingObj.set(wordkey, { id: [summaryId] });
}

function doesIdExist(keyword, summaryId) {
  let temp = summaryIndexingObj.get(keyword)["id"];

  let result = "";
  temp.find((element) => {
    result = element === summaryId ? true : false;
  });
  return result;
}

function addUniqueId(keyword, summaryId) {
  if (!doesIdExist(keyword, summaryId)) {
    summaryIndexingObj.get(keyword)["id"].push(summaryId);
  }
}

export function replaceUnwantedKeyString(currentSummaryObj) {
  let currentSummary = currentSummaryObj.summary;
  const regex = /[!“”#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
  currentSummary = currentSummary.replace(regex, "");
  currentSummary = currentSummary.replace(/The Book in Three Sentences\s/, "");
  currentSummary = currentSummary.replace(/\d\s/g, "");
  return currentSummary.split(" ");
}

export function summaryIndexing(dataObj) {
  let listofSummaries = dataObj;

  listofSummaries.forEach((summaryObj) => {
    let summaryKeywords = replaceUnwantedKeyString(summaryObj);
    let currentSummaryId = summaryObj.id;
    summaryKeywords.forEach((wordKey) => {
      summaryIndexingObj.has(wordKey)
        ? addUniqueId(wordKey, currentSummaryId)
        : createNewkey(wordKey, currentSummaryId);
    });
  });
  return Object.fromEntries(summaryIndexingObj);
}
