import { useCallback, useEffect } from "preact/hooks";

const useKeyHandler = (keyToTrigger: string, callback: () => void): void => {
  const handleKeyPress = useCallback(
    (e: KeyboardEvent): void => {
      if (e.key === keyToTrigger) {
        callback();
      }
    },
    [callback, keyToTrigger]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);
};

export default useKeyHandler;
