import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
 
import ScoreScreen from '../screens/ScoreScreen'
import FrameOverScreen from '../screens/FrameOverScreen'
 
const MealsNavigator = createStackNavigator({
    Score: ScoreScreen,
    FrameOver: FrameOverScreen,
    
})
 
export default createAppContainer(MealsNavigator)