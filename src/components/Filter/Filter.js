
import s from './Filter.module.css';
import { nanoid } from 'nanoid';

export default function Filter ({filter, onChange}) {
  const loginInputId = nanoid();

    return (
      <div className={s.filter__wrapper}>
        <label className={s.filter__field} htmlFor={loginInputId} />
        Find contact by name:
        <input
          id={loginInputId}
          className={s.filter__input}
          type="text"
          value={filter}
          onChange={onChange}
        />
      </div>
    );
  }


