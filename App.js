import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Dimensions, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { height, width } = Dimensions.get("screen");
console.log(height);
console.log(width);

function HomeScreen() {
  return (
    <View style={styles1.container}>
      <View style={styles1.rect}>
        <View style={styles1.rect2}></View>
        <Text style={styles1.discoverYour}>Discover your</Text>
        <Text style={styles1.dreamJobHere}>Dream job Here</Text>
        <Text style={styles1.exploreAll}>
          Explore all the most exciting job roles{"\n"}based on your interest
          And study major
        </Text>
      </View>
    </View>
  );
}

const styles1 = StyleSheet.create({
  container: {
    flex: 1,
  },
  rect: {
    width: width,
    height: height,
    backgroundColor: "rgba(244,243,253,1)",
    marginTop: 23,
  },
  rect2: {
    width: width,
    height: 251,
    backgroundColor: "rgba(214,146,241,1)",
    borderRadius: 27,
    marginTop: 8,
    marginLeft: 6,
  },
  discoverYour: {
    fontFamily: "roboto-700",
    color: "rgba(56,52,74,1)",
    fontSize: 32,
    width: 252,
    height: 38,
    textAlign: "center",
    marginTop: 99,
    marginLeft: 54,
  },
  dreamJobHere: {
    fontFamily: "roboto-700",
    color: "rgba(56,52,74,1)",
    fontSize: 32,
    width: 252,
    height: 38,
    textAlign: "center",
    marginLeft: 54,
  },
  exploreAll: {
    // fontFamily: "roboto-regular",
    color: "rgba(147,142,169,1)",
    height: 47,
    width: 252,
    textAlign: "center",
    marginTop: 25,
    marginLeft: 54,
  },
});

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F0F5",
    alignItems: "center",
    justifyContent: "center",
  },
  textColor: {
    color: "green",
  },
});
