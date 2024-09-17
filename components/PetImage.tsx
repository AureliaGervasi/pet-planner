import { Image, View, StyleSheet } from "react-native";

export default function PetImage( ) {

    //////////// change to function to use pet image for selected pet profile
    const petImage = "../assets/images/pet-image-placeholder.jpeg";
    //////////

    if (!petImage) return null;

    return (
        <View>
            <Image source={require(petImage)} style={styles.petImage}/>
        </View>
    )
}

const styles = StyleSheet.create ({
    petImage: {
        borderColor: 'white',
        borderRadius: 100,
        height: 36,
        width: 36,
    }
})