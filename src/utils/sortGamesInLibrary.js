export default function sortGamesInLibrary(gameList, by) {
  const sortValue = by === "rating" ? [-1, 1] : [1, -1];

  return gameList.sort((first, second) => {
    if (first[by] > second[by]) return sortValue[0];
    if (first[by] < second[by]) return sortValue[1];

    return 0;
  });
}
