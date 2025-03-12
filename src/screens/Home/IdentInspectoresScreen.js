import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import Toast from 'react-native-toast-message';
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons'; // Para las flechas
import { screen } from "../../utils"; 

export function IdentInspectoresScreen() {

  const [modelo, setModelo] = useState("");
  const [cilindrada, setCilindrada] = useState("");
  const [color, setColor] = useState("");


  const navigation = useNavigation(); // Hook para la navegación





  //para ir a la siguiente pantalla
    const goToNextPage = () => {
    navigation.navigate(screen.home.identEstabScreen)
  }

  //para ir a la pantalla anterior
  const goToBackPage = () => {
    navigation.navigate(screen.home.identActaScreen)
  }

  return (

          <View style={styles.container}>
      <Text style={styles.header}>MOTOVEHICULO</Text>
      
      <ScrollView style={styles.inputScroll}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>MODELO</Text>
        <TextInput style={styles.input} value={modelo} onChangeText={setModelo} keyboardType="ascii-capable" />
      </View>

      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>CILINDRADA</Text>
        <TextInput style={styles.input} value={cilindrada} onChangeText={setCilindrada} keyboardType="numeric" />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>COLOR</Text>
        <TextInput style={styles.input} value={color} onChangeText={setColor} keyboardType="ascii-capable" />
      </View>
      
      
      <View style={styles.inputContainerBTN}>
      <TouchableOpacity style={styles.saveButton} onPress={goToBackPage}>
      <Ionicons name="arrow-back" size={16} color="white" />
        <Text style={styles.saveButtonText}>ATRAS </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.saveButton} onPress={goToNextPage}>
        <Text style={styles.saveButtonText}>SIGUIENTE </Text>
        <Ionicons name="arrow-forward" size={16} color="white" />
      </TouchableOpacity>
      </View>

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
    textAlign: "center",
    alignSelf: "center",
  },
  label: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  label2: {
    
    marginBottom: 5,
    fontSize: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
    width: "100%",
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
    margin: 10,
    //----------------------
    backgroundColor: "#1E5980",
    paddingVertical: 12,
    width: "80%",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 20,
    
  },
  inputContainerBTN: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "50%",
    justifyContent: "center",

    textAlign: "center",
    alignSelf: "center",
    


  },
  saveButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

