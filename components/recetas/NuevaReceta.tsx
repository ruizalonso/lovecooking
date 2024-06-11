import React, { useState } from "react";
import Checkbox from "expo-checkbox";
import { Picker } from "@react-native-picker/picker";
import { StyleSheet, Text, View, TextInput, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const Main = () => {
    const [isChecked, setIsChecked] = useState(true);
    const [selectedValue, setSelectedValue] = useState("valorInicial");
    const [text, setText] = useState("");

    const handleCheckboxChange = (newValue: boolean) => {
        setIsChecked(newValue);
    };

    return (
        <View>
            <View style={styles.container}>
                <Icon name="menu" size={30} color="#000" style={styles.leftIcon} />
                <View style={styles.rightContainer}>
                    <Icon
                        name="restaurant"
                        size={30}
                        color="#000"
                        style={styles.rightIcon}
                    />
                    <Image
                        source={{
                            uri: "https://cdn.icon-icons.com/icons2/2643/PNG/512/male_man_people_person_avatar_white_tone_icon_159363.png",
                        }}
                        style={styles.image}
                    />
                </View>
            </View>
            <View>
                <Text style={styles.title}>NUEVA RECETA</Text>
            </View>
            <View style={styles.containerP}>
                <TextInput
                    style={styles.input}
                    placeholder="nombre de la receta"
                    placeholderTextColor="#C4C4C4"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Lista de ingredientes"
                    placeholderTextColor="#C4C4C4"
                />
            </View>
            <View style={styles.containerCheck}>
                <Text>Tiempo de preparacion</Text>
                <Checkbox
                    value={isChecked}
                    onValueChange={handleCheckboxChange}
                    color="#F34343"
                />
            </View>
            <View style={styles.pickerContainer}>
                <Text style={styles.label}>Tiempo de preparación</Text>
                <Picker
                    selectedValue={selectedValue}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    style={styles.picker}
                >
                    <Picker.Item label="Opción 1" value="opcion1" />
                    <Picker.Item label="Opción 2" value="opcion2" />
                    <Picker.Item label="Opción 3" value="opcion3" />
                </Picker>

                <Picker
                    selectedValue={selectedValue}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    style={styles.picker}
                >
                    <Picker.Item label="Opción 1" value="opcion1" />
                    <Picker.Item label="Opción 2" value="opcion2" />
                    <Picker.Item label="Opción 3" value="opcion3" />
                </Picker>
            </View>

            <View style={styles.pickerContainer}>
                <Text style={styles.label}>Porciones</Text>
                <Picker
                    selectedValue={selectedValue}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    style={styles.picker}
                >
                    <Picker.Item label="Opción 1" value="opcion1" />
                    <Picker.Item label="Opción 2" value="opcion2" />
                    <Picker.Item label="Opción 3" value="opcion3" />
                </Picker>

                <Picker
                    selectedValue={selectedValue}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    style={styles.picker}
                >
                    <Picker.Item label="Opción 1" value="opcion1" />
                    <Picker.Item label="Opción 2" value="opcion2" />
                    <Picker.Item label="Opción 3" value="opcion3" />
                </Picker>
            </View>
            <View style={styles.containerCheck}>
                <Text>Nivel de dificultad</Text>
                <Checkbox value={false} color="#F34343" />
            </View>
            <Text style={styles.label}>Tags:</Text>
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonsContainer}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Botón 1</Text>
                    </View>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Botón 2</Text>
                    </View>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Botón 3</Text>
                    </View>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Botón 4</Text>
                    </View>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Botón 5</Text>
                    </View>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Botón 6</Text>
                    </View>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Botón 7</Text>
                    </View>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Botón 8</Text>
                    </View>
                </View>
                <View></View>
            </View>
            <View style={styles.containerP}>
                <Text>Nota:</Text>
                <TextInput
                    style={styles.textarea}
                    multiline={true}
                    numberOfLines={4} // Establece el número de líneas inicialmente visibles
                    value={text}
                    onChangeText={(text) => setText(text)}
                    placeholder="Notas adicionales"
                    placeholderTextColor="#C4C4C4"
                />
            </View>
            <View style={styles.iconsContainer}>
                <Icon name="home" size={30} color="#000" style={styles.icon} />
                <Icon name="add" size={30} color="#000" style={styles.icon} />
                <Icon name="calendar" size={30} color="#000" style={styles.icon} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    iconsContainer: {
        flexDirection: "row",
        justifyContent: "center",
        paddingHorizontal: 10,
    },
    icon: {
        marginHorizontal: 30, // Espacio horizontal entre los iconos
    },
    textarea: {
        width: "100%",
        height: 120,
        borderColor: "#C4C4C4",
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingTop: 10,
    },
    label: {
        padding: 10,
    },
    pickerContainer: {
        flexDirection: "row",
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    picker: {
        flex: 1,
        marginRight: 10,
    },

    containerCheck: {
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    containerP: {
        paddingHorizontal: 10,
    },
    input: {
        height: 40,
        borderColor: "#C4C4C4",
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        backgroundColor: "#f8f8f8",
    },
    leftIcon: {
        flex: 1,
    },
    rightContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 50,
        resizeMode: "contain",
    },
    rightIcon: {
        marginLeft: 10,
    },
    title: {
        fontWeight: "bold",
        fontSize: 18,
        padding: 15,
    },
    buttonsContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    button: {
        paddingLeft: 10,
        width: "25%",
        height: 40,
        backgroundColor: "#F34343",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#ccc",
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default Main;
