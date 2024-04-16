import React from "react";
import { useState } from "react";
import Form from "./components/Form";

function App() {
  const [tipusEstudiant, setTipusEstudiant] = useState("No Graduat");
  const [places, setPlaces] = useState(100);
  const handleChange = (e) => {
    setTipusEstudiant(e.target.value);
  };
  // Afegim la funció que actualitza el valor de la variable d'estat places
  const setPlacesDisponibles = (updatedPlaces) => {
    setPlaces(updatedPlaces);
  };
  return (
    <div className="flex flex-col items-center justify-center gap-5 h-screen">
      <div className="tipusEstudiant">
        <label className="text-2xl text-center mx-2 block">
          Places Disponibles: {places}
        </label>
        <label className="text-2xl mx-2">Selecciona Tipus d'Estudiant:</label>
        <select
          className="appDropDown border rounded-md py-1 px-2"
          onChange={handleChange}
          value={tipusEstudiant}
        >
          <option value="No Graduat">No Graduat</option>
          <option value="Graduat">Graduat</option>
        </select>
      </div>
      <Form
        tipusEstudiantSelect={tipusEstudiant}
        setPlacesDisponibles={setPlacesDisponibles}
        placesActuals={places}
      />
    </div>
  );
}

export default App;
