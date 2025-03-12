import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AppStack } from "./AppStack";
import { AjustesStack } from "./AjustesStack";
import { Icon } from '@rneui/themed';
import { screen } from "../utils";

const Tab = createBottomTabNavigator(); 

export function AppNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#1E5980",
        tabBarInactiveTintColor: "gray",
        tabBarIcon: ({ color, size }) => screenOptionsIcon(route, color, size),
      })}
    >
      <Tab.Screen name={screen.home.tab} component={AppStack} options={{ title: "Inicio" }} />
      <Tab.Screen name={screen.ajustes.tab} component={AjustesStack} options={{ title: "Ajustes" }} />
    </Tab.Navigator>
  );
}

function screenOptionsIcon(route, color, size) {
  let iconName;
  
  if (route.name === screen.home.tab) {
    iconName = "home";
  }
  if (route.name === screen.ajustes.tab) {
    iconName = "settings";
  }
  return <Icon type="material" name={iconName} size={size} color={color} />;
}



// import React, { useState, useEffect } from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { AppStack } from './AppStack';
// import { AjustesStack } from './AjustesStack';
// import { loginStack } from './Account/loginStack';
// import { Icon } from '@rneui/themed';
// import { screen } from '../utils';
// import AsyncStorage from '@react-native-async-storage/async-storage'; // Importar AsyncStorage

// const Tab = createBottomTabNavigator();

// export function AppNavigation() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {
//     // Verificamos si hay un token en AsyncStorage
//     const checkAuthentication = async () => {
//       try {
//         const token = await AsyncStorage.getItem('token'); // Obtener el tokenId
//         if (token) {
//           setIsAuthenticated(true);  // Si hay token, el usuario está autenticado
//         } else {
//           setIsAuthenticated(false);  // Si no hay token, el usuario no está autenticado
//         }
//       } catch (error) {
//         console.error('Error checking token:', error);
//       }
//     };

//     checkAuthentication();
//   }, []);

//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         headerShown: false,
//         tabBarActiveTintColor: '#1E5980',
//         tabBarInactiveTintColor: 'gray',
//         tabBarIcon: ({ color, size }) => screenOptionsIcon(route, color, size),
//       })}
//     >
//       {isAuthenticated ? (
//         <>
//           <Tab.Screen
//             name={screen.home.tab}
//             component={AppStack}
//             options={{ title: 'Inicio' }}
//           />
//           <Tab.Screen
//             name={screen.ajustes.tab}
//             component={AjustesStack}
//             options={{ title: 'Ajustes' }}
//           />
//         </>
//       ) : (
//         <Tab.Screen
//             name={screen.home.tab}
//             component={AppStack}
//             options={{ title: 'Inicio' }}
//           />
//       )}
//     </Tab.Navigator>
//   );
// }

// function screenOptionsIcon(route, color, size) {
//   let iconName;

//   if (route.name === screen.home.tab) {
//     iconName = 'home';
//   }
//   if (route.name === screen.ajustes.tab) {
//     iconName = 'settings';
//   }
//   return <Icon type="material" name={iconName} size={size} color={color} />;
// }
