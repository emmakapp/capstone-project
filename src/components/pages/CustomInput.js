import { useFieldArray } from "react-hook-form";

const CustomInput = ({label, ...props}) => {

    const [field, meta] = useFieldArray(props);
    console.log('field', field);
    console.log('meta', meta);

    return (
        <>
            <label>{label}</label>
            <input {...field} {...props} 
            className={meta.touched && meta.error ? "input-error" : ""} 
            /> 
            {meta.touched && meta.error && <div className="error">{meta.error}</div>}
        </>
    );
};

export default CustomInput;