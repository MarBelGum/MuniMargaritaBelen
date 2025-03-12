// import { View, Text } from 'react-native'
// import React from 'react'

// export function CondLaboralTrabScreen() {
//   return (
//     <View>
//       <Text>CondLaboralTrabScreen</Text>
//     </View>
//   )
// }

// import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
// import React, { useState } from 'react';
// import { Picker } from '@react-native-picker/picker';
// import Toast from 'react-native-toast-message'; // Importa Toast para notificaciones
// import { Checkbox } from "react-native-paper";
// import { useNavigation } from "@react-navigation/native";
// import { Ionicons } from '@expo/vector-icons'; // Para las flechas
// import { screen } from "../../utils"; 

// export function CondLaboralTrabScreen() {



//   const [botiquin, setBotiquin] = useState('');
//   const [baños, setBaños] = useState('');
//   const [accesibilidad, setAccesibilidad] = useState('');
//   const [jornada, setJornada] = useState('');
//   const [hora, sethora] = useState('');
//   const [hora2, sethora2] = useState('');
//   const [observaciones, setObservaciones] = useState('');

//     const navigation = useNavigation(); // Hook para la navegación



//   const toggleCheckbox = (id) => {
//     setOpciones((prevOpciones) =>
//       prevOpciones.map((opcion) =>
//         opcion.id === id ? { ...opcion, seleccionado: !opcion.seleccionado } : opcion
//       )
//     );
//   };



//   const handleSave = () => {
//     if (!numero || !fecha || !lugar || !tipoActa) {
//       Toast.show({
//         type: "error",
//         text1: "Error",
//         text2: "Todos los campos son obligatorios",
//       });
//       return;
//     }

//     // Simulación de guardado exitoso
//     Toast.show({
//       type: "success",
//       text1: "Éxito",
//       text2: "Datos guardados correctamente",
//     });

//     // Aquí guardar los datos en el backend
//   };


//         //para ir a la siguiente pantalla
//           const goToNextPage = () => {
//           navigation.navigate(screen.home.condHabitScreen)
//         }
      
//         //para ir a la pantalla anterior
//         const goToBackPage = () => {
//           navigation.navigate(screen.home.indentTrabajadorScreen)
//         }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>CONDICION LABORAL DE TRABAJADOR</Text>

  
//       <ScrollView style={styles.inputScroll}>
//       <View style={styles.inputContainer}>
//         <Text style={styles.label}>REGISTRADO</Text>
//         {/* Aqui utilizo un button radius para eleguir una o otra opcion (si/no) */}
//         <View style={styles.pickerContainer}>
//           <Picker
//             selectedValue={botiquin}
//             onValueChange={(itemValue) => setBotiquin(itemValue)}
//             style={styles.picker}
//           >
//             <Picker.Item label="SI" value="si" />
//             <Picker.Item label="NO" value="no" />
//           </Picker>
//       </View>
//       </View>
//       <View style={styles.inputContainer}>
//         <Text style={styles.label}>CATEGORIZADO</Text>
//         {/* Aqui utilizo un button radius para eleguir una o otra opcion (si/no) */}
//         <View style={styles.pickerContainer}>
//           <Picker
//             selectedValue={baños}
//             onValueChange={(itemValue) => setBaños(itemValue)}
//             style={styles.picker}
//           >
//             <Picker.Item label="BIEN" value="BIEN" />
//             <Picker.Item label="MAL" value="MAL" />
//           </Picker>
//       </View>
//       </View>
//       <View style={styles.inputContainer}>
//         <Text style={styles.label}>EQUIPAMIENTO</Text>
//         {/* Aqui utilizo un button radius para eleguir una o otra opcion (si/no) */}
//         <View style={styles.pickerContainer}>
//           <Picker
//             selectedValue={accesibilidad}
//             onValueChange={(itemValue) => setAccesibilidad(itemValue)}
//             style={styles.picker}
//           >
//             <Picker.Item label="SI" value="si" />
//             <Picker.Item label="NO" value="no" />
//           </Picker>
//       </View>
//       </View>
//       <View style={styles.inputContainer}>
//         <Text style={styles.label}>INDUMENTARIA</Text>
//         {/* Aqui utilizo un button radius para eleguir una o otra opcion (si/no) */}
//         <View style={styles.pickerContainer}>
//           <Picker
//             selectedValue={accesibilidad}
//             onValueChange={(itemValue) => setAccesibilidad(itemValue)}
//             style={styles.picker}
//           >
//             <Picker.Item label="SI" value="si" />
//             <Picker.Item label="NO" value="no" />
//           </Picker>
//       </View>
//       </View>

