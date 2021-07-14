import React from "react";
import PlantCard from "./PlantCard";

function PlantList({allPlants}) {
  console.log(allPlants)
  return (
    <ul className="cards">{
      allPlants.map((plant) => {
        return(
          <PlantCard
          key={plant.id}
          plantName={plant.name}
          plantImage={plant.image}
          plantPrice={plant.price}
        />
        )
      })
      }</ul>
  );
}

export default PlantList;
