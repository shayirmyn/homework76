export interface IMessage {
    id: string;
    author: string;
    message: string;
    date: string;
}

export interface IMessageWithoutIdDate {
    author: string;
    message: string;
}