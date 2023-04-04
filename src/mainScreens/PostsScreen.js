import { createStackNavigator } from "@react-navigation/stack";

import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import DefaultScreen from "../auth/Screens/nestedScreens/DefaultScreen";
import CommentsScreen from "../auth/Screens/nestedScreens/CommentsScreen";
import MapScreen from "../auth/Screens/nestedScreens/MapScreen";

import { Feather } from "@expo/vector-icons";

const NestedScreen = createStackNavigator();

const PostsScreen = () => {
  const navigation = useNavigation();
  return (
    <NestedScreen.Navigator>
      <NestedScreen.Screen
        options={{
          title: "Публикации",
          headerRight: () => (
            <TouchableOpacity>
              {/* onPress={signOut} */}
              <Feather
                name="log-out"
                size={24}
                color="#BDBDBD"
                style={{ marginRight: 10 }}
              />
            </TouchableOpacity>
          ),
        }}
        name="DefaultScreen"
        component={DefaultScreen}
      />
      <NestedScreen.Screen
        name="Comments"
        component={CommentsScreen}
        options={{
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Feather
                name="arrow-left"
                size={24}
                color="#212121"
                style={{ marginLeft: 16 }}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <NestedScreen.Screen
        name="Map"
        component={MapScreen}
        options={{
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Feather
                name="arrow-left"
                size={24}
                color="#212121"
                style={{ marginLeft: 16 }}
              />
            </TouchableOpacity>
          ),
        }}
      />
    </NestedScreen.Navigator>
  );
};

export default PostsScreen;
