import stopWordsList from "./stopWordsList";

function createNewkey(keyword, summaryId, indexHashMap) {
  if (!stopWordsList.has(keyword)) {
    indexHashMap.set(keyword, { id: [summaryId] });
  }
}

function doesIdExist(keyword, summaryId, indexHashMap) {
  let idsArr = indexHashMap.get(keyword)["id"];

  let result =
    idsArr.find((element) => element === summaryId) !== undefined
      ? true
      : false;

  return result;
}

function addUniqueId(keyword, summaryId, indexHashMap) {
  if (!doesIdExist(keyword, summaryId, indexHashMap)) {
    indexHashMap.get(keyword)["id"].push(summaryId);
  }
}

//create Index from data receive from the server i.e summaries
export default function createIndexContent(
  summaryKeywords,
  summaryId,
  indexHashMap
) {
  summaryKeywords.forEach((keyword) => {
    indexHashMap.has(keyword)
      ? addUniqueId(keyword, summaryId, indexHashMap)
      : createNewkey(keyword, summaryId, indexHashMap);
  });

  return indexHashMap;
}
