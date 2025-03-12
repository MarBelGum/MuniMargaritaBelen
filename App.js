// import {NavigationContainer} from "@react-navigation/native"
// import {AppNavigation} from "./src/navigation/AppNavigation"

// export default function App() {
//   return (
//     <>
//       <NavigationContainer>
//         <AppNavigation />
//       </NavigationContainer>
//     </>
//   );
// }

// import { NavigationContainer } from "@react-navigation/native";
// import {createNativeStackNavigator} from "@react-navigation/native-stack"
// import { useState } from "react";
// import { AppNavigation } from "./src/navigation/AppNavigation"; // Tus Tabs (Inicio y Ajustes)
// import { LoginScreen } from "./src/screens/Login/LoginScreen"; // Pantalla de Login
// import Toast from "react-native-toast-message";

// const Stack = createNativeStackNavigator();

// export default function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   return (
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{ headerShown: false }}>
//         {!isAuthenticated ? (
//           <Stack.Screen name="Login">
//             {(props) => <LoginScreen {...props} setIsAuthenticated={setIsAuthenticated} />}
//           </Stack.Screen>
//         ) : (
//           <Stack.Screen name="App" component={AppNavigation} />
//         )}
//       </Stack.Navigator>
//       {/* Este toas es para notificaciones globales */}
//       <Toast /> 
//     </NavigationContainer>
//   );
// }


import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from '@react-native-async-storage/async-storage'; // Asegurar que está bien importado
import { AppNavigation } from "./src/navigation/AppNavigation";
import { LoginScreen } from "./src/screens/Login/LoginScreen";
import Toast from "react-native-toast-message";
import { AuthContext } from "./src/context/AuthContext"; // Importar el contexto

const Stack = createNativeStackNavigator();

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkToken = async () => {
      try {
        const token = await AsyncStorage.getItem('userToken');
        setIsAuthenticated(!!token);
      } catch (error) {
        console.error('Error al verificar el token:', error);
        setIsAuthenticated(false);
      }
    };

    checkToken();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {isAuthenticated ? (
            <Stack.Screen name="App" component={AppNavigation} />
          ) : (
            <Stack.Screen name="Login" component={LoginScreen} />
          )}
        </Stack.Navigator>
        <Toast />
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

