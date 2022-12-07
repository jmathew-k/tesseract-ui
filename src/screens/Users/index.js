import React from "react";
import styles from "./Users.module.sass";
import Overview from "./Overview";
import TrafficChannel from "./TrafficChannel";
import ActiveUsers from "./ActiveUsers";
import ShareProducts from "./ShareProducts";
import RefundRequests from "../../components/RefundRequests";
import TopDevice from "./TopDevice";
import TopCountry from "./TopCountry";
import Message from "./Message";
import NewUser from "./NewUser";

const Users = () => {
  return (
    <div className={styles.row}>
      <div className={styles.col}>
        <Overview className={styles.card} />
        <TrafficChannel className={styles.card} />
        <ActiveUsers className={styles.card} />
        <ShareProducts className={styles.card} />
      </div>
      <div className={styles.col}>
        <RefundRequests
          className={styles.card}
          title="Refund requests"
          classTitle="title-red"
        />
        <TopDevice className={styles.card} />
        <TopCountry className={styles.card} />
        <Message className={styles.card} />
        <NewUser className={styles.card} />
      </div>
    </div>
  );
};

export default Users;
