import React from "react";
import { useRouter } from "next/router";

function EventDetailPage(props) {
  const router = useRouter();
  const { event_id } = router.query;
  return (
    <div>
      <h3>Event Detail Update Page {event_id}</h3>
    </div>
  );
}

export default EventDetailPage;
