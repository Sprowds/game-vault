import { useEffect } from "react";

function useBodyScrollLock() {
  useEffect(() => {
    document.body.classList.add("no_scroll");

    return () => {
      document.body.classList.remove("no_scroll");
    };
  }, []);
}

export default useBodyScrollLock;
