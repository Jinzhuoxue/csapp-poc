import { StackNavigator } from "react-navigation"
import { HomeScreen } from "../views/csapp/home-screen"
import { ToDoListScreen } from "../views/csapp/to-do-list"

export const CSAppNavigator = StackNavigator(
  {
    index: { screen: HomeScreen },
    toDoList: { screen: ToDoListScreen },
  },
  {
    headerMode: "none",
  },
)
