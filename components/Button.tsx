import { StyleSheet, View, Pressable, Text } from 'react-native';
// import { PopupProps } from './Popup';
// import FontAwesome from "@expo/vector-icons/FontAwesome";
// import { useRouter } from 'expo-router';

export interface ButtonProps {
    label: string;
    onPress: () => void;
}

export default function Button({ label, onPress }: ButtonProps) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#8C00FF',
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
