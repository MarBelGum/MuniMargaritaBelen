// import { View, Text } from 'react-native'
// import React from 'react'

// export function IdentEstablecimientoScreen() {
//   return (
//     <View>
//       <Text>IdentEstablecimientoScreen</Text>
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


export function IdentEstablecimientoScreen() {
  const [numero, setNumero] = useState('');
  const [fecha, setFecha] = useState(''); 
  const [lugar, setLugar] = useState('');
  const [tipoActa, setTipoActa] = useState('');
  const [razonSocial, setRazonSocial] = useState('');
  const [cuit, setCuit] = useState('');
  const [sector, setSector] = useState('');
  const [actividad, setActividad] = useState('');
  const [geoUbicacion, setGeoUbicacion] = useState('');
  const [quienRecibe, setQuienRecibe] = useState('');
  const [dni, setDni] = useState('');
  const [celular, setCelular] = useState('');
  const [mail, setMail] = useState('');

    const navigation = useNavigation(); // Hook para la navegación
  

  const handleSave = () => {
    if (!razonSocial || !cuit || !sector || !actividad || !geoUbicacion || !quienRecibe || !dni || !celular || !mail) {
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
      navigation.navigate(screen.home.condLabEstabScreen)
    }
   
    //para ir a la pantalla anterior
    const goToBackPage = () => {
      navigation.navigate(screen.home.identInspectorScreen)
    }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>CUENTA CON</Text>

      <ScrollView style={styles.inputScroll}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>CASCO</Text>
          <TextInput style={styles.input} value={razonSocial} onChangeText={setRazonSocial} />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>CEDULA</Text>
          <TextInput style={styles.input} value={cuit} onChangeText={setCuit} keyboardType="numeric" />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>CARNET DE CONDUCIR</Text>
          <TextInput style={styles.input} value={sector} onChangeText={setSector} />
        </View>
        
        <Toast /> 
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
      
      

 
     
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: "#f4f4f4",
  //   alignItems: "center",
  // },

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
