import React, {useEffect, useState} from 'react';
import dayjs from "dayjs";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {getMessages, getNewMessage} from "../../store/messagesThunks";
import {IMessage} from "../../types";

const Chat = () => {
    const dispatch = useAppDispatch();
    const messages = useAppSelector(state => state.messages.messages);
    const newMessage = useAppSelector(state => state.messages.newMessage)!;
    const [stateMessages, setStateMessages] = useState<IMessage[]>(messages);

    useEffect(() => {
        void dispatch(getMessages());
    }, []);

    useEffect(() => {
        setTimeout(async () => {
            if (stateMessages.length > 0) {
                const dateLastPost = stateMessages.slice(-1)[0].datetime;
                await dispatch(getNewMessage(dateLastPost));
                if (newMessage) {
                    setStateMessages(prevState => ({
                        ...prevState,
                        id: newMessage.id,
                        author: newMessage.author,
                        message: newMessage.message,
                        datetime: newMessage.datetime,
                    }));
                }
            }
        }, 3000);
    }, [stateMessages]);

    return (
        <div>
            {
                stateMessages.map(everyItem => {
                    const postFormatDate = dayjs(everyItem.datetime).format('DD.MM.YYYY HH:mm:ss');

                    return (
                        <div>
                            <p>
                                {everyItem.author}
                            </p>
                            <p>
                                {everyItem.message}
                            </p>
                            <p>
                                {postFormatDate}
                            </p>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Chat;