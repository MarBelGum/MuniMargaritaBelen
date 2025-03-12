

import { View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Picker } from '@react-native-picker/picker';
import Toast from 'react-native-toast-message';
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons'; // Para las flechas
import { screen } from "../../utils"; 

export function IdentActaScreen() {
  const [apellido, setApellido] = useState('');
  const [nombre, setNombre] = useState('');
  const [dni, setDni] = useState('');
  const [edad, setEdad] = useState('');


    const navigation = useNavigation(); // Hook para la navegación
  






    //para ir a la siguiente pantalla
      const goToNextPage = () => {
      navigation.navigate(screen.home.identInspectorScreen)
    }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>CONDUCTOR</Text>

      <ScrollView style={styles.inputScroll}>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>APELLIDO</Text>
        <TextInput style={styles.input} value={apellido} onChangeText={setApellido} keyboardType="ascii-capable"  />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>NOMBRE</Text>
        <TextInput style={styles.input} value={nombre} onChangeText={setNombre} keyboardType="ascii-capable" />
      </View>
      



      <View style={styles.inputContainer}>
        <Text style={styles.label}>DNI</Text>
        <TextInput style={styles.input} value={dni} onChangeText={setDni} keyboardType="numeric" maxLength={8} />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>EDAD</Text>
        <TextInput style={styles.input} value={edad} onChangeText={setEdad} keyboardType="numeric" maxLength={2}/>
      </View>

      <TouchableOpacity style={styles.saveButton} onPress={goToNextPage}>
        <Text style={styles.saveButtonText}>SIGUIENTE </Text>
        <Ionicons name="arrow-forward" size={16} color="white" />
      </TouchableOpacity>

      <Toast /> 
      </ScrollView>
    </View>
    
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   padding: 20,
  //   backgroundColor: "#f4f4f4",
  //   alignItems: "center",
  // },
  inputScroll: {
    width: "100%",

  },

    container: {
      flex: 1,
      padding: 20,
      backgroundColor: "#f4f4f4",
      alignItems: "center",
      borderWidth: 3,        // Grosor del borde
      borderColor: "#1E5980",  // Color del borde
      borderStyle: "solid",  // Tipo de borde
      borderRadius: 10,      // Esquinas redondeadas (opcional)
      margin: 10,            // Espaciado externo para no tocar los bordes de la pantalla
    },
  
  header: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#E3A64F",
    color: "#fff",
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    width: "100%",
  },
  inputContainer: {
    width: "80%",
    marginBottom: 15,
    alignSelf: "center",
  },
  label: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
    width: "100%",
  },
  dropdown: {
    maxHeight: 150,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#fff",
    borderRadius: 5,
    marginTop: 5,
  },
  dropdownItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    backgroundColor: "#fff",
    overflow: "hidden",
  },
  picker: {
    width: "100%",
    height: 50,
  },
  saveButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center",
    //----------------------
    backgroundColor: "#1E5980",
    paddingVertical: 12,
    width: "80%",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 20,
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
