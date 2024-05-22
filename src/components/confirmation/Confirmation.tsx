import PrimaryButton from "../../shared/components/Buttons/PrimaryButton/PrimaryButton";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Confirmation.module.scss";

const Confirmation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
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

  function handleHomeClick() {
    navigate(`/?${new URLSearchParams(utmParams).toString()}`);
  }
  return (
    <div className={styles.container}>
      <h1>Details about the PMAX Optimization can be found below</h1>
      <br />
      <PrimaryButton onClick={handleHomeClick}>Home</PrimaryButton>
    </div>
  );
};

export default Confirmation;
