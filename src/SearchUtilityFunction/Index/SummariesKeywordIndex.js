import { summariesList } from "./data";
import createIndexContent from "./createSummariesIndex";
function replaceUnwantedKeywords(summary) {
  const regex = /[!“”#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
  summary = summary.replace(regex, "");
  summary = summary.replace(/The Book in Three Sentences\s/, "");
  summary = summary.replace(/\d\s/g, "");
  return summary;
}
export function summariesKeywordsIndex(listofSummaries) {
  let index = new Map();

  listofSummaries.forEach((summaryObj) => {
    //filter each summary for stopwords, punctuations
    let filteredSummary = replaceUnwantedKeywords(summaryObj.summary);
    let keywordsList = filteredSummary.split(" ");
    let summaryId = summaryObj.id;
    //and create hashkeys of UNIQUE summary word which store UNIQUE id of the summary they belong to
    createIndexContent(keywordsList, summaryId, index);
  });
  return index;
}

let indexHashMap = summariesKeywordsIndex(summariesList);
export default indexHashMap;
