import React from "react";
import { useLoaderData, Link } from "react-router-dom";

const Detail = () => {
  const restaurant = useLoaderData();

  if (!restaurant) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Link to="/">Go Back</Link>
      <h1>{restaurant.restaurant.name}</h1>
      <img
        src={restaurant.imageCarousel?.images[0]?.url}
        width={400}
        height={300}
        alt={restaurant.restaurant.name}
      />
      <p>{restaurant.restaurant.description}</p>
      <div>
        <h2>Location</h2>
        <p>{restaurant.restaurant.address.line1}</p>
        <p>{restaurant.restaurant.address.line2}</p>
      </div>
      <p>{restaurant.restaurant.hours}</p>
      <ul>
        {restaurant.timeSlots?.map((slot, index) => (
          <li key={index}>{slot.time}</li>
        ))}
      </ul>
    </div>
  );
};

export default Detail;
