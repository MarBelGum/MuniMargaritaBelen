
// import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
// import React, { useState } from 'react';
// import { Checkbox } from "react-native-paper";
// import Toast from 'react-native-toast-message';
// import { useNavigation } from "@react-navigation/native";
// import { Ionicons } from '@expo/vector-icons'; 
// import { screen } from "../../utils"; 

// export function CondLabEstablecimientoScreen() {
//   const [botiquin, setBotiquin] = useState(null);
//   const [baños, setBaños] = useState(null);
//   const [ubicacionBaño, setUbicacionBaño] = useState('');
//   const [accesibilidad, setAccesibilidad] = useState(null);
//   const [electricidad, setElectricidad] = useState(null);
//   const [servicioElectricidad, setServicioElectricidad] = useState('');
//   const [gas, setGas] = useState(null);
//   const [aguaPotable, setAguaPotable] = useState(null);
//   const [internet, setInternet] = useState(null);

//   const navigation = useNavigation();

//   const handleSave = () => {
//     if (botiquin === null || baños === null || accesibilidad === null || electricidad === null || gas === null || aguaPotable === null || internet === null) {
//       Toast.show({
//         type: "error",
//         text1: "Error",
//         text2: "Todos los campos son obligatorios",
//       });
//       return;
//     }

//     Toast.show({
//       type: "success",
//       text1: "Éxito",
//       text2: "Datos guardados correctamente",
//     });
//   };

//   const goToNextPage = () => navigation.navigate(screen.home.indentTrabajadorScreen);
//   const goToBackPage = () => navigation.navigate(screen.home.identEstabScreen);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>CONDICIÓN LABORAL ESTABLECIMIENTO</Text>
//       <ScrollView style={styles.inputScroll}>
        
//         {/* BOTIQUÍN */}
//         <View style={styles.inputContainer}>
//           <Text style={styles.sectionTitle}>BOTIQUÍN</Text>
//           <View style={styles.checkboxContainer}>
//             <Checkbox.Item label="Sí" status={botiquin === "si" ? "checked" : "unchecked"} onPress={() => setBotiquin("si")} labelStyle={styles.checkboxLabel}  />
//             <Checkbox.Item label="No" status={botiquin === "no" ? "checked" : "unchecked"} onPress={() => setBotiquin("no")}  labelStyle={styles.checkboxLabel} />
              
//           </View>
//         </View>

//         {/* BAÑOS */}
//         <View style={styles.inputContainer}>
//           <Text style={styles.sectionTitle}>BAÑOS</Text>
//           <View style={styles.checkboxContainer}>
//             <Checkbox.Item label="Sí" status={baños === "si" ? "checked" : "unchecked"} onPress={() => setBaños("si")}  labelStyle={styles.checkboxLabel} />
//             <Checkbox.Item label="No" status={baños === "no" ? "checked" : "unchecked"} onPress={() => setBaños("no")}  labelStyle={styles.checkboxLabel}  />
//           </View>
//           {baños === "si" && (
//             <View style={styles.checkboxContainer}>
//               <Checkbox.Item label="Dentro" status={ubicacionBaño === "dentro" ? "checked" : "unchecked"} onPress={() => setUbicacionBaño("dentro")}   labelStyle={styles.checkboxLabel} />
//               <Checkbox.Item label="Afuera" status={ubicacionBaño === "afuera" ? "checked" : "unchecked"} onPress={() => setUbicacionBaño("afuera")}    labelStyle={styles.checkboxLabel}/>
//             </View>
//           )}
//         </View>

//         {/* ACCESIBILIDAD */}
//         <View style={styles.inputContainer}>
//           <Text style={styles.sectionTitle}>ACCESIBILIDAD</Text>
//           <View style={styles.checkboxContainer}>
//             <Checkbox.Item label="Sí" status={accesibilidad === "si" ? "checked" : "unchecked"} onPress={() => setAccesibilidad("si")}  labelStyle={styles.checkboxLabel} />
//             <Checkbox.Item label="No" status={accesibilidad === "no" ? "checked" : "unchecked"} onPress={() => setAccesibilidad("no")}  labelStyle={styles.checkboxLabel} />
//           </View>
//         </View>

//         <Text style={styles.sectionTitle}>SERVICIOS</Text>

