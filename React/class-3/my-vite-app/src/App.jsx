import { useState } from "react";
import TemperatureInput from "./components/TemperatureInput";
import TemperatureDisplay from "./components/TemperatureDisplay";
import Effect from "./components/EffectExample";
import FetchDataComponent from "./components/DataFetch";

function App() {
  const [temperature, setTemperature] = useState("");

  const handleTemperatureChange = (newTemperature) => {
    setTemperature(newTemperature);
  };

  return (
    <div>
      <TemperatureInput
        temperature={temperature}
        onTemperatureChange={handleTemperatureChange}
      />
      <TemperatureDisplay temperature={temperature} />
      <Effect/>
      <FetchDataComponent/>
    </div>
  );
}

export default App;
