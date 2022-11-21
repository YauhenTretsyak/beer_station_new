type KindSwitcher = {
    beeCards: string;
    events: string;
}

type LangTypes = {
    kindSwitcher: KindSwitcher;
}

type InputType = 'password' | 'number' | 'text' | 'textUpperCase' | 'fractionalNumber';

type TextLanguage = 'PL' | 'EN' | 'RU';
type TextParams = {
    type: string;
    language: TextLanguage;
}

export interface InputsParamsProps {
    inputLabel?: string;
    inputType: InputType;
    placeholder: string;
    incomeValue: string;
    textParams: TextParams;
    onChange: (value: string, func?: ((value: string) => void) | undefined, textParams?: TextParams) => void
}

export interface TextareasParamsProps {
    textareaLabel?: string;
    placeholder: string;
    incomeValue: string;
    textParams: TextParams;
    handleOnChange: (value: string, func?: ((value: string) => void) | undefined, textParams?: TextParams) => void
}

export interface LoadingSpinnerProps {
    loading: boolean;
    color: string;
    size: string;
    titleSize: string;
}

export interface DatePickerProps {
    onChange: (value: string) => void;
    funcIsDataChanged?: () => void;
    incomeValue?: string;
}

export interface InputProps {
    type: InputType;
    funcToChange?: (pass: string) => void;
    onChange: (value: string, func?: (value: string) => void, textParams?: TextParams) => void;
    placeholder?: string;
    incomeValue?: string;
    textParams?: TextParams
}

export enum InputTextTypesEnum {
    NUMBER = 'number',
    TEXT_UPPERCASE = 'textUpperCase',
    TEXT = 'text',
    FRACTIONAL_NUMBER = 'fractionalNumber'
}

export interface SelectOptions {
    id: string;
    label: string;
    imagePath?: string;
}

export interface SelectProps {
    selectOptionsData: SelectOptions[];
    funcToChange: (option: string) => void;
    onChange: (value: string, func?: (value: string) => void) => void;
    selectedValue: string;
}

export interface TextareaProps {
    funcToChange?: (value: string) => void;
    onChange: (value: string, func?: (value: string) => void, textParams?: TextParams) => void;
    incomeValue?: string;
    placeholder?: string;
    textParams?: TextParams;
}

export interface InputsBoxProps {
    inputParams: InputsParamsProps[];
}

export interface TextareasBoxProps {
    textareaParams: TextareasParamsProps[];
}

export type Translations = {
    PL: LangTypes,
    EN: LangTypes,
    RU: LangTypes
}
