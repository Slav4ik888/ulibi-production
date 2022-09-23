import { Theme } from "app/providers/theme/lib/context";
import { setStorageData, getStorageData } from "./main";


export const setTheme = (data: Theme) => setStorageData(`Theme`, data);
export const getTheme = (): Theme => getStorageData(`Theme`);
