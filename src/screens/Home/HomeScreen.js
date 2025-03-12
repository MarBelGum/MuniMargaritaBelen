// // import { View, Text } from 'react-native'
// // import React from 'react'
// // import { Button } from '@rneui/base'
// // import {screen} from "../../utils"
// // import {useNavigation} from "@react-navigation/native"

// // export function HomeScreen() {

// //   const navigation = useNavigation()

// //   const goToNextPage = () => {
// //     navigation.navigate(screen.home.condHabitScreen)
    
// //     //Esta navegacion me sirve si quiero navagar a una pantalla que no esta en el tab actual
// //     // navigation.navigate(screen.ajustes.tab, ({screen: screen.ajustes.tab}))
    
// //   }
// //   return (
// //     <View>
// //       <Text>HomeScreen</Text>
// //       <Button title="Pagina siguiente" onPress={goToNextPage}/>

// //     </View>
// //   )
// // }



// import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
// import React from 'react';
// import { useNavigation } from '@react-navigation/native';
// import { screen } from "../../utils"; 

// export function HomeScreen() {
//   const navigation = useNavigation();

//   // const menuOptions = [
//   //   { title: "IDENTIFICACION DE ACTA", screenName: screen.home.identActaScreen },
//   //   { title: "IDENTIFICACION DE INSPECTORES", screenName: screen.home.identInspectorScreen },
//   //   { title: "IDENTIFICACION DE ESTABLECIMIENTO", screenName: screen.home.identEstabScreen },
//   //   { title: "CONDICION LABORAL ESTABLECIMIENTO", screenName: screen.home.condLabEstabScreen },
//   //   { title: "IDENTIFICADOR DE TRABAJADOR", screenName: screen.home.indentTrabajadorScreen },
//   //   { title: "CONDICION LABORAL DE TRABAJADOR", screenName: screen.home.condLabScreen },
//   //   { title: "CONDICION HABITACIONAL", screenName: screen.home.condHabitScreen }
//   // ];


//   const menuOptions = [
//     { title: "CONDUCTOR", screenName: screen.home.identActaScreen },
//     { title: "MOTOVEHICULO", screenName: screen.home.identInspectorScreen },
//     { title: "CUENTA CON", screenName: screen.home.identEstabScreen },
//     { title: "PERSONAL GUM", screenName: screen.home.condLabEstabScreen },

//   ];
  
//   const handleNavigation = (screenName) => {
//     navigation.navigate(screenName);
//   };

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={menuOptions}
//         keyExtractor={(item) => item.title}
//         renderItem={({ item }) => (
//           <TouchableOpacity style={styles.button} onPress={() => handleNavigation(item.screenName)}>
//             <Text style={styles.buttonText}>{item.title}</Text>
//           </TouchableOpacity>
//         )}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     width: "100%",
//     height: "100%",
//     backgroundColor: "#f0f0f0",
//     paddingVertical: 20

//   },
//   button: {
//     width: "90%",
//     height: 80,
//     backgroundColor: "#E3A64F",
//     paddingVertical: 10,
//     borderRadius: 8,
//     marginVertical: 5,
//     alignSelf: "center",
//     alignItems: "center",
//     justifyContent: "center",
//     boxShadow: "0 2px 6px rgba(24, 96, 144, 0.7)"
//   },
//   buttonText: {
    
//     color: "#1E5980",
//     fontSize: 16,
//     fontWeight: "bold",
//     textAlign: "center",
//   }
// });





import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../utils"; 

export function HomeScreen() {

      const navigation = useNavigation(); // Hook para la navegación
          //para ir a la siguiente pantalla
            const goToNextPage = () => {
            navigation.navigate(screen.home.identActaScreen)
          }

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/LogoHome.png')} style={styles.image} />
     
      <TouchableOpacity style={styles.button} onPress={goToNextPage}>
        <Text style={styles.buttonText}>Comenzar Registro</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  image: {
    width: 340, // Ajusta según tu imagen
    height: 200, 
    resizeMode: 'cover', // Ajusta según tu imagen
    marginBottom: 20, // Espacio entre la imagen y el botón
  },
  button: {
    backgroundColor: "#1E5980",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

