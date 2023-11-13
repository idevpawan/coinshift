export interface ITabs {
    active: number;
    setActive: (val: number) => void;
}

export interface IInput {
    innerLabel?: string;
    value?: number | string;
    options?: any[];
    selectedOption?: () => void;
    onChange?: () => void;
    placeholder?: string;
    type?: "number" | "text"
}

export interface IButton {
    children?: React.ReactNode;
    onClick?: () => void;
    isDisabled?: boolean
}

export interface ITxnInfo {
    amount?: string | number;
    fiat?: string;
    token?: string;
    networkFee?: number;
    unitPrice?: string;
}
