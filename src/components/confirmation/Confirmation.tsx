import PrimaryButton from "../../shared/components/Buttons/PrimaryButton/PrimaryButton";
import { useNavigate } from "react-router-dom";
import styles from "./Confirmation.module.scss";

const Confirmation = () => {
  const navigate = useNavigate();

  function handleHomeClick() {
    navigate("/");
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
