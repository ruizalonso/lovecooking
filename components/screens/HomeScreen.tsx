import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const profilePic = require('../../assets/food.jpg');

const HomeScreen = () => {
    return (
        <ScrollView style={styles.container}>

            <View style={styles.header}>
                <Image source={profilePic} style={styles.profileImage} />
                <Text style={styles.headerText}>Descubre nuevas recetas</Text>
            </View>
            <TouchableOpacity style={styles.forgotPassword}>
                <Text style={styles.forgotPasswordText}>Has olvidado tu contraseña</Text>
            </TouchableOpacity>

            <View style={styles.searchSection}>
                <Text style={styles.searchTitle}>Encuentra recetas deliciosas</Text>
                <TextInput style={styles.searchInput} placeholder="Buscar..." />
                <TouchableOpacity style={styles.bookmark}>
                    <Icon name="bookmark" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.registerButton}>
                    <Text style={styles.registerButtonText}>Registrar</Text>
                </TouchableOpacity>
            </View>


            <View style={styles.tabs}>
                <Text style={styles.tabText}>Búsqueda de recetas</Text>
                <Text style={styles.tabText}>Examinar las categorías</Text>
            </View>

            <View style={styles.suggestions}>
                <Text style={styles.suggestionsTitle}>Sugerencias de recetas</Text>
                <Text>Inspírate con nuevos platos</Text>
                <Text>Próxima sesión de cocina</Text>
            </View>


            <View style={styles.newRecipes}>
                <Text style={styles.newRecipesTitle}>Prueba nuevas recetas</Text>
                <Text>Explora y disfruta cocinando.</Text>
                <Text>Próxima sesión de cocina</Text>
            </View>


            <View style={styles.organizeSection}>
                <Text style={styles.organizeTitle}>Organizar recetas</Text>
                <View style={styles.organizeItem}>
                    <Icon name="cutlery" size={24} color="black" />
                    <Text>Recetas Saludables</Text>
                </View>
                <View style={styles.organizeItem}>
                    <Icon name="birthday-cake" size={24} color="black" />
                    <Text>Ideas de postres</Text>
                </View>
                <View style={styles.organizeItem}>
                    <Icon name="star" size={24} color="black" />
                    <Text>Recetas favoritas</Text>
                </View>
                <View style={styles.organizeItem}>
                    <Icon name="check-circle" size={24} color="black" />
                    <Text>Planificación de comidas</Text>
                </View>
            </View>


            <View style={styles.footer}>
                <Icon name="home" size={24} color="black" />
                <Icon name="plus-circle" size={24} color="black" />
                <Icon name="calendar" size={24} color="black" />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    forgotPassword: {
        marginBottom: 20,
    },
    forgotPasswordText: {
        color: 'gray',
    },
    searchSection: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
    },
    searchTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    searchInput: {
        marginTop: 10,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
    },
    bookmark: {
        position: 'absolute',
        right: 10,
        top: 10,
    },
    registerButton: {
        marginTop: 10,
        backgroundColor: '#d9534f',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    registerButtonText: {
        color: '#fff',
    },
    tabs: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    tabText: {
        fontSize: 16,
    },
    suggestions: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
    },
    suggestionsTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    newRecipes: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
    },
    newRecipesTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    organizeSection: {
        marginTop: 20,
    },
    organizeTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    organizeItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        padding: 10,
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
    },
});

export default HomeScreen;
