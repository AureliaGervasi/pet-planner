import { StyleSheet, SafeAreaView } from 'react-native';
import HeaderBar from '@/components/HeaderBar';

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <HeaderBar title="Pets"/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
