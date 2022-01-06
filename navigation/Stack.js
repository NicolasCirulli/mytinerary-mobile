// Importamos createStackNavigator
import { createStackNavigator } from '@react-navigation/stack';
import Cities from '../Screens/Cities'
import City from '../Screens/City'


// Instanciamos createStackNavigator para obtener todos sus Metodos y Componentes
const Stack = createStackNavigator();


// StackNavigator es el navigator que vamos a exportar y va a ser el encargado 
// de mostrar las distintas vistas mediante eventos de navegación y las distintas pantallas
// declaradas en el mismo, tambien es totalmente modificable su estilo y su forma de interaccion.-

const StackNavigator = ()=>{

    return (
        <Stack.Navigator>

            <Stack.Screen name="Cities" component={Cities} />
            <Stack.Screen name="City" component={City} />
       
        </Stack.Navigator>
    )
}

export default StackNavigator;