import {
  StyleSheet,
  Text,
  SafeAreaView
} from 'react-native';
import AppRoute from './src/routes/AppRoute';
import { AppProvider } from './AppContext';

function App() {

  return (
      <AppProvider>
        <AppRoute />
      </AppProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default App;
