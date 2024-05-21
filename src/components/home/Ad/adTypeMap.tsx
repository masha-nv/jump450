import { ReactNode } from "react";
import { AdType } from "./types";
import styles from "./Ad.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBabyCarriage,
  faClover,
  faMagic,
  faSackDollar,
  faScaleBalanced,
} from "@fortawesome/free-solid-svg-icons";
import { faApple } from "@fortawesome/free-brands-svg-icons";

export type AdEntity = {
  heading: ReactNode | ReactNode[];
  helpText: ReactNode | ReactNode[];
  image: ReactNode;
  brands: ReactNode[];
};

export type AdTypeMap = {
  [K in AdType]: AdEntity;
};

export const adTypeMap: AdTypeMap = {
  [AdType.View]: {
    heading: (
      <>
        <h1 className={styles.title}>
          The Performance Max Optimization Blueprint -{" "}
          <span className={styles.orangeHighlight}>Scale To $50k/day</span>
        </h1>
      </>
    ),
    helpText: (
      <p className={styles.helpText}>
        Performance Max is one of the most powerful tools to scale revenue on
        Google, if you know how to use it. Steal our winning strategies to scale
        on PMAX effortlessly.
      </p>
    ),
    image: <FontAwesomeIcon icon={faScaleBalanced} />,
    brands: [
      <FontAwesomeIcon icon={faApple} />,
      <FontAwesomeIcon icon={faClover} />,
      <FontAwesomeIcon icon={faBabyCarriage} />,
      <FontAwesomeIcon icon={faScaleBalanced} />,
      <FontAwesomeIcon icon={faSackDollar} />,
    ],
  },
  [AdType.Follow]: {
    heading: (
      <>
        <h1 className={styles.title}>
          <span className={styles.orangeHighlight}>Follow </span>this blueprint
          to
          <span className={styles.pinkHighlight}> supercharge </span>your
          creative production capabilities
        </h1>
      </>
    ),
    helpText: (
      <p className={styles.helpText}>
        Creative Volume is the single most important predictor of scale across
        social channels. Use this guide as a roadmap on how to multiply base
        creatives for an iterative approach to scale.
      </p>
    ),
    image: <FontAwesomeIcon icon={faMagic} />,
    brands: [
      <FontAwesomeIcon icon={faApple} />,
      <FontAwesomeIcon icon={faClover} />,
      <FontAwesomeIcon icon={faBabyCarriage} />,
      <FontAwesomeIcon icon={faScaleBalanced} />,
      <FontAwesomeIcon icon={faSackDollar} />,
    ],
  },
  [AdType.Scale]: {} as unknown as AdEntity,
};
