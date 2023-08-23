import React, {useState} from 'react';
import {useAppDispatch} from "../../app/hooks";
import {IStateMessage} from "../../types";
import {addMessage} from "../../store/messagesThunk";

const Form = () => {
    const dispatch = useAppDispatch();

    const [form, setForm] = useState<IStateMessage>({
        author: "",
        message: "",
    });

    const dataChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setForm((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };


    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(addMessage(form));
        setForm({
            author: "",
            message: "",
        });
    };

    return (
        <form className="form" onSubmit={submit}>
            <div className="innerForm">
                <div>
                    <input className="inputSend"
                           type="text"
                           value={form.author}
                           name="author"
                           onChange={dataChanged}
                           placeholder=" type your name"/>
                    <input className="inputSend"
                           type="text"
                           value={form.message}
                           name="message"
                           onChange={dataChanged}
                           placeholder=" type message.."/>
                </div>
                <button className="btn btn-primary"
                        type="submit"
                >send</button>
            </div>
        </form>
    );
};

export default Form;