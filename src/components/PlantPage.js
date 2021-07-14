import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then(res => res.json())
    .then(plantsArr => setPlants(plantsArr))}
  , [])

  function addNewPlant(newPlant) {
    setPlants([...plants, newPlant])
  }

  return (
    <main>
      <NewPlantForm 
        addPlant={addNewPlant}
      />
      <Search />
      <PlantList 
        allPlants={plants}
      />
    </main>
  );
}

export default PlantPage;
