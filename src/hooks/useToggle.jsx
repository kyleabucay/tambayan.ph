import { useState, useCallback } from "react";

export default function useToggle(initialVal = false) {
    const [state, setState] = useState(initialVal)

    const toggle = () => useCallback(() => setState(!state), [])

    return [state, toggle]
}