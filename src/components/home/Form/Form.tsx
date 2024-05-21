import { SyntheticEvent, useState } from "react";
import GradientButton from "../../../shared/components/Buttons/GradientButton/GradientButton";
import BrandsWeScaled from "../../BrandsWeScaled/BrandsWeScaled";
import { adTypeMap } from "../Ad/adTypeMap";
import { AdType } from "../Ad/types";
import styles from "./Form.module.scss";
import ReactGA from "react-ga4";

const Form = () => {
  const [totalSize, setTotalSize] = useState<string>("");

  function handleSetTotalSize(e: SyntheticEvent<HTMLSelectElement>) {
    setTotalSize(e.currentTarget.value);
    if (e.currentTarget.value === "50+") {
      ReactGA.event({
        category: e.currentTarget.value,
        action: "50+ selected",
        label: "50+ selected",
      });
    }
  }
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <div className={styles.flex}>
          <div className={styles.inputField}>
            <label htmlFor='name'>What is your name?</label>
            <input type='text' id='name' placeholder='i.e John Ford' />
          </div>
          <div className={styles.inputField}>
            <label htmlFor='name'>What is your email?</label>
            <input type='text' id='name' placeholder='Type your answer' />
          </div>
        </div>
        <div className={styles.flex}>
          <div className={styles.inputField}>
            <label htmlFor='name'>How large is your company?</label>
            <select id='name' value={totalSize} onChange={handleSetTotalSize}>
              <option defaultChecked value=''>
                Total Employee Size
              </option>
              <option value='0-10'>0-10</option>
              <option value='10-25'>10-25</option>
              <option value='25-49'>25-49</option>
              <option value='50+'>50+</option>
            </select>
          </div>
          <div className={styles.inputField}>
            <label htmlFor='name'>Current Marketing Challenges</label>
            <input
              type='text'
              id='name'
              placeholder='Choose multiple options'
            />
          </div>
        </div>
      </form>
      <div className={styles.actionButton}>
        <GradientButton>VIEW THE PMAX OPTIMIZATION BIBLE</GradientButton>
      </div>

      <div className={styles.brands}>
        <BrandsWeScaled brands={adTypeMap[AdType.Follow!]?.brands} />
      </div>
    </div>
  );
};

export default Form;
