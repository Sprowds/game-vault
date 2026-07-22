function filterGameByName(gameList, searchInput) {
  return gameList.filter((game) =>
    game.name.toUpperCase().includes(searchInput.toUpperCase().trim()),
  );
}

function filterLibraryByPlatform(gameList, selectedPlatforms) {
  return gameList.filter((game) => {
    selectedPlatforms.includes(game.platform);
  });
}

function filterLibraryByStatus(gameList, selectedStatuses) {
  return gameList.filter((game) => {
    selectedStatuses.includes(game.status);
  });
}

export function filterToggle(filter, setFilterList) {
  setFilterList((prev) => {
    if (prev.includes(filter))
      return prev.filter((filterItem) => filterItem !== filter);
    else return [...prev, filter];
  });
}
