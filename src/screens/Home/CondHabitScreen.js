// import { View, Text } from 'react-native'
// import React from 'react'

// export function CondHabitScreen() {
//   return (
//     <View>
//       <Text>CondHabitScreen</Text>
//     </View>
//   )
// }

// import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
// import React, { useState } from 'react';
// import { Picker } from '@react-native-picker/picker';
// import Toast from 'react-native-toast-message';

// export function CondHabitScreen() {
//   const [estado, setEstado] = useState('');
//   const [integrantes, setIntegrantes] = useState('');
//   const [electricidad, setElectricidad] = useState('');
//   const [gas, setGas] = useState('');
//   const [aguaPotable, setAguaPotable] = useState('');
//   const [internet, setInternet] = useState('');
//   const [servicioElectricidad, setServicioElectricidad] = useState('');
//   const [servicioGas, setServicioGas] = useState('');
//   const [servicioAgua, setServicioAgua] = useState('');
//   const [observaciones, setObservaciones] = useState('');
//   const [PAREJA, setPAREJA] = useState('');
//   const [parejaTrabaja, setparejaTrabaja] = useState('');
//   const [HIJOS, setHIJOS] = useState('');
//   const [hijosMayores, setHijosMayores] = useState(''); 
//   const [hijoTrabaja, sethijoTrabaja] = useState('');
//   const [hijoTrabajaok, sethijoTrabajaok] = useState('');

//   const handleSave = () => {
//     if (!estado || !integrantes || !electricidad || !gas || !aguaPotable || !internet) {
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

//     // Guardar datos en el backend aquí
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>CONDICIÓN HABITACIONAL</Text>
//       <ScrollView style={styles.inputScroll}>
        
//         {/* ESTADO DE VIVIENDA */}
//         <View style={styles.inputContainer}>
//           <Text style={styles.label}>ESTADO DE VIVIENDA</Text>
//           <View style={styles.pickerContainer}>
//             <Picker selectedValue={estado} onValueChange={setEstado} style={styles.picker}>
//               <Picker.Item label="Seleccionar" value="" />
//               <Picker.Item label="BUENA" value="BUENA" />
//               <Picker.Item label="MALA" value="MALA" />
//               <Picker.Item label="ACEPTABLE" value="ACEPTABLE" />
//             </Picker>
//           </View>
//         </View>

//         {/* CANTIDAD DE INTEGRANTES */}
//         <View style={styles.inputContainer}>
//           <Text style={styles.label}>CANTIDAD DE INTEGRANTES</Text>
//           <TextInput 
//             style={styles.input} 
//             value={integrantes} 
//             onChangeText={setIntegrantes} 
//             keyboardType="numeric" 
//           />
//         </View>

//         {/* SERVICIOS */}
//                 <Text style={{textAlign: "center", fontWeight: "bold",
//             marginBottom: 5}}>SERVICIOS</Text>

//         {/* ELECTRICIDAD */}
//         <View style={styles.inputContainer}>
//           <Text style={styles.label2}>ELECTRICIDAD</Text>
//           <View style={styles.pickerContainer}>
//             <Picker selectedValue={electricidad} onValueChange={setElectricidad} style={styles.picker}>
//               <Picker.Item label="Seleccionar" value="" />
//               <Picker.Item label="SI" value="si" />
//               <Picker.Item label="NO" value="no" />
//             </Picker>
//           </View>
          
//         </View>

//         {/* GAS */}
//         <View style={styles.inputContainer}>
//           <Text style={styles.label2}>GAS</Text>
//           <View style={styles.pickerContainer}>
//             <Picker selectedValue={gas} onValueChange={setGas} style={styles.picker}>
//               <Picker.Item label="Seleccionar" value="" />
//               <Picker.Item label="SI" value="si" />
//               <Picker.Item label="NO" value="NO" />
//             </Picker>
//           </View>
         
//         </View>

//         {/* AGUA POTABLE */}
//         <View style={styles.inputContainer}>
//           <Text style={styles.label2}>AGUA POTABLE</Text>
//           <View style={styles.pickerContainer}>
//             <Picker selectedValue={aguaPotable} onValueChange={setAguaPotable} style={styles.picker}>
//               <Picker.Item label="Seleccionar" value="" />
//               <Picker.Item label="SI" value="si" />
//               <Picker.Item label="NO" value="no" />
//             </Picker>
//           </View>
          
//         </View>

//         {/* INTERNET */}
//         <View style={styles.inputContainer}>
//           <Text style={styles.label2}>INTERNET</Text>
//           <View style={styles.pickerContainer}>
//             <Picker selectedValue={internet} onValueChange={setInternet} style={styles.picker}>
//               <Picker.Item label="Seleccionar" value="" />
//               <Picker.Item label="SI" value="si" />
//               <Picker.Item label="NO" value="no" />
//             </Picker>
//           </View>
//         </View>

