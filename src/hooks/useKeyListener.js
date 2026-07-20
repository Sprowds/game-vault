import { useEffect } from "react";

export default function useKeyListener(key, func) {
  // Добавить обработчик событий при нажатии на кнопку и удаление его при удалении самого ?окна
  useEffect(() => {
    // Функция, которая произойдёт при нажатии на кнопку
    function keyListener(event) {
      if (event.key === key) {
        func();
      }
    }

    window.addEventListener("keydown", keyListener);
    return () => {
      window.removeEventListener("keydown", keyListener);
    };
  }, [key, func]);
}
