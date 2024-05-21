import GradientButton from "../../../shared/components/Buttons/GradientButton/GradientButton";
import BrandsWeScaled from "../../BrandsWeScaled/BrandsWeScaled";
import { adTypeMap } from "../Ad/adTypeMap";
import { AdType } from "../Ad/types";
import styles from "./Form.module.scss";

const Form = () => {
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
            <input type='text' id='name' placeholder='Total Employee Size' />
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
