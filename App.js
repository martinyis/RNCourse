import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [word, setWord] = useState("niggas");
  return (
    <View style={styles.appContainer}>
      <View>
        <TextInput placeholder="Your next course goal" />
        <Button title="Add goal" />
      </View>
      <View>
        <Text>List of goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
  },
});
