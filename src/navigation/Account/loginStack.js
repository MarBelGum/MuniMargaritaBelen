
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import { screen } from "../../utils"
import { LoginScreen } from "../../screens/Login/LoginScreen"




const stack = createNativeStackNavigator()

export function loginStack() {
    return (
        <stack.Navigator>
            <stack.Screen
                name={screen.login.tab}
                component={LoginScreen}
                options={{
                    headerShown: false, // Esto debería ocultar el header
                    tabBarStyle: { display: 'none' }, // Asegúrate de ocultar el tab bar
                    tabBarVisible: false, // Si estás usando TabNavigator, esto también debería asegurarse de que se oculte el tab bar
                    tabBarOptions: { showLabel: false }, // Si estás usando TabNavigator, esto debería asegurarse de que no se muestre la etiqueta
                    

                }}
            />
        </stack.Navigator>
    )
}


