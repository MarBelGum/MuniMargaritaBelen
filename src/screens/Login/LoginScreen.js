// import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Image } from "react-native";
// import { useState } from "react";
// // import { Icon } from "@expo/vector-icons";
// import { Icon } from "@rneui/base";
// import Toast from "react-native-toast-message"; // Importa Toast

// export function LoginScreen({ setIsAuthenticated }) {
//   const [usuario, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);


//   const handleLogin = () => {
//     if (!email || !password) {
//       Toast.show({
//         type: "error",
//         text1: "Error",
//         text2: "Todos los campos son obligatorios",
//       });
//       return;
//     }
  
//     if (email !== "admin@gmail.com" || password !== "123456") {
//       Toast.show({
//         type: "error",
//         text1: "Error de autenticación",
//         text2: "Credenciales incorrectas",
//       });
//       return;
//     }
  
//     Toast.show({
//       type: "success",
//       text1: "Bienvenido",
//       text2: "Has iniciado sesión correctamente",
//     });
  
//     setTimeout(() => setIsAuthenticated(true), 1000); // Simula la redirección
//   };

//   return (
//     <ImageBackground source={require("../../assets/campo_trigo.jpg")} style={styles.background}>
//       <View style={styles.container}>
//         <Image source={require("../../assets/LogoLogin.png")} style={styles.logo} />
        
//         <Text style={styles.label}>Usuario</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Cuit/Cuil/Email"
//           value={email}
//           onChangeText={setEmail}
//           keyboardType="email-address"
//         />

//         <Text style={styles.label}>Clave</Text>
//         <View style={styles.passwordContainer}>
//           <TextInput
//             style={styles.passwordInput}
//             placeholder="Clave"
//             value={password}
//             onChangeText={setPassword}
//             secureTextEntry={!showPassword}
//           />
//           <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
//             <Icon name={showPassword ? "eye" : "eye-slash"}  type="font-awesome-5" size={24} color="gray" />
//           </TouchableOpacity>
//         </View>

//         <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
//           <Text style={styles.loginText}>Ingresa</Text>
//         </TouchableOpacity>

       

        
//       </View>
//     </ImageBackground>
//   );
// }

// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//     resizeMode: "cover",
//     justifyContent: "center",
//   },
//   container: {
//     backgroundColor: "rgba(255, 255, 255, 0.9)",
//     padding: 20,
//     marginHorizontal: 30,
//     borderRadius: 10,
//     alignItems: "center",
//   },
//   logo: {
//     width: 120,
//     height: 120,
//     resizeMode: "contain",
//     marginBottom: 10,
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: "bold",
//     color: "#003366",
//   },
//   subtitle: {
//     fontSize: 14,
//     color: "#666",
//     textAlign: "center",
//     marginBottom: 20,
//   },
//   label: {
//     alignSelf: "flex-start",
//     fontWeight: "bold",
//     marginBottom: 5,
//   },
//   input: {
//     width: "100%",
//     padding: 10,
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 5,
//     backgroundColor: "#fff",
//     marginBottom: 10,
//   },
//   passwordContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 5,
//     width: "100%",
//     backgroundColor: "#fff",
//     paddingHorizontal: 10,
//   },
//   passwordInput: {
//     flex: 1,
//     padding: 10,
//   },
//   loginButton: {
//     backgroundColor: "#1E5980",
//     paddingVertical: 12,
//     width: "100%",
//     alignItems: "center",
//     borderRadius: 5,
//     marginVertical: 10,
//   },
//   loginText: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//   registerButton: {
//     paddingVertical: 10,
//     width: "100%",
//     alignItems: "center",
//     borderRadius: 5,
//     marginBottom: 10,
//     boxShadow: "0 2px 6px rgba(24, 96, 144, 0.7)",
//   },
//   registerText: {
//     color: "#1E5980",
//     fontSize: 16,
//     fontWeight: "bold",

    
//   },
//   forgotPasswordText: {
//     fontSize: 14,
//     color: "#666",
//   },
// });


// import React, { useState, useContext } from "react";
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Image } from "react-native";
// import { Icon } from "@rneui/base";
// import Toast from "react-native-toast-message"; 
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { AuthContext } from "../../context/AuthContext"; // Importa el contexto

// export function LoginScreen() {
//   const { setIsAuthenticated } = useContext(AuthContext); // Obtiene setIsAuthenticated del contexto

//   const [usuario, setUsuario] = useState(""); 
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false); // Estado de carga

//   const handleLogin = async () => {
//     if (!usuario || !password) {
//       Toast.show({
//         type: "error",
//         text1: "Error",
//         text2: "Todos los campos son obligatorios",
//       });
//       return;
//     }
    
//     setLoading(true); // Activar estado de carga

//     try {
//       const response = await fetch("https://uatre.intersistemas.net:8900/api/Usuario/loginEmailCuit", { 
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           usuario: usuario,
//           password: password,
//         }),
//       });

//       const data = await response.json();
//       console.log("Respuesta completa de la API:", JSON.stringify(data, null, 2));

//       if (!response.ok) {
//         console.log("Error en la autenticación. Código de estado:", response.status);
//         Toast.show({
//           type: "error",
//           text1: "Error de autenticación",
//           text2: data.message || "Credenciales incorrectas",
//         });
//         return;
//       }

//       Toast.show({
//         type: "success",
//         text1: "Bienvenido",
//         text2: "Has iniciado sesión correctamente",
//       });

//       // Guardar el token en AsyncStorage
//       if (data.token && data.token.tokenId) {
//         try {
//           await AsyncStorage.setItem('userToken', data.token.tokenId);
//           console.log('Token guardado correctamente:', data.token.tokenId);
//         } catch (error) {
//           console.error('Error al guardar el token:', error);
//         }
//       } else {
//         console.error('Error: No se recibió un token válido');
//       }

