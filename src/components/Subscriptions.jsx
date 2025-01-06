import { useEffect, useState } from "react";
import Subscription from "./Subscription";

const Subscriptions = () => {
  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    fetch("../subscriptions.json")
      .then((res) => res.json())
      .then((subscriptionsData) => setSubscriptions(subscriptionsData));
  }, []);

  return (
    <div className="font-poppins mb-24">
      <h2 className="text-center text-5xl font-bold uppercase">
        Subscription Prices
      </h2>
      <p className="font-roboto text-center uppercase mt-3 text-sm font-light">
        Exclusive Training Packages
      </p>
      <div className="grid gap-y-7 grid-cols-1 md:grid-cols-2 md:gap-x-7 lg:grid-cols-3 mt-12">
        {subscriptions.map((subscription, i) => (
          <Subscription key={i} subscription={subscription}></Subscription>
        ))}
      </div>
    </div>
  );
};

export default Subscriptions;
