import React from "react";
import { useRouter } from "next/router";

import ColorCard from "components/cards/ColorCard";

function EventDetailPage(props) {
  const router = useRouter();
  const { event_id } = router.query;

  const event_int_val = parseInt(event_id);

  if (event_int_val) {
    return (
      <div>
        <h3>Event Detail Page {event_id}</h3>
        {["red", "blue", "orange"].map((item) => {
          return <ColorCard data={item} />;
        })}
      </div>
    );
  } else {
    return (
      <div>
        <h3>Invalid Event Id</h3>
      </div>
    );
  }
}

export default EventDetailPage;
