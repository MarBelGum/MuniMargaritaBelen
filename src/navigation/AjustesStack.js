import { Image } from 'react-native';
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import { screen } from "../utils"
import {Ajustes} from "../screens/Ajustes/Ajustes"




const stack = createNativeStackNavigator()

export function AjustesStack() {
    return (
        <stack.Navigator>

             <stack.Screen 
                name={screen.ajustes.tab} 
                component={Ajustes} 
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
           
            {/* ------------------------------- */}
            
            
        </stack.Navigator>

        

        


    )
}