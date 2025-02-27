import { ANIMATION_TYPE } from "./index.js";

export interface Toast {
  message?: string;
  timeOut?: number;
  nottyClass?: number;
  icons?: string;
  position?: ANIMATION_TYPE;
  comeFrom?: ANIMATION_TYPE;
  toastClassName?: string;
  toastIconClassName?: string;
  toastMessageClassName?: string;
  gotTo?: string;
  leaveFrom? : ANIMATION_TYPE
  RemoveIconClassName?: string;
}
