import * as React from "react"
import { observer, inject } from "mobx-react"
import { FlatList, View, ViewStyle } from "react-native"
import { Text } from "../../shared/text"
import { Icon } from "../../shared/icon"
import { Button } from "../../shared/button"
import { NavigationScreenProps } from "react-navigation"
import { Screen } from "../../shared/screen"
import { ToDoStore } from "../../../models/to-do-list-store/to-do-list-store"
import { ToDoCell } from "../to-do-cell"
import { spacing } from "../../../theme"
import { Wallpaper } from "../../shared/wallpaper"
import { ToDo } from "../../../models/to-do/to-do"

export interface ToDoListScreenProps extends NavigationScreenProps<{}> {
  toDoStore: ToDoStore
}

const HEADER: ViewStyle = {
  paddingVertical: 50,
  paddingHorizontal: spacing[4],
}

const HEADERBUTTON: ViewStyle = {
  backgroundColor: "#f4511e",
}

@inject("toDoStore")
@observer
export class ToDoListScreen extends React.Component<ToDoListScreenProps, {}> {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || { titleIcon: "bullet" }

    return {
      headerTitle: <Icon icon={params.titleIcon} />,
      headerRight: (
        <Button style={HEADERBUTTON} onPress={() => navigation.goBack()}>
          <Icon icon="back" />
        </Button>
      ),
    }
  }

  render() {
    return (
      <Screen preset="fixedStack">
        <Wallpaper />
        <View style={HEADER}>
          <Text preset="header" tx="toDoList.header" />
        </View>
        <FlatList
          data={this.props.toDoStore.todos.slice()}
          renderItem={({ item }: { item: ToDo }) => (
            <ToDoCell
              preset="primary"
              todo={item}
              onToggle={item.toggleIsComplete}
            />
          )}
          onRefresh={this.props.toDoStore.loadTodos}
          refreshing={this.props.toDoStore.isLoading}
          keyExtractor={item => item.id.toString()}
          extraData={{ extra: this.props.toDoStore.todos }}
        />
      </Screen>
    )
  }
}
