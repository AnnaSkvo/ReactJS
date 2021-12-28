import { AUTHORS } from "../../utils/constants";

export const MessageList = ({ messages }) => (
    <div>
        {messages.map(({ text, author }) => (
          <div className={author === AUTHORS.HUMAN ? "human-msg" : "bot-msg"}>
            {author}: {text}
          </div>
        ))}
    </div>
  );