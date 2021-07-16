import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [ plants, setPlants ] = useState([]);
  const [ searchPlant, setSearchPlant ] = useState('')

  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then(res => res.json())
    .then(plantsArray => setPlants(plantsArray))
  }, [])
  
  function addPlant(newPlant){
    setPlants([...plants, newPlant]);
  }

  const plantsToDisplay = plants.filter((plant) => {
    return plant.name.toLowerCase().includes(searchPlant.toLowerCase())
  })

  return (
    <main>
      <NewPlantForm
        addPlant={addPlant}
      />
      <Search
        searchPlant={searchPlant}
        setSearchPlant={setSearchPlant}
      />
      <PlantList
        plants={plantsToDisplay}
      />
    </main>
  );
}

export default PlantPage;
