import React from "react"
import { TabNavigator, TabBarBottom } from "react-navigation"
import { HomeScreen } from "../views/csapp/home-screen"
import { ToDoListScreen } from "../views/csapp/to-do-list"
import Ionicons from "react-native-vector-icons/Ionicons"
import { color } from "../theme/color"

export const CSAppNavigator = TabNavigator(
  {
    Home: {
      screen: HomeScreen,
      path: "/",
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? "ios-home" : "ios-home-outline"}
            size={26}
            style={{ color: tintColor }}
          />
        ),
      },
    },
    Settings: {
      screen: ToDoListScreen,
      path: "/settings",
      navigationOptions: {
        tabBarLabel: "Settings",
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? "ios-settings" : "ios-settings-outline"}
            size={26}
            style={{ color: tintColor }}
          />
        ),
      },
    },
    Tab3: { screen: HomeScreen },
    Tab4: { screen: ToDoListScreen },
  },
  {
    tabBarOptions: {
      activeTintColor: color.palette.white,
      inactiveTintColor: color.palette.white,
      labelStyle: {
        color: color.palette.white,
      },
      style: {
        backgroundColor: "#f4511e",
      },
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: "bottom",
    animationEnabled: false,
    swipeEnabled: false,
  },
)
