import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
 
import ScoreScreen from '../screens/ScoreScreen'
import StartScreen from '../screens/StartScreen'
 
const MealsNavigator = createStackNavigator({
    Start: StartScreen,
    Score: ScoreScreen,
    
})
 
export default createAppContainer(MealsNavigator)