import * as yup from "yup";
import parse from "date-fns/parse"

export const bookingSchema = yup.object().shape({
    date: yup
        .date()
        .transform(function (value, originalValue) {
            if (this.isType(value)) {
                return value;
            }
            const result = parse(originalValue, "dd.MM.yyyy", new Date());
            return result;
        })
        .typeError("Please enter a valid date")
        .required('Required')
        .min("2024-10-24", "Date has passed"),
        
    time: yup
        .string()
        .oneOf(["5:00", "6:00", "7:00", "8:00", "9:00", "10:00"], '')
        .required('Required'),
    guests: yup
        .number()
        .min(1,'Must have at least 1 guest')
        .max(10, 'If you have more than 10 guests, please call us at 412-123-1234.')
        .required('Required. Must be a number under 11.'),
 })