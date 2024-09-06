import { useEffect } from "react";

export function useKey(keyCode, callback) {
  useEffect(() => {
    function handleEvent(e) {
      if (e.code.toLowerCase() === keyCode.toLowerCase()) callback(e);
    }
    document.addEventListener("keydown", handleEvent);
    return () => document.removeEventListener("keydown", handleEvent);
  }, [keyCode, callback]);
}