//                 <View style={styles.inputContainer}>
//                   <Text style={styles.label}>PAREJA</Text>
//                   <View style={styles.pickerContainer}>
//                     <Picker selectedValue={PAREJA} onValueChange={setPAREJA} style={styles.picker}>
//                       <Picker.Item label="SI" value="si" />
//                       <Picker.Item label="NO" value="no" />
//                     </Picker>
//                   </View>
//                   {PAREJA === "si" && (
//                     <>
//                       <Text style={styles.label2}>TRABAJA</Text>
//                     <View style={styles.pickerContainer}>
                      
//                       <Picker selectedValue={parejaTrabaja} onValueChange={setparejaTrabaja} style={styles.picker}>
//                         <Picker.Item label="SI" value="si" />
//                         <Picker.Item label="NO" value="no" />
//                       </Picker>
//                     </View>
//                     {parejaTrabaja === "si" && (
//                     <>
//                     <Text>
//                       PERMITE LA OPCION DE IR A IDENTIFICAR Y CONDICION LABORAL
//                     </Text>
//                     <View style={styles.pickerContainer}>
                    
//                       <Picker selectedValue={parejaTrabaja} onValueChange={setparejaTrabaja} style={styles.picker}>
//                         <Picker.Item label="SI" value="SI" />
//                         <Picker.Item label="NO" value="NO" />
//                       </Picker>
//                     </View>
//                     </>
//                   )}
//                     </>
//                   )}
//                 </View>
//                 <View style={styles.inputContainer}>
//                   <Text style={styles.label}>HIJOS</Text>
//                   <View style={styles.pickerContainer}>
//                     <Picker selectedValue={HIJOS} onValueChange={setHIJOS} style={styles.picker}>
//                       <Picker.Item label="SI" value="si" />
//                       <Picker.Item label="NO" value="no" />
//                     </Picker>
//                   </View>
//                   {HIJOS === "si" && (
//                     <>
//                       <Text style={styles.label2}>MAYORES</Text>
//                     <View style={styles.pickerContainer}>
                      
//                       <Picker selectedValue={hijosMayores} onValueChange={setHijosMayores} style={styles.picker}>
//                         <Picker.Item label="SI" value="si" />
//                         <Picker.Item label="NO" value="no" />
//                       </Picker>
//                     </View>
//                     {hijosMayores === "si" && (
//                     <>
//                     <Text>
//                       TRABAJA
//                     </Text>
//                     <View style={styles.pickerContainer}>
                    
//                       <Picker selectedValue={hijoTrabaja} onValueChange={sethijoTrabaja} style={styles.picker}>
//                         <Picker.Item label="SI" value="SI" />
//                         <Picker.Item label="NO" value="NO" />
//                       </Picker>
//                     </View>
//                     {hijoTrabaja === "si" && (
//                     <>
//                     <Text>
//                       PERMITE LA OPCION DE IR A IDENTIFICAR Y CONDICION LABORAL
//                     </Text>
//                     <View style={styles.pickerContainer}>
                    
//                       <Picker selectedValue={hijoTrabajaok} onValueChange={sethijoTrabajaok} style={styles.picker}>
//                         <Picker.Item label="SI" value="SI" />
//                         <Picker.Item label="NO" value="NO" />
//                       </Picker>
//                     </View>
//                     </>
//                   )}
//                     </>
//                   )}
//                   {hijosMayores === "no" && (
//                     <>
                    
//                     <Text>ESCOLARIZADOS</Text>
//                     <View style={styles.pickerContainer}>
//                     <Picker selectedValue={electricidad} onValueChange={setElectricidad} style={styles.picker}>
//                       <Picker.Item label="Seleccionar" value="" />
//                       <Picker.Item label="SI" value="si" />
//                       <Picker.Item label="NO" value="no" />
//                       <Picker.Item label="TRABAJA" value="trabaja" />
//                     </Picker>
//                   </View>
                    

                
//                     </>
//                   )}
//                     </>
//                   )}
//                 </View>
              

//         {/* OBSERVACIONES */}
//         <View style={styles.inputContainer}>
//           <Text style={styles.label}>OBSERVACIONES</Text>
//           <TextInput 
//             style={styles.input} 
//             value={observaciones} 
//             onChangeText={setObservaciones} 
//             keyboardType="default" // Permitir texto
//           />
//         </View>

//       </ScrollView>

//       <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
//         <Text style={styles.saveButtonText}>GUARDAR</Text>
//       </TouchableOpacity>

//       <Toast /> 
//     </View>
//   );
// }




// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f4f4f4",
//     alignItems: "center",
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
//   label2: {
//     marginBottom: 5,
//     fontSize: 12,
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
//     backgroundColor: "#1E5980",
//     paddingVertical: 12,
//     width: "80%",
//     alignItems: "center",
//     borderRadius: 5,
//     marginTop: 10,
//     marginBottom: 10,
//   },
//   saveButtonText: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "bold"
//   },
// });

import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import Toast from 'react-native-toast-message';
import { Checkbox } from "react-native-paper";

export function CondHabitScreen() {
  const [estado, setEstado] = useState(null);
  const [integrantes, setIntegrantes] = useState('');
  const [electricidad, setElectricidad] = useState(null);
  const [gas, setGas] = useState(null);
  const [aguaPotable, setAguaPotable] = useState(null);
  const [internet, setInternet] = useState(null);
  const [PAREJA, setPAREJA] = useState(null);
  const [parejaTrabaja, setparejaTrabaja] = useState(null);
  const [HIJOS, setHIJOS] = useState(null);
  const [hijosMayores, setHijosMayores] = useState(null); 
  const [hijoTrabaja, sethijoTrabaja] = useState(null);
  const [hijoTrabajaok, sethijoTrabajaok] = useState(null);
  const [observaciones, setObservaciones] = useState('');

  const handleSave = () => {
    if (!estado || !integrantes || !electricidad || !gas || !aguaPotable || !internet) {
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

  return (
    <View style={styles.container}>
      <Text style={styles.header}>CONDICIÓN HABITACIONAL</Text>
      <ScrollView style={styles.inputScroll}>

        {/* ESTADO DE VIVIENDA */}
        <View style={styles.inputContainer}>
          <Text style={styles.sectionTitle}>ESTADO DE VIVIENDA</Text>
          <View style={styles.checkboxContainer}>
            <Checkbox.Item label="BUENA" status={estado === "BUENA" ? "checked" : "unchecked"} onPress={() => setEstado("BUENA")} labelStyle={styles.checkboxLabel} />
            <Checkbox.Item label="MALA" status={estado === "MALA" ? "checked" : "unchecked"} onPress={() => setEstado("MALA")}  labelStyle={styles.checkboxLabel}/>
            <Checkbox.Item label="ACEPTABLE" status={estado === "ACEPTABLE" ? "checked" : "unchecked"} onPress={() => setEstado("ACEPTABLE")}  labelStyle={styles.checkboxLabel}/>
          </View>
        </View>

        {/* CANTIDAD DE INTEGRANTES */}
        <View style={styles.inputContainer}>
          <Text style={styles.sectionTitle}>CANTIDAD DE INTEGRANTES</Text>
          <TextInput 
            style={styles.input} 
            value={integrantes} 
            onChangeText={setIntegrantes} 
            keyboardType="numeric" 
          />
        </View>

        {/* SERVICIOS */}
        <Text style={styles.sectionTitle}>SERVICIOS</Text>

        {/* ELECTRICIDAD */}
        <View style={styles.inputContainer}> 
          <Text style={styles.label}>ELECTRICIDAD</Text>
          <View style={styles.checkboxContainer}>
            <Checkbox.Item label="SI" status={electricidad === "si" ? "checked" : "unchecked"} onPress={() => setElectricidad("si")} labelStyle={styles.checkboxLabel} />
            <Checkbox.Item label="NO" status={electricidad === "no" ? "checked" : "unchecked"} onPress={() => setElectricidad("no")}  labelStyle={styles.checkboxLabel}/>
          </View>
        </View>

        {/* GAS */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>GAS</Text>
          <View style={styles.checkboxContainer}>
            <Checkbox.Item label="SI" status={gas === "si" ? "checked" : "unchecked"} onPress={() => setGas("si")}  labelStyle={styles.checkboxLabel}/>
            <Checkbox.Item label="NO" status={gas === "no" ? "checked" : "unchecked"} onPress={() => setGas("no")}  labelStyle={styles.checkboxLabel}/>
          </View>
        </View> 

        {/* AGUA POTABLE */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>AGUA POTABLE</Text>
          <View style={styles.checkboxContainer}>
            <Checkbox.Item label="SI" status={aguaPotable === "si" ? "checked" : "unchecked"} onPress={() => setAguaPotable("si")}  labelStyle={styles.checkboxLabel}/>
            <Checkbox.Item label="NO" status={aguaPotable === "no" ? "checked" : "unchecked"} onPress={() => setAguaPotable("no")}  labelStyle={styles.checkboxLabel}/>
          </View>
        </View>

        {/* INTERNET */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>INTERNET</Text>
          <View style={styles.checkboxContainer}>
            <Checkbox.Item label="SI" status={internet === "si" ? "checked" : "unchecked"} onPress={() => setInternet("si")}  labelStyle={styles.checkboxLabel}/>
            <Checkbox.Item label="NO" status={internet === "no" ? "checked" : "unchecked"} onPress={() => setInternet("no")}  labelStyle={styles.checkboxLabel}/>
          </View>
        </View>

        {/* PAREJA */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>PAREJA</Text>
          <View style={styles.checkboxContainer}>
            <Checkbox.Item label="SI" status={PAREJA === "si" ? "checked" : "unchecked"} onPress={() => setPAREJA("si")}  labelStyle={styles.checkboxLabel}/>
            <Checkbox.Item label="NO" status={PAREJA === "no" ? "checked" : "unchecked"} onPress={() => setPAREJA("no")} labelStyle={styles.checkboxLabel} />
          </View>
          {PAREJA === "si" && (
            <>
              <Text style={styles.label3}>TRABAJA</Text>
              <View style={styles.checkboxContainer}>
                <Checkbox.Item label="SI" status={parejaTrabaja === "si" ? "checked" : "unchecked"} onPress={() => setparejaTrabaja("si")} labelStyle={styles.checkboxLabel} />
                <Checkbox.Item label="NO" status={parejaTrabaja === "no" ? "checked" : "unchecked"} onPress={() => setparejaTrabaja("no")}  labelStyle={styles.checkboxLabel}/>
              </View>
            </>
          )}
        </View>

        {/* HIJOS */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>HIJOS</Text>
          <View style={styles.checkboxContainer}>
            <Checkbox.Item label="SI" status={HIJOS === "si" ? "checked" : "unchecked"} onPress={() => setHIJOS("si")} labelStyle={styles.checkboxLabel} />
            <Checkbox.Item label="NO" status={HIJOS === "no" ? "checked" : "unchecked"} onPress={() => setHIJOS("no")}  labelStyle={styles.checkboxLabel}/>
          </View>
          {HIJOS === "si" && (
            <>
              <Text style={styles.label3}>MAYORES</Text>
              <View style={styles.checkboxContainer}>
                <Checkbox.Item label="SI" status={hijosMayores === "si" ? "checked" : "unchecked"} onPress={() => setHijosMayores("si")}  labelStyle={styles.checkboxLabel}/>
                <Checkbox.Item label="NO" status={hijosMayores === "no" ? "checked" : "unchecked"} onPress={() => setHijosMayores("no")}  labelStyle={styles.checkboxLabel}/>
              </View>
              {hijosMayores === "si" && (
                <>
                  <Text style={styles.label3}>TRABAJA</Text>
                  <View style={styles.checkboxContainer}>
                    <Checkbox.Item label="SI" status={hijoTrabaja === "si" ? "checked" : "unchecked"} onPress={() => sethijoTrabaja("si")}  labelStyle={styles.checkboxLabel}/>
                    <Checkbox.Item label="NO" status={hijoTrabaja === "no" ? "checked" : "unchecked"} onPress={() => sethijoTrabaja("no")}  labelStyle={styles.checkboxLabel}/>
                  </View>
                  {hijoTrabaja === "si" && (
                    <>
                      <Text style={styles.label3}>PERMITE LA OPCIÓN DE IR A IDENTIFICAR Y CONDICIÓN LABORAL</Text>
                      <View style={styles.checkboxContainer}>
                        <Checkbox.Item label="SI" status={hijoTrabajaok === "si" ? "checked" : "unchecked"} onPress={() => sethijoTrabajaok("si")} labelStyle={styles.checkboxLabel} />
                        <Checkbox.Item label="NO" status={hijoTrabajaok === "no" ? "checked" : "unchecked"} onPress={() => sethijoTrabajaok("no")} labelStyle={styles.checkboxLabel} />
                      </View>
                    </>
                  )}
                </>
              )}
            </>
          )}
        </View>

        {/* OBSERVACIONES */}
        <View style={styles.inputContainer}>
          <Text style={styles.sectionTitle}>OBSERVACIONES</Text> 
          <TextInput 
            style={styles.input} 
            value={observaciones} 
            onChangeText={setObservaciones} 
            keyboardType="default"
          />
        </View>

      </ScrollView>

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>GUARDAR</Text>
      </TouchableOpacity>

      <Toast /> 
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
  checkboxLabel: {
    fontSize: 10, 
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
    fontSize: 10,
  },
  label2: {
    marginBottom: 5,
    fontSize: 12,
  },
  label3: {
    
    marginBottom: 5,
    fontSize: 10,
    textDecorationLine: 'underline',
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
    width: "50%",
  },
  checkboxContainer: {
    // flexDirection: "row",
    // alignItems: "center",
    // justifyContent: "space-evenly",
    flexDirection: "row",
    alignItems: "center",
    
  },
  saveButton: {
    backgroundColor: "#1E5980",
    paddingVertical: 12,
    width: "80%",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold"
  },
  sectionTitle: {
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 10,
    fontSize: 16,
  },
  sectionSubTitle: {
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 10,
  },
});
