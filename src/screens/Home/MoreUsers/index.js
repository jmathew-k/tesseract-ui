import React from "react";
import cn from "classnames";
import styles from "./MoreUsers.module.sass";
import Card from "../../../components/Card";
import Icon from "../../../components/Icon";

const socials = [
  {
    title: "Facebook",
    icon: "facebook",
    url: "https://www.facebook.com/ui8.net/",
  },
  {
    title: "Twitter",
    icon: "twitter",
    url: "https://twitter.com/ui8",
  },
  {
    title: "Instagram",
    icon: "instagram",
    url: "https://www.instagram.com/ui8net/",
  },
];

const MoreUsers = ({ className }) => {
  return (
    <Card
      className={cn(styles.card, className)}
      title="Social Media Spotlight"
      classTitle="title-blue"
    >
      <div className={styles.comments}>
        <div className={styles.info}>
          50% of new users explore new assets from social media sharing. Gain attention right now!{" "}
          <span role="img" aria-label="fire">
            🔥
          </span>
        </div>
        <div className={styles.btns}>
          {socials.map((x, index) => (
            <a
              className={cn("button-stroke", styles.button)}
              href={x.url}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
            >
              <Icon name={x.icon} size="24" />
              <span>{x.title}</span>
            </a>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default MoreUsers;
