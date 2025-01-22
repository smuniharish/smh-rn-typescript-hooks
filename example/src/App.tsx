import { Text, View, StyleSheet } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP} from 'smh-react-native-responsive-screen';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Result: {heightPercentageToDP(1) + "width "+widthPercentageToDP(1)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
