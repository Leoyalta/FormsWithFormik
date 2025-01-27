import { AiOutlineUser } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import css from "./Contact.module.css";
export default function Contact({ contact: { id, name, number }, onDelete }) {
  return (
    <div className={css.container}>
      <div>
        <div className={css.itemBox}>
          <AiOutlineUser /> <p>{name}</p>
        </div>
        <div className={css.itemBox}>
          <AiOutlinePhone /> <p>{number}</p>
        </div>
      </div>

      <button
        className={css.btn}
        onClick={() => {
          onDelete(id);
        }}
      >
        Delete
      </button>
    </div>
  );
}
