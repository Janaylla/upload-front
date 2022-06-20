import React, { useState } from "react";
export interface Form {
    [key: string]: string
}
const useForm = (initialForm: Form): [Form, React.ChangeEventHandler<HTMLInputElement>, () => void] => {
    const [form, setForm] = useState(initialForm);

    const onChange:  React.ChangeEventHandler<HTMLInputElement> = (event) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
    };
    const resetForm = () => {
        setForm(initialForm);
    };

    return [form, onChange, resetForm];
};

export default useForm