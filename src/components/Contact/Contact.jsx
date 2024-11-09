import s from "./Contact.module.css";
import { FaPhoneAlt, FaUser } from "react-icons/fa";

const Contact = ({ id, name, number, deleteContact }) => {
    return (
      <ul className={s.container}>
        <li className={s.item}>
          <span className={s.name}>
            <FaUser /> {name}:
          </span>
          <span className={s.number}>
            <FaPhoneAlt /> {number}
          </span>
        </li>
        <button className={s.btn} onClick={() => deleteContact(id)}>
          Delete
        </button>
      </ul>
    );
  };
  
  export default Contact;