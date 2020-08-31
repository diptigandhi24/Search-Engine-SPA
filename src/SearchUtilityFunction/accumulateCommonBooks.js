export default function accumulateCommonBooks(
  listOfBookIds,
  commonBookCounter
) {
  listOfBookIds.forEach((bookId) => {
    if (commonBookCounter.has(bookId)) {
      commonBookCounter.set(bookId, commonBookCounter.get(bookId) + 1);
    } else {
      commonBookCounter.set(bookId, 1);
    }
  });
}
