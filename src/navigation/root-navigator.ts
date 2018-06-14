import { StackNavigator } from "react-navigation"
import { CSAppNavigator } from "./csapp-navigator"

export const RootNavigator = StackNavigator(
  {
    exampleStack: { screen: CSAppNavigator },
  },
  {
    headerMode: "none",
    navigationOptions: { gesturesEnabled: false },
  },
)
