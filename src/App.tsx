import { Button } from './components';
import { useBearStore } from './store/use-bear-store';

const App = () => {
  const { bears, increasePopulation, decreasePopulation } = useBearStore();
  return (
    <div>
      <Button onClick={decreasePopulation}>-</Button>
      <span>{bears} bears</span>
      <Button onClick={increasePopulation}>+</Button>
    </div>
  );
};

export default App;
