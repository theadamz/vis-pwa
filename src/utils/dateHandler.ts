import { DateTime } from "luxon";

export const dateJSToFormat = (date: Date, toFormat: string): string => {
    return DateTime.fromJSDate(date).toFormat(toFormat);
};

export const dateJSFormat = (value: Date): string => {
    return DateTime.fromJSDate(value).toFormat(
        import.meta.env.VITE_DATE_FORMAT
    );
};

export const timeJSFormat = (value: Date): string => {
    return DateTime.fromJSDate(value).toFormat(
        import.meta.env.VITE_TIME_FORMAT
    );
};

export const dateTimeJSFormat = (value: Date): string => {
    return DateTime.fromJSDate(value).toFormat(
        import.meta.env.VITE_DATETIME_FORMAT
    );
};
