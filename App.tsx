import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { Shifts } from "./src";

function App() {
  return (
    <SafeAreaProvider>
      <Shifts />
    </SafeAreaProvider>
  );
}

export default App;
