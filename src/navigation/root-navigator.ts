import { StackNavigator } from "react-navigation"
import { CSAppNavigator } from "./csapp-navigator"
import { ToDoListScreen } from "../views/csapp/to-do-list"

export const RootNavigator = StackNavigator(
  {
    Main: { screen: CSAppNavigator },
    Container1: { screen: ToDoListScreen },
    Container2: { screen: ToDoListScreen },
  },
  {
    initialRouteName: "Main",
    /* The header config from HomeScreen is now here */
    navigationOptions: {
      gesturesEnabled: false,
      headerStyle: {
        backgroundColor: "#f4511e",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    },
  },
)