//       {/* <View style={styles.inputContainer}>
//         <Text style={styles.label}>JORNADA/HORARIO</Text>
//         <TextInput style={styles.input} value={jornada} onChangeText={setJornada} keyboardType="numeric" />
//       </View> */}
//         <View style={styles.inputContainer}>
//         <Text style={styles.label}>JORNADA</Text>
//         {/* Aqui utilizo un button radius para eleguir una o otra opcion (si/no) */}
//         <View style={styles.pickerContainer}>
//           <Picker
//             selectedValue={accesibilidad}
//             onValueChange={(itemValue) => setAccesibilidad(itemValue)}
//             style={styles.picker}
//           >
//             <Picker.Item label="COMPLETA" value="si" />
//             <Picker.Item label="MEDIA" value="no" />
//           </Picker>
//       </View>
//       </View>
//       <View style={{display: "flex", flexDirection: "row", justifyContent: "space-around", marginBottom: 20}}>
//         <View> 
//         <Text style={styles.label}>DESDE</Text>
//         <TextInput style={styles.input} value={hora} onChangeText={sethora}  placeholder='00HS-24HS' />
//         </View>
//         <View> 
//         <Text style={styles.label}>HASTA</Text>
//         <TextInput style={styles.input} value={hora2} onChangeText={sethora2}  placeholder='00HS-24HS' />
//         </View>
        
//       </View>




//       <View style={styles.inputContainer}>
//         <Text style={styles.label}>OBSERVACIONES</Text>
//         <TextInput style={styles.input} value={observaciones} onChangeText={setObservaciones} keyboardType="numeric" />
//       </View>
      
        
//       <View style={styles.inputContainerBTN}>
//             <TouchableOpacity style={styles.saveButton} onPress={goToBackPage}>
//             <Ionicons name="arrow-back" size={16} color="white" />
//               <Text style={styles.saveButtonText}>ATRAS </Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.saveButton} onPress={goToNextPage}>
//               <Text style={styles.saveButtonText}>SIGUIENTE </Text>
//               <Ionicons name="arrow-forward" size={16} color="white" />
//             </TouchableOpacity>
//             </View>

      
//       </ScrollView>
      
    



//       <Toast /> 
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   // container: {
//   //   flex: 1,
//   //   backgroundColor: "#f4f4f4",
//   //   alignItems: "center",
//   // },

//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: "#f4f4f4",
//     alignItems: "center",
//     borderWidth: 3,        // Grosor del borde
//     borderColor: "#1E5980",  // Color del borde
//     borderStyle: "solid",  // Tipo de borde
//     borderRadius: 10,      // Esquinas redondeadas (opcional)
//     margin: 10,            // Espaciado externo para no tocar los bordes de la pantalla
//   },

//   inputScroll: {
//     width: "100%",
    
//   },

//   header: {
//     fontSize: 22,
//     fontWeight: "bold",
//     textAlign: "center",
//     backgroundColor: "#E3A64F",
//     color: "#fff",
//     padding: 10,
//     borderRadius: 5,
//     marginBottom: 20,
//     width: "80%",
//     marginTop: 20,
//   },
//   inputContainer: {
//     width: "80%",
//     marginBottom: 15,
//     textAlign: "center",
//     alignSelf: "center",
//   },
//   label: {
//     fontWeight: "bold",
//     marginBottom: 5,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: "#ccc",
//     padding: 10,
//     borderRadius: 5,
//     backgroundColor: "#fff",
//     width: "100%",
//   },
//   pickerContainer: {
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 5,
//     backgroundColor: "#fff",
//     overflow: "hidden",
//   },
//   picker: {
//     width: "100%",
//     height: 50,
//   },
//   saveButton: {
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "center",
//     margin: 10,
//     //----------------------
//     backgroundColor: "#1E5980",
//     paddingVertical: 12,
//     width: "80%",
//     alignItems: "center",
//     borderRadius: 5,
//     marginTop: 20,
//   },
//   inputContainerBTN: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     width: "50%",
//   },
//   saveButtonText: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
// });

import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import Toast from 'react-native-toast-message';
import { Checkbox } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import { screen } from "../../utils";

