import React, {useState, useEffect} from 'react';
import { SafeAreaView, View, Text, StyleSheet, Pressable, TouchableOpacity, Modal } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import PetImage from "./PetImage";
import Button from './Button';

// import useBooleanHandlers from "../hooks/useBooleanHandlers";
// import Popup from "./Popup";

export type HeaderBarProps = {
    title: string;
}

export default function HeaderBar({ title }: HeaderBarProps) {

    const [useModal, setUseModal] = useState(false);
    const [label, setLabel] = useState("");

    const openModal = () => {
        setUseModal(true);
    }

    const closeModal = () => {
        setUseModal(false);
    }

    useEffect(() => {
        if (title === "Pets") {
            setLabel("Add Pet");
        } else if (title === "Diary") {
            setLabel("Add Log");
        } else if ("Reminders") {
            setLabel("Add Reminder");
        }
        else {
            setLabel("Add");
        }
    })

    if (title === "Diary" || title === "Pets" || title === "Reminders") {
        return (
            <>
                <SafeAreaView style={{marginHorizontal: 15}}>
                    <View style={styles.title}>
                        <View>
                            <TouchableOpacity onPress={openModal}>
                                <AntDesign name="plus" size={28} color="white" />
                            </TouchableOpacity> 
                        </View>
                        <View>
                            <Text style={styles.text}>{title}</Text>
                        </View>
                        <View>
                            <PetImage />
                        </View>
                    </View>
                </SafeAreaView>
                <Modal
                    animationType="fade"
                    visible={useModal}
                    onRequestClose={closeModal}
                >
                    <View style={styles.popupContainer}>
                        <Text>
                            Let's get to know your furry friend!
                        </Text>
                        <Button label={label} onPress={closeModal} />  
                        <Pressable onPress={closeModal}>
                            <Text style={{marginVertical: 10}}>
                                Cancel
                            </Text>    
                        </Pressable> 
                                                
                    </View>
                </Modal>
            </>
        )
    } else {
        return (
            <>
                <SafeAreaView style={{marginHorizontal: 15}}>
                    <View style={styles.title}>
                        <View>

                        </View>
                        <View>
                            <Text style={styles.text}>{title}</Text>
                        </View>
                        <View>
                            <PetImage />
                        </View>
                    </View>
                </SafeAreaView>
                <Modal
                    animationType="fade"
                    visible={useModal}
                    onRequestClose={closeModal}
                >
                    <View style={styles.popupContainer}>
                        <Text>
                            Let's get to know your furry friend!
                        </Text>
                        <Button label={label} onPress={closeModal} />   
                        <Pressable onPress={closeModal}>
                            <Text style={{marginVertical: 10}}>
                                Cancel
                            </Text>    
                        </Pressable>                          
                    </View>
                </Modal>
            </>
        )
    }
    
}

const styles = StyleSheet.create({
    title: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontSize: 36,
    },
    popupStyle: {
        backgroundColor: 'gray',
        width: 'auto',
    },
    popupContainer: {
        // flex: 1,
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        height: "100%",
    },
    // popupContent: {
    //     backgroundColor: 'gray',
    //     justifyContent: 'center',
    //     alignContent: 'center',
    //     alignItems: 'center',
    //     height: 200,
    //     width: 350,
    // },
})