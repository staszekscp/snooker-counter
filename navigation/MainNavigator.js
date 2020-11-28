import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
 
import ScoreScreen from '../screens/ScoreScreen'
import StartScreen from '../screens/StartScreen'
import HelpScreen from '../screens/HelpScreen'
 
const MealsNavigator = createStackNavigator({
    Start: StartScreen,
    Score: ScoreScreen,
    Help: HelpScreen
})
 
export default createAppContainer(MealsNavigator)