export function CondLaboralTrabScreen() {
  const [registrado, setRegistrado] = useState(null);
  const [categorizado, setCategorizado] = useState(null);
  const [equipamiento, setEquipamiento] = useState(null);
  const [indumentaria, setIndumentaria] = useState(null);
  const [jornada, setJornada] = useState(null);
  const [hora, sethora] = useState('');
  const [hora2, sethora2] = useState('');
  const [observaciones, setObservaciones] = useState('');

  const navigation = useNavigation();

  const handleSave = () => {
    if (registrado === null || categorizado === null || equipamiento === null || indumentaria === null || jornada === null) {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Todos los campos son obligatorios",
      });
      return;
    }

    Toast.show({
      type: "success",
      text1: "Éxito",
      text2: "Datos guardados correctamente",
    });
  };

  const goToNextPage = () => navigation.navigate(screen.home.condHabitScreen);
  const goToBackPage = () => navigation.navigate(screen.home.indentTrabajadorScreen);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>CONDICIÓN LABORAL DEL TRABAJADOR</Text>

      <ScrollView style={styles.inputScroll}>

        {/* REGISTRADO */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>REGISTRADO</Text>
          <View style={styles.checkboxContainer}>
            <Checkbox.Item label="Sí" status={registrado === "si" ? "checked" : "unchecked"} onPress={() => setRegistrado("si")} labelStyle={styles.checkboxLabel} />
            <Checkbox.Item label="No" status={registrado === "no" ? "checked" : "unchecked"} onPress={() => setRegistrado("no")} labelStyle={styles.checkboxLabel} />
          </View>
        </View>

        {/* CATEGORIZADO */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>CATEGORIZADO</Text>
          <View style={styles.checkboxContainer}>
            <Checkbox.Item label="Bien" status={categorizado === "BIEN" ? "checked" : "unchecked"} onPress={() => setCategorizado("BIEN")} labelStyle={styles.checkboxLabel} />
            <Checkbox.Item label="Mal" status={categorizado === "MAL" ? "checked" : "unchecked"} onPress={() => setCategorizado("MAL")} labelStyle={styles.checkboxLabel} />
          </View>
        </View>

        {/* EQUIPAMIENTO */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>EQUIPAMIENTO</Text>
          <View style={styles.checkboxContainer}>
            <Checkbox.Item label="Sí" status={equipamiento === "si" ? "checked" : "unchecked"} onPress={() => setEquipamiento("si")} labelStyle={styles.checkboxLabel} />
            <Checkbox.Item label="No" status={equipamiento === "no" ? "checked" : "unchecked"} onPress={() => setEquipamiento("no")} labelStyle={styles.checkboxLabel} />
          </View>
        </View>

        {/* INDUMENTARIA */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>INDUMENTARIA</Text>
          <View style={styles.checkboxContainer}>
            <Checkbox.Item label="Sí" status={indumentaria === "si" ? "checked" : "unchecked"} onPress={() => setIndumentaria("si")} labelStyle={styles.checkboxLabel} />
            <Checkbox.Item label="No" status={indumentaria === "no" ? "checked" : "unchecked"} onPress={() => setIndumentaria("no")} labelStyle={styles.checkboxLabel} />
          </View>
        </View>

        {/* JORNADA */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>JORNADA</Text>
          <View style={styles.checkboxContainer}>
            <Checkbox.Item label="Completa" status={jornada === "completa" ? "checked" : "unchecked"} onPress={() => setJornada("completa")} labelStyle={styles.checkboxLabel} />
            <Checkbox.Item label="Media" status={jornada === "media" ? "checked" : "unchecked"} onPress={() => setJornada("media")} labelStyle={styles.checkboxLabel} />
          </View>
        </View>

        {/* HORARIOS */}
        <View style={styles.timeContainer}>
          <View>
            <Text style={styles.label}>DESDE</Text>
            <TextInput style={styles.input} value={hora} onChangeText={sethora} placeholder='00HS-24HS' keyboardType="numeric" maxLength={2} />
          </View>
          <View>
            <Text style={styles.label}>HASTA</Text>
            <TextInput style={styles.input} value={hora2} onChangeText={sethora2} placeholder='00HS-24HS' keyboardType="numeric" maxLength={2} />
          </View>
        </View>

        {/* OBSERVACIONES */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>OBSERVACIONES</Text>
          <TextInput style={styles.input} value={observaciones} onChangeText={setObservaciones} />
        </View>

        {/* BOTONES */}
        <View style={styles.inputContainerBTN}>
          <TouchableOpacity style={styles.saveButton} onPress={goToBackPage}>
            <Ionicons name="arrow-back" size={16} color="white" />
            <Text style={styles.saveButtonText}>ATRÁS</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.saveButton} onPress={goToNextPage}>
            <Text style={styles.saveButtonText}>SIGUIENTE</Text>
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
    borderWidth: 3,
    borderColor: "#1E5980",
    borderRadius: 10,
    margin: 10,
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
    alignSelf: "center",
    alignItems: "center",
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
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkboxLabel: {
    fontSize: 12, // Hace el texto más pequeño
  },
  timeContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
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







