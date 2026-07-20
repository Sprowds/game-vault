export default function gameFormInputValidation(inputtedGameValues) {
  // Если проверка не пройдена, то результат будет возвращён в виде массива строк с ошибками
  const validationResult = [];

  // Проверка на пустоту названия
  if (inputtedGameValues.name.trim().length === 0) {
    validationResult.push("Name can not be empty");
  }

  // Проверка введённого рейтинга на то, является ли он числом и не является ли NaN
  const rating = Number(inputtedGameValues.rating);
  if (Number.isFinite(rating)) {
    if (rating < 1 || rating > 5)
      validationResult.push("Rating can be from 1 to 5");
  } else validationResult.push("Rating must be a number");

  // Проверка ссылки обложки на корректность (Если пустая, то подставится стандартная картинка)
  if (inputtedGameValues.cover.length !== 0) {
    try {
      new URL(inputtedGameValues.cover);
    } catch {
      validationResult.push("Incorrect cover URL");
    }
  }

  if (validationResult.length === 0) return true;

  return validationResult;
}