//         {/* ELECTRICIDAD */}
//         <View style={styles.inputContainer}>
//           <Text  style={styles.underlineText}>ELECTRICIDAD</Text>
//           <View style={styles.checkboxContainer}>
//             <Checkbox.Item label="Sí" status={electricidad === "si" ? "checked" : "unchecked"} onPress={() => setElectricidad("si")} labelStyle={styles.checkboxLabel}   />
//             <Checkbox.Item label="No" status={electricidad === "no" ? "checked" : "unchecked"} onPress={() => setElectricidad("no")} labelStyle={styles.checkboxLabel}   />
//           </View>
//           {electricidad === "si" && (
//             <View style={styles.checkboxContainer}>
//               <Checkbox.Item label="Grupo Electrógeno" status={servicioElectricidad === "grupoElectrogeno" ? "checked" : "unchecked"} onPress={() => setServicioElectricidad("grupoElectrogeno")}  labelStyle={styles.checkboxLabel} />
//               <Checkbox.Item label="De Red" status={servicioElectricidad === "deRed" ? "checked" : "unchecked"} onPress={() => setServicioElectricidad("deRed")}  labelStyle={styles.checkboxLabel}  />
//             </View>
//           )}
//         </View>

//         {/* GAS */}
//         <View style={styles.inputContainer}>
//           <Text  style={styles.underlineText}>GAS</Text>
//           <View style={styles.checkboxContainer}>
//             <Checkbox.Item label="Sí" status={gas === "si" ? "checked" : "unchecked"} onPress={() => setGas("si")}  labelStyle={styles.checkboxLabel} />
//             <Checkbox.Item label="Leña" status={gas === "leña" ? "checked" : "unchecked"} onPress={() => setGas("leña")}  labelStyle={styles.checkboxLabel} />
//           </View>
//         </View>

//         {/* AGUA POTABLE */}
//         <View style={styles.inputContainer}>
//           <Text  style={styles.underlineText}>AGUA POTABLE</Text>
//           <View style={styles.checkboxContainer}>
//             <Checkbox.Item label="Sí" status={aguaPotable === "si" ? "checked" : "unchecked"} onPress={() => setAguaPotable("si")}  labelStyle={styles.checkboxLabel} />
//             <Checkbox.Item label="No" status={aguaPotable === "no" ? "checked" : "unchecked"} onPress={() => setAguaPotable("no")}  labelStyle={styles.checkboxLabel} />
//           </View>
//         </View>

//         {/* INTERNET */}
//         <View style={styles.inputContainer}>
//           <Text  style={styles.underlineText}>INTERNET</Text>
//           <View style={styles.checkboxContainer}>
//             <Checkbox.Item label="Sí" status={internet === "si" ? "checked" : "unchecked"} onPress={() => setInternet("si")}   labelStyle={styles.checkboxLabel}/>
//             <Checkbox.Item label="No" status={internet === "no" ? "checked" : "unchecked"} onPress={() => setInternet("no")}   labelStyle={styles.checkboxLabel}/>
//           </View>
//         </View>

//         {/* BOTONES */}
//         <View style={styles.inputContainerBTN}>
//           <TouchableOpacity style={styles.saveButton} onPress={goToBackPage}>
//             <Ionicons name="arrow-back" size={16} color="white" />
//             <Text style={styles.saveButtonText}>ATRÁS</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.saveButton} onPress={goToNextPage}>
//             <Text style={styles.saveButtonText}>SIGUIENTE</Text>
//             <Ionicons name="arrow-forward" size={16} color="white" />
//           </TouchableOpacity>
//         </View>

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

//   // container: { flex: 1, padding: 20, backgroundColor: "#f4f4f4", alignItems: "center" },
//   sectionTitle: { textAlign: "center", fontWeight: "bold", marginBottom: 10, fontSize: 16 },
//   checkboxContainer: { flexDirection: "row", alignItems: "center", justifyContent: "center", marginBottom: 10},
//   checkboxLabel: {
//     fontSize: 10, // Reduce el tamaño de la fuente
//   },

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
//   underlineText: {
//     textDecorationLine: "underline", // Aplica el subrayado
//     textAlign: "center",
//     fontSize: 12,
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
//     // fontWeight: "bold",
//     fontSize: 10,
//     marginBottom: 5,
//     alignContent: "center",
//     alignSelf: "center",
//   },
//   label2: {
//     marginBottom: 5,
//     fontSize: 12,
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
import { Picker } from '@react-native-picker/picker';
import Toast from 'react-native-toast-message'; // Importa Toast para notificaciones
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons'; // Para las flechas
import { screen } from "../../utils"; 


export function CondLabEstablecimientoScreen() {
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
      <Text style={styles.header}>PERSONAL GUM</Text>

      <ScrollView style={styles.inputScroll}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>DOMICILIO DONDE SE HIZO EL CONTROL</Text>
          <TextInput style={styles.input} value={razonSocial} onChangeText={setRazonSocial} />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>VIO LA FALTA</Text>
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
            <Text style={styles.saveButtonText}>ATRÁS</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.saveButton} onPress={goToNextPage}>
            <Text style={styles.saveButtonText}>GUARDAR</Text>
            
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
    
    //----------------------
    backgroundColor: "#1E5980",
    paddingVertical: 12,
    width: "100%",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 20,
  },
  inputContainerBTN: {
    flexDirection: "column",
    width: "80%",
    alignSelf: "center",
    
   
    


  },
  saveButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});


























