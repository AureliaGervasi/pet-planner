import { useCallback, useState } from "react";

export default function useBooleanHandlers(defaultValue = false) {
    const [value, setValue] = useState(defaultValue);

    const onSetTrue = useCallback(() => setValue(true), []);
    const onSetFalse = useCallback(() => setValue(false), []);

    return [value, onSetTrue, onSetFalse] as const;
}