function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  // using builtin filter function
  //   const filteredArray: { title: string; rating: number }[] = items.filter(obj => obj.rating >= 4);

  const filteredArray: { title: string; rating: number }[] = [];
  for (let obj of items) {
    if (obj.rating >= 4) {
      filteredArray.push(obj);
    }
  }

  return filteredArray;
}

const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 4.0 },
];

console.log(filterByRating(books));
// Output: [ { title: "Book A", rating: 4.5 }, { title: "Book C", rating: 5.0 } ]
