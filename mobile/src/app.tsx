import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { DETAILS, INCIDENTS } from '@/config/routes';
import DetailsScreen from '@/screens/Details';
import IncidentsScreen from '@/screens/Incidents';

const RootStack = createNativeStackNavigator({
  initialRouteName: INCIDENTS,
  screenOptions: {
    headerShown: false,
  },
  screens: {
    [INCIDENTS]: IncidentsScreen,
    [DETAILS]: DetailsScreen,
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}
