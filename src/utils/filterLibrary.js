function filterGameByName(gameList, searchInput) {
  return gameList.filter((game) =>
    game.name.toUpperCase().includes(searchInput.toUpperCase().trim()),
  );
}

function filterLibraryBy(filterBy, gameList, selected) {
  return gameList.filter((game) => selected.includes(game[filterBy]));
}

export function filterGamesLibrary(gameList, searchInput, filterList) {
  let resultGameList = filterGameByName([...gameList], searchInput);

  for (const [key, value] of Object.entries(filterList)) {
    if (value.length === 0) continue;

    resultGameList = filterLibraryBy(key, resultGameList, value);
  }

  return resultGameList;
}

export function filterToggle(filterCategory, filterString, setFilterList) {
  setFilterList((prevFilterList) => {
    if (!prevFilterList[filterCategory].includes(filterString)) {
      return {
        ...prevFilterList,
        [filterCategory]: [...prevFilterList[filterCategory], filterString],
      };
    } else {
      return {
        ...prevFilterList,
        [filterCategory]: prevFilterList[filterCategory].filter(
          (filter) => filter !== filterString,
        ),
      };
    }
  });
}
