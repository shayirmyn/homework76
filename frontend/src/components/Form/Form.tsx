import React, {useState} from 'react';
import {useAppDispatch} from "../../app/hooks";
import {IStateMessage} from "../../types";
import {addMessage} from "../../store/messagesThunks";

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


    const submit = async (e: React.FormEvent) => {
        e.preventDefault();
        await dispatch(addMessage(form));
        setForm({
            author: "",
            message: "",
        });
    };

    return (
        <div className="mt-5 formDiv shadow-lg p-3 mb-5 bg-body-tertiary rounded">
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
        </div>
    );
};

export default Form;