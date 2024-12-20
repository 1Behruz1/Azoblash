import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import './List.css'
export default function List() {
  const data = useLoaderData();
  console.log(data);

  return (
    <div>
        <h2>Our Restaurants</h2>
      <ul>
        {data?.map((restaurant) => (
          <li key={restaurant.id}>
            <img
              width={300}
              height={200}
              src={restaurant.imageCarousel?.images[0].url}
            />
            <h3>{restaurant.restaurant.name}</h3>
            <p>{restaurant.restaurant.address.line1}</p>
            <p>{restaurant.restaurant.address.line2}</p>
            <p>{restaurant.restaurant.hours}</p>
            <ul>
              {restaurant.timeSlots.map((slot) => (
                <li>{slot.time}</li>
              ))}
            </ul>
            <Link className="border rounded bg-gray-400 p-1" to={`/restaurant/${restaurant.id}`}>More</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
