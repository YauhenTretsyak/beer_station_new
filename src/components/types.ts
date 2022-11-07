type AdminHeader = {
    linkTitle: string;
}

type CardItem = {
    country: string;
    brand: string;
    name: string;
    type: string;
    volAlc: string;
    cost: string;
}

type LoginBar = {
    alert: string;
}

type ChangeContent = LoginBar

type LangTypes = {
    adminHeader: AdminHeader;
    cardItem: CardItem;
    loginBar: LoginBar;
    changeContent: ChangeContent;
}

export interface AdminBeerCardItemProps {
    id: number;
    location: string;
}

export interface ActiveCardsData {
    id: number;
    isChanges: boolean;
}

export type Translations = {
    PL: LangTypes;
    EN: LangTypes;
    RU: LangTypes;
}
