import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

import { ShiftsScreen, ShiftScreen } from "./src";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PATHS } from "./src/paths";
import { TRootParamList } from "./src/navigation";

const Stack = createNativeStackNavigator<TRootParamList>();

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={PATHS.SHIFTS} component={ShiftsScreen} options={{ title: "Смены" }} />
          <Stack.Screen name={PATHS.SHIFT} component={ShiftScreen} options={{ title: "Смена" }} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
