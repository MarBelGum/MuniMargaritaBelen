// // filepath: src/screens/Ajustes.js
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import React from 'react';
// import Toast from 'react-native-toast-message';
// import { useNavigation } from '@react-navigation/native';
// import { screen } from "../../utils";
// import AsyncStorage from '@react-native-async-storage/async-storage'; // Importa AsyncStorage


// export function Ajustes() {
//   const navigation = useNavigation();

//   const handleLogout = async () => {
//     try {
//       await AsyncStorage.removeItem('userToken');
//       Toast.show({
//         type: "success",
//         text1: "Sesión cerrada",
//         text2: "Has cerrado sesión correctamente",
//       });
//           //Esta navegacion me sirve si quiero navagar a una pantalla que no esta en el tab actual
//           navigation.navigate(screen.login.tab, ({screen: screen.login.tab}));
//     } catch (error) {
//       console.error('Error al cerrar sesión:', error);
//       Toast.show({
//         type: "error",
//         text1: "Error",
//         text2: "No se pudo cerrar la sesión",
//       });
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.userInfo}>
//         <Text style={styles.label}>Estado de sesión:</Text>
//         <Text style={styles.value}>Usuario autenticado</Text>
//       </View>

//       <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
//         <Text style={styles.logoutText}>Cerrar Sesión</Text>
//       </TouchableOpacity>

//       <Toast />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: "#f4f4f4",
//     alignItems: "center",
//   },
//   userInfo: {
//     backgroundColor: "#fff",
//     padding: 15,
//     borderRadius: 8,
//     width: "90%",
//     alignItems: "center",
//     marginBottom: 20,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//     elevation: 5,
//   },
//   label: {
//     fontWeight: "bold",
//     fontSize: 16,
//     color: "#333",
//   },
//   value: {
//     fontSize: 16,
//     color: "#555",
//     marginBottom: 10,
//   },
//   logoutButton: {
//     backgroundColor: "#FF3B30",
//     paddingVertical: 12,
//     width: "80%",
//     alignItems: "center",
//     borderRadius: 5,
//   },
//   logoutText: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
// });


import React, { useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Toast from 'react-native-toast-message';
import { useNavigation } from '@react-navigation/native';
import { screen } from "../../utils";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from "../../context/AuthContext";

export function Ajustes() {
  const navigation = useNavigation();
  const { setIsAuthenticated } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('userToken');
      Toast.show({
        type: "success",
        text1: "Sesión cerrada",
        text2: "Has cerrado sesión correctamente",
      });
      // Actualiza el estado de autenticación para que se muestre la pantalla de Login
      setIsAuthenticated(false);
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "No se pudo cerrar la sesión",
      });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        <Text style={styles.label}>Estado de sesión:</Text>
        <Text style={styles.value}>Usuario autenticado</Text>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout} disabled={false}>
        <Text style={styles.logoutText}>Cerrar Sesión</Text>
      </TouchableOpacity>

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
  },
  userInfo: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 8,
    width: "90%",
    alignItems: "center",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
  },
  label: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#333",
  },
  value: {
    fontSize: 16,
    color: "#555",
    marginBottom: 10,
  },
  logoutButton: {
    backgroundColor: "#FF3B30",
    paddingVertical: 12,
    width: "80%",
    alignItems: "center",
    borderRadius: 5,
  },
  logoutText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
