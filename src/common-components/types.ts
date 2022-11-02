import { string } from "prop-types";

export interface LoadingSpinnerProps {
    loading: boolean;
    color: string;
    size: string;
    titleSize: string;
}

export interface InputProps {
    type: 'password' | 'number' | 'text';
    funcToChange: (pass: string) => void;
    onChange: (func: (value: string) => void, value: string) => void;
    placeholder?: string;
    incomeValue?: string;
}

export interface SelectOptions {
    id: string;
    label: string;
    imagePath?: string;
}
