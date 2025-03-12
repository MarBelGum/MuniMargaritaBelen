import { Image } from 'react-native';
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import { screen } from "../utils"
import { HomeScreen } from "../screens/Home/HomeScreen"
import {CondHabitScreen} from "../screens/Home/CondHabitScreen"
import {CondLabEstablecimientoScreen} from "../screens/Home/CondLabEstablecimientoScreen"
import {CondLaboralTrabScreen} from "../screens/Home/CondLaboralTrabScreen"
import {IdentActaScreen} from "../screens/Home/IdentActaScreen"
import {IdentEstablecimientoScreen} from "../screens/Home/IdentEstablecimientoScreen"
import {IdentificacionTrabajadorScreen} from "../screens/Home/IdentificacionTrabajadorScreen"
import {IdentInspectoresScreen} from "../screens/Home/IdentInspectoresScreen"




const stack = createNativeStackNavigator()

export function AppStack() {
    return (
        <stack.Navigator>
            {/* <stack.Screen 
            name={screen.home.tab} 
            component={HomeScreen} 
            options={{title: " Inicio"}} /> */}
             <stack.Screen 
                name={screen.home.tab} 
                component={HomeScreen} 
                options={{
                headerStyle: {
                    backgroundColor: '#1E5980', // Azul iOS (puedes cambiar el color)
                },
                headerTintColor: '#fff', // Color del texto en la barra
                headerTitle: () => (
                    " "
                ),
                headerTitleAlign: 'center', // Centrar el logo
                
                
                }} 
            />
            {/* ------------------------------- */}
            <stack.Screen 
            name={screen.home.identActaScreen} 
            component={IdentActaScreen} 
            options={{
                headerStyle: {
                    backgroundColor: '#1E5980', // Azul iOS (puedes cambiar el color)
                },
                headerTintColor: '#fff', // Color del texto en la barra
                headerTitle: () => (
                    <Image 
                    source={require('../assets/LogoHome.png')} 
                    style={{ width: 90, height: 60, resizeMode: 'cover' }} 
                    />
                ),
                headerTitleAlign: 'center', // Centrar el logo
                headerBackVisible: false
                }} 
            />
            {/* ------------------------------- */}
            
            <stack.Screen 
            name={screen.home.identInspectorScreen} 
            component={IdentInspectoresScreen}
            options={{
                headerStyle: {
                    backgroundColor: '#1E5980', // Azul iOS (puedes cambiar el color)
                },
                headerTintColor: '#fff', // Color del texto en la barra
                headerTitle: () => (
                    <Image 
                    source={require('../assets/LogoHome.png')} 
                    style={{ width: 90, height: 60, resizeMode: 'cover' }} 
                    />
                ),
                headerTitleAlign: 'center', // Centrar el logo
                headerBackVisible: false
                }} 
            />
            {/* ------------------------------- */}
            <stack.Screen 
            name={screen.home.identEstabScreen} 
            component={IdentEstablecimientoScreen} 
            options={{
                headerStyle: {
                    backgroundColor: '#1E5980', // Azul iOS (puedes cambiar el color)
                },
                headerTintColor: '#fff', // Color del texto en la barra
                headerTitle: () => (
                    <Image 
                    source={require('../assets/LogoHome.png')} 
                    style={{ width: 90, height: 60, resizeMode: 'cover' }} 
                    />
                ),
                headerTitleAlign: 'center', // Centrar el logo
                headerBackVisible: false
                }} 
            />
            {/* ------------------------------- */}
            <stack.Screen 
            name={screen.home.condLabEstabScreen} 
            component={CondLabEstablecimientoScreen} 
            
            options={{
                headerStyle: {
                    backgroundColor: '#1E5980', // Azul iOS (puedes cambiar el color)
                },
                headerTintColor: '#fff', // Color del texto en la barra
                headerTitle: () => (
                    <Image 
                    source={require('../assets/LogoHome.png')} 
                    style={{ width: 90, height: 60, resizeMode: 'cover' }} 
                    />
                ),
                headerTitleAlign: 'center', // Centrar el logo
                headerBackVisible: false
                }} 
            />
            {/* ------------------------------- */}
            <stack.Screen 
            name={screen.home.indentTrabajadorScreen} 
            component={IdentificacionTrabajadorScreen} 
            
            options={{
                headerStyle: {
                    backgroundColor: '#1E5980', // Azul iOS (puedes cambiar el color)
                },
                headerTintColor: '#fff', // Color del texto en la barra
                headerTitle: () => (
                    <Image 
                    source={require('../assets/LogoHome.png')} 
                    style={{ width: 90, height: 60, resizeMode: 'cover' }} 
                    />
                ),
                headerTitleAlign: 'center', // Centrar el logo
                headerBackVisible: false
                }} 
            />
            {/* ------------------------------- */}
            <stack.Screen 
            name={screen.home.condLabScreen} 
            component={CondLaboralTrabScreen} 
            
            options={{
                headerStyle: {
                    backgroundColor: '#1E5980', // Azul iOS (puedes cambiar el color)
                },
                headerTintColor: '#fff', // Color del texto en la barra
                headerTitle: () => (
                    <Image 
                    source={require('../assets/LogoHome.png')} 
                    style={{ width: 90, height: 60, resizeMode: 'cover' }} 
                    />
                ),
                headerTitleAlign: 'center', // Centrar el logo
                headerBackVisible: false
                }}  
            />
            {/* ------------------------------- */}
            <stack.Screen 
            name={screen.home.condHabitScreen} 
            component={CondHabitScreen} 
            
            options={{
                headerStyle: {
                    backgroundColor: '#1E5980', // Azul iOS (puedes cambiar el color)
                },
                headerTintColor: '#fff', // Color del texto en la barra
                headerTitle: () => (
                    <Image 
                    source={require('../assets/LogoHome.png')} 
                    style={{ width: 90, height: 60, resizeMode: 'cover' }} 
                    />
                ),
                headerTitleAlign: 'center', // Centrar el logo
                }} 
            />
            
        </stack.Navigator>

        

        


    )
}