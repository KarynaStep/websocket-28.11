import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getChat } from '../../store/chatSlice';
import Message from "./Message"

const ListMessages = () => {
  const { messages, error, isFatching } = useSelector((store) => store.chat);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getChat()); // eslint-disable-next-line
  }, [dispatch]);
  return (
    <section>
      {isFatching && <h3>Loading...</h3>}
      {error && <h3>Error!!!</h3>}
      {messages.length === 0 ? (
        <h3>Nothing...</h3>
      ) : (
        messages.map((msg, i) => <Message key={i} msg={msg} />)
      )}
    </section>
  );
};

export default ListMessages;
