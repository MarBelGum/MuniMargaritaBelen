// import { View, Text } from 'react-native'
// import React from 'react'

// export function IdentificacionTrabajadorScreen() {
//   return (
//     <View>
//       <Text>IdentificacionTrabajadorScreen</Text>
//     </View>
//   )
// }


import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import Toast from 'react-native-toast-message'; // Importa Toast para notificaciones
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons'; // Para las flechas
import { screen } from "../../utils"; 


export function IdentificacionTrabajadorScreen() {
  const [dni, setDni] = useState('');
  const [apellido, setApellido] = useState('');
  const [nombre, setNombre] = useState('');
  const [antiguedad, setAntiguedad] = useState('');
  const [actividad, setActividad] = useState('');
  const [contacto, setContacto] = useState('');
  const [celular, setCelular] = useState('');
  const [mail, setMail] = useState('');
  const [sexo, setSexo] = useState('');
  const navigation = useNavigation(); // Hook para la navegación


  const handleSave = () => {
    if (!numero || !fecha || !lugar || !tipoActa) {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Todos los campos son obligatorios",
      });
      return;
    }

    // Simulación de guardado exitoso
    Toast.show({
      type: "success",
      text1: "Éxito",
      text2: "Datos guardados correctamente",
    });

    // Aquí guardar los datos en el backend
  };
      //para ir a la siguiente pantalla
        const goToNextPage = () => {
        navigation.navigate(screen.home.condLabScreen)
      }
    
      //para ir a la pantalla anterior
      const goToBackPage = () => {
        navigation.navigate(screen.home.condLabEstabScreen)
      }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>IDENTIFICACIÓN DE TRABAJADOR</Text>

  
      <ScrollView style={styles.inputScroll}>
      
      <View style={styles.inputContainer}>
      <Text style={styles.label}>DNI</Text>
      <View style={styles.inputContainer2}>
        <TextInput style={styles.input} value={dni} onChangeText={setDni} keyboardType="numeric" />
        <Ionicons name="search" size={16} color="black" style={styles.iconSearch} />
      </View>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>APELLIDO</Text>
        <TextInput style={styles.input} value={apellido} onChangeText={setApellido} keyboardType="numeric" />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>NOMBRE</Text>
        <TextInput style={styles.input} value={nombre} onChangeText={setNombre} keyboardType="numeric" />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>ANTIGÜEDAD</Text>
        <TextInput style={styles.input} value={antiguedad} onChangeText={setAntiguedad} keyboardType="numeric" />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>ACTIVIDAD</Text>
        <TextInput style={styles.input} value={actividad} onChangeText={setActividad} keyboardType="numeric" />
      </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>SEXO</Text>
              <View style={styles.pickerContainer}>
                <Picker selectedValue={sexo} onValueChange={(itemValue) => setSexo(itemValue)} style={styles.picker}>
                  <Picker.Item label="Seleccionar opción" value="" />
                  <Picker.Item label="M" value="Masculino" />
                  <Picker.Item label="F" value="Femenino" />
                  <Picker.Item label="OTROS" value="Otros" />
                </Picker>
              </View>
            </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>CONTACTO</Text>
        <TextInput style={styles.input} value={contacto} onChangeText={setContacto} keyboardType="numeric" />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>CELULAR</Text>
        <TextInput style={styles.input} value={celular} onChangeText={setCelular} keyboardType="numeric" />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>MAIL</Text>
        <TextInput style={styles.input} value={mail} onChangeText={setMail} keyboardType="numeric" />
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
      </ScrollView>
      
    


   


      <Toast /> 
    </View>
  );
}

const styles = StyleSheet.create({
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
  inputScroll: {
    width: "100%",
    
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
    width: "80%",
    marginTop: 20,
  },
  inputContainer: {
    width: "80%",
    marginBottom: 15,
    textAlign: "center",
    alignSelf: "center",
  },
  labelDni: {
    fontWeight: "bold",
    marginBottom: 5,
   
  
  },
  inputContainer2: {

    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
    textAlign: "center",
    alignSelf: "center",
    position: "relative",
  },
  iconSearch: {
    position: "absolute",
    right: 10,
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
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

