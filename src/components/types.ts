import { string } from "prop-types";

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

type AdminEvents = {
    addBtnTitle: string;
}

type AdminEventsItem = {
    typeTitle: string; 
    nameTitle: string;
    descriptionTitle: string;
    linkTitle: string; 
    dateTitle: string;
    startTimeTitle: string;
}

type LangTypes = {
    adminHeader: AdminHeader;
    cardItem: CardItem;
    loginBar: LoginBar;
    changeContent: ChangeContent;
    adminEvents: AdminEvents;
    adminEventsItem: AdminEventsItem;
}

type EventName = {
    PL: string;
    EN: string;
    RU: string;
}

type EventDescription = EventName

type TextLanguage = 'PL' | 'EN' | 'RU'

export enum TextTypeEnum {
    DESCRIPTION = 'description',
    NAME = 'name'
}

export interface AdminBeerCardItemProps {
    id: number;
    location: string;
}

export interface ActiveCardsData {
    id: number | string;
    isChanges: boolean;
}

export interface AdminEventsItemProps {
    id: string;
    index: number;
}

export type TextParams = {
    type: string;
    language: TextLanguage;
}

export type Translations = {
    PL: LangTypes;
    EN: LangTypes;
    RU: LangTypes;
}

export interface AdminBeerCardsTypes {
    isAuthSuccessful: boolean;
}

export interface AdminEventsProps {
    isAuthSuccessful: boolean;
}

export interface BeerCardData {
    country: string;
    id: number;
    name: string;
    title: string;
    type: string;
    updateDate: string;
    volAlc: string;
    vol03: string;
    vol05: string;
    vol1: string;
}

export interface EventsData {
    date: string;
    startTime: string;
    id: string;
    eventName: EventName;
    description: EventDescription;
    link: string;
    eventIcon: string;
}
