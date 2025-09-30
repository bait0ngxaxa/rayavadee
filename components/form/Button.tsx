'use client'

import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { RefreshCw } from 'lucide-react';
type btnSize = 'default' | 'lg' | 'sm'

type SunbmitButtonProps = {
    className?: string;
    size?: btnSize;
    text?: string;
};

export const SubmitButton = ({
    className,
    size,
    text }: SunbmitButtonProps) => {
    const { pending } = useFormStatus()
    return (
        <Button
            disabled={pending}
            type="submit"
            size={size}
            className="{`${className} capitalize`}"
        >
            {
                pending
                    ?
                    <>
                        <RefreshCw className="animate-spin" />
                        <span>Loading...</span>
                    </>
                    : <p>{text}</p>
            }
        </Button>
    );
};