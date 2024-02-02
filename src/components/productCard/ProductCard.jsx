import React from "react";
import { Link, useParams } from "react-router-dom";

export default function ProductCard(props) {
  const truncatedDescription =
    props.description && props.description.length > 120
      ? props.description.substring(0, 120) + "..."
      : props.description;

  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={
            props.image_url ||
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoE0zLabFrxYyaVJ-BZsuUdFNCo2iOTnGKyVFfGr_AYQ&s"
          }
          className="card-img-top"
          alt={props.title}
        ></img>
        <div className="card-body">
          <h1>{props.title}</h1>
          <p className="card-text">{truncatedDescription}</p>
          <p>{props.price}€</p>
          <Link to={`/product-page/${props.id}`} className="card-link">
            Plačiau
          </Link>
        </div>
      </div>
    </div>
  );
}
