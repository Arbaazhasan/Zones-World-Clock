import { useState } from "react";

export function useClose() {

    const [isClose, setIsClose] = useState(false);

    const toggle = (val) => {
        setIsClose(val);
    }

    return [isClose, setIsClose]
}