//       setIsAuthenticated(true); // Cambiar el estado de autenticación
//     } catch (error) {
//       console.error("Error de conexión:", error);
//       Toast.show({
//         type: "error",
//         text1: "Error de conexión",
//         text2: "No se pudo conectar con el servidor",
//       });
//     } finally {
//       setLoading(false); // Desactivar estado de carga
//     }
//   };

//   return (
    
//     <View style={styles.background}>
//       <View style={styles.container}>
//         <Image source={require("../../assets/LogoLogin.png")} style={styles.logo} />
        
//         <Text style={styles.label}>Usuario</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Usuario"
//           value={usuario}  
//           onChangeText={setUsuario}  
//           keyboardType="email-address" 
//         />

//         <Text style={styles.label}>Clave</Text>
//         <View style={styles.passwordContainer}>
//           <TextInput
//             style={styles.passwordInput}
//             placeholder="Clave"
//             value={password}
//             onChangeText={setPassword}
//             secureTextEntry={!showPassword}
//           />
//           <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
//             <Icon name={showPassword ? "eye" : "eye-slash"} type="font-awesome-5" size={24} color="gray" />
//           </TouchableOpacity>
//         </View>

//         <TouchableOpacity style={styles.loginButton} onPress={handleLogin} disabled={loading}>
//           <Text style={styles.loginText}>{loading ? "Cargando..." : "Ingresa"}</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }


// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//     justifyContent: "center",
//     backgroundColor: "rgba(137, 128, 128, 0.9)",
  
//   },
//   container: {
//     backgroundColor: "rgba(255, 255, 255, 0.9)",
//     padding: 20,
//     marginHorizontal: 30,
//     borderRadius: 10,
//     alignItems: "center",
//     borderWidth: 5,
//     borderColor: "#a2946a",
//     borderStyle: "solid"
//   },
//   logo: {
//     width: 240,
//     height: 240,
//     resizeMode: "contain",
//     marginBottom: 10,
//   },
//   label: {
//     alignSelf: "flex-start",
//     fontWeight: "bold",
//     marginBottom: 5,
//   },
//   input: {
//     width: "100%",
//     padding: 10,
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 5,
//     backgroundColor: "#fff",
//     marginBottom: 10,
//   },
//   passwordContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 5,
//     width: "100%",
//     backgroundColor: "#fff",
//     paddingHorizontal: 10,
//   },
//   passwordInput: {
//     flex: 1,
//     padding: 10,
//   },
//   loginButton: {
//     backgroundColor: "#1E5980",
//     paddingVertical: 12,
//     width: "100%",
//     alignItems: "center",
//     borderRadius: 5,
//     marginVertical: 10,
//   },
//   loginText: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
// });

import React, { useState, useContext } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Icon } from "@rneui/base";
import Toast from "react-native-toast-message"; 
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from "../../context/AuthContext"; // Importa el contexto

export function LoginScreen() {
  const { setIsAuthenticated } = useContext(AuthContext); // Obtiene setIsAuthenticated del contexto

  const [usuario, setUsuario] = useState(""); 
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false); // Estado de carga

  const handleLogin = async () => {
    if (!usuario || !password) {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Todos los campos son obligatorios",
      });
      return;
    }

    setLoading(true); // Activar estado de carga

    // Validar usuario y contraseña predefinidos
    if (usuario === "admin" && password === "admin") {
      Toast.show({
        type: "success",
        text1: "Bienvenido",
        text2: "Has iniciado sesión correctamente",
      });

      // Simular almacenamiento de sesión
      try {
        await AsyncStorage.setItem('userToken', 'adminToken');
        console.log('Sesión iniciada con usuario admin');
      } catch (error) {
        console.error('Error al guardar la sesión:', error);
      }

      setIsAuthenticated(true); // Cambiar el estado de autenticación
    } else {
      Toast.show({
        type: "error",
        text1: "Error de autenticación",
        text2: "Credenciales incorrectas",
      });
    }

    setLoading(false); // Desactivar estado de carga
  };

  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <Image source={require("../../assets/LogoLogin.png")} style={styles.logo} />
        
        <Text style={styles.label}>Usuario</Text>
        <TextInput
          style={styles.input}
          placeholder="Usuario"
          value={usuario}  
          onChangeText={setUsuario}  
          keyboardType="email-address" 
        />

        <Text style={styles.label}>Clave</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Clave"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Icon name={showPassword ? "eye" : "eye-slash"} type="font-awesome-5" size={24} color="gray" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin} disabled={loading}>
          <Text style={styles.loginText}>{loading ? "Cargando..." : "Ingresa"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#1E5980",
  },
  container: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    padding: 20,
    marginHorizontal: 30,
    borderRadius: 10,
    alignItems: "center",
    borderWidth: 5,
    borderColor: "#a2946a",
    borderStyle: "solid"
  },
  logo: {
    width: 240,
    height: 240,
    resizeMode: "contain",
    marginBottom: 10,
  },
  label: {
    alignSelf: "flex-start",
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    backgroundColor: "#fff",
    marginBottom: 10,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    width: "100%",
    backgroundColor: "#fff",
    paddingHorizontal: 10,
  },
  passwordInput: {
    flex: 1,
    padding: 10,
  },
  loginButton: {
    backgroundColor: "#1E5980",
    paddingVertical: 12,
    width: "100%",
    alignItems: "center",
    borderRadius: 5,
    marginVertical: 10,
  },
  loginText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

