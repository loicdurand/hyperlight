function* idCreator() {
  let i = 0;
  while (true) yield i++;
}

const ids = idCreator();

export default function () {
  return ids.next().value;
}