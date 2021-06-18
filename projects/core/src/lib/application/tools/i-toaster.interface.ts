import { ToasterOption } from "./toaster-option.interface";

export interface IToaster {
    error(message: string, title: string, option?: ToasterOption): void;
}