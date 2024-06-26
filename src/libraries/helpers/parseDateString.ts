import {DateString} from "../types/savedata/usageInfo";

export function parseDateString(value: DateString | null | undefined): Date | null {
    if (value == null) {
        return null;
    }

    const date = new Date(value);

    return isNaN(date.valueOf())
        ? null
        : date;
}
