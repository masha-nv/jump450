import { SyntheticEvent, useState } from "react";
import GradientButton from "../../../shared/components/Buttons/GradientButton/GradientButton";
import BrandsWeScaled from "../../BrandsWeScaled/BrandsWeScaled";
import { adTypeMap } from "../Ad/adTypeMap";
import { AdType } from "../Ad/types";
import styles from "./Form.module.scss";
import ReactGA from "react-ga4";
import { useLocation, useNavigate } from "react-router-dom";

declare let fbq: (action: string, event: string) => void;
declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

type FormType = {
  name: string;
  email: string;
  size: string;
  challenges: string;
};

const Form = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const navigate = useNavigate();
  const [formValue, setFormValue] = useState<FormType>({
    name: "",
    challenges: "",
    email: "",
    size: "",
  });

  function handleFireSizeEvent() {
    // google analytics event
    ReactGA.event({
      category: "50+",
      action: "50+ selected",
      label: "50+ selected",
    });

    // fb pixel event
    fbq("track", "50+");

    // Google Tag Manager event
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "50+" });
  }

  function handleFormValueChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    if (e.target.name === "size" && e.target.value === "50+") {
      handleFireSizeEvent();
    }
    setFormValue((val) => ({
      ...val,
      [e.target.name]: e.target.value,
    }));
  }

  function handleFormSubmit(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    // Create a new URL object
    const url = new URL(
      "https://hooks.zapier.com/hooks/catch/18932304/3v8hw53"
    );

    const formVals = formValue;
    // fb pixel event
    fbq("track", "formSubmit");

    // Google Tag Manager event
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "formSubmit", ...formVals });

    // handle form values for zapier automation
    Object.entries(formVals).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });

    // handle utm values for zapier automation
    const utmParams = [
      "utm_source",
      "utm_medium",
      "utm_campaign",
      "utm_term",
      "utm_content",
    ]
      .filter((param) => queryParams.has(param))
      .reduce(
        (params, param) => ({ ...params, [param]: queryParams.get(param) }),
        {}
      );

    Object.entries(utmParams).forEach(([key, value]) => {
      url.searchParams.append(key, value as string);
    });

    fetch(url.toString());

    const confirmationUrl = `/confirmation?${new URLSearchParams(
      utmParams
    ).toString()}`;
    navigate(confirmationUrl);
  }
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleFormSubmit}>
        <div className={styles.flex}>
          <div className={styles.inputField}>
            <label htmlFor='name'>What is your name?</label>
            <input
              type='text'
              id='name'
              placeholder='i.e John Ford'
              name='name'
              value={formValue.name}
              onChange={handleFormValueChange}
            />
          </div>
          <div className={styles.inputField}>
            <label htmlFor='email'>What is your email?</label>
            <input
              type='text'
              name='email'
              value={formValue.email}
              onChange={handleFormValueChange}
              id='email'
              placeholder='Type your answer'
            />
          </div>
        </div>
        <div className={styles.flex}>
          <div className={styles.inputField}>
            <label htmlFor='size'>How large is your company?</label>
            <select
              id='size'
              name='size'
              onChange={handleFormValueChange}
              value={formValue.size}>
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
            <label htmlFor='challenges'>Current Marketing Challenges</label>
            <input
              name='challenges'
              onChange={handleFormValueChange}
              value={formValue.challenges}
              type='text'
              id='challenges'
              placeholder='Choose multiple options'
            />
          </div>
        </div>
        <div className={styles.actionButton}>
          <GradientButton>VIEW THE PMAX OPTIMIZATION BIBLE</GradientButton>
        </div>
      </form>

      <div className={styles.brands}>
        <BrandsWeScaled brands={adTypeMap[AdType.Follow!]?.brands} />
      </div>
    </div>
  );
};

export default Form;
