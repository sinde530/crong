import { Dispatch, SetStateAction, useCallback, useState } from "react";

// generic Study Essential.
const useInput = <T = any>(
  initialData: T
): [T, (e: any) => void, Dispatch<SetStateAction<T>>] => {
  const [value, setValue] = useState(initialData);

  const handler = useCallback((event: any) => {
    setValue(event.target.value);
  }, []);
  // 한번에 값을 반환해줌
  return [value, handler, setValue];
};

export default useInput;
