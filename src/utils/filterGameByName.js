function filterGameByName(gameList, searchInput) {
  return gameList.filter((game) =>
    game.name.toUpperCase().includes(searchInput.toUpperCase().trim()),
  );
}

export default filterGameByName;
