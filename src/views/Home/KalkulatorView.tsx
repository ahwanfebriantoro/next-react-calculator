import { useEffect, useState } from 'react';
import style from './KV.module.scss';

interface renderButton {
  value?: number;
  setValue?: Function;
  number: Array<number>;
}

const RenderButton: React.FC<renderButton> = ({ value, number, setValue }) => {
  return (
    <div style={{ width: '100%', display: 'flex', flexWrap: 'wrap' }}>
      <div
        className={style.inputButton}
        style={{ flexBasis: '20%' }}
        onClick={() => setValue('')}
      >
        Clear
      </div>
      <div className={style.inputButton} style={{ flexBasis: '20%' }}>
        x
      </div>
      <div className={style.inputButton} style={{ flexBasis: '20%' }}>
        /
      </div>
      <div className={style.inputButton} style={{ flexBasis: '20%' }}>
        -
      </div>
      <div className={style.inputButton} style={{ flexBasis: '20%' }}>
        +
      </div>
      {number.map((item) => {
        return (
          <div
            className={style.inputButton}
            style={{ flexBasis: '33.333%' }}
            onClick={() => {
              if (!value) {
                setValue(item.toString());
                return;
              }
              setValue(value.toString() + item.toString());
            }}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
};

const KalkulatorView = () => {
  const [number, setNumber] = useState([]);
  const [value, setValue] = useState(null);
  useEffect(() => {
    let number = [];
    for (let i = 1; i <= 9; i++) {
      number.push(i);
    }
    setNumber(number);
  }, []);
  return (
    <div className={style.baseContainer}>
      <div className={style.headSection}>
        <input type="number" disabled className={style.output} />
        <input
          type="number"
          className={style.input}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div className={style.bodySection}>
        <RenderButton number={number} setValue={setValue} value={value} />
      </div>
    </div>
  );
};

export default KalkulatorView;
