import { ReactElement } from "react";

export interface IBaseDialogProps {
  type?: EDialogTypes;
  title: string;
  content: string | ReactElement;
  confirmButtonText?: string;
  cancelButtonText?: string;
  cancelHandler?: () => any | void;
  confirmHandler?: () => any | void;
  isOpen: boolean;
  onClose: () => void;
}

export enum EDialogTypes {
  Default = 0,
  Warning = 1,
  Error = 2,
}


