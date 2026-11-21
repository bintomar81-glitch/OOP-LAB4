type BookData = {
  id: string;
  title: string;
  copies: number;
};

function parseJson<T>(text: string): T {
  return JSON.parse(text);
}

const books = parseJson<BookData[]>('[{"id":"B-001","title":"Things Fall Apart"}]');
console.log(books[0].title);
// Intentionally prints NaN: the JSON has no copies property.
console.log(books[0].copies + 1);
