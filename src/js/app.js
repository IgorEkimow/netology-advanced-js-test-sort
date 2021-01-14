export default function sortingCharacters(characters) {
  characters.sort((a, b) => b.health - a.health);
  return characters;
}
