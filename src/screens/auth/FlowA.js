import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import TopBar from "./../../component/TopBar";

// This is REGISTER SCREEN
const FlowA = ({ ...props }) => {
  const [number, setNumber] = useState("");

  return (
    <LinearGradient colors={["#DD488C", "#000"]} style={styles.linearGradient}>
      <SafeAreaView style={styles.main}>
        <TopBar />
        <View style={styles.Profile}>
          <Text style={styles.h1}>S’INSCRIRE </Text>
        </View>
        <View style={styles.Form}>
          <TextInput
            style={styles.input}
            onChangeText={setNumber}
            value={number}
            placeholder="pseudo "
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            onChangeText={setNumber}
            value={number}
            placeholder="date de naissance"
            keyboardType="numeric"
          />

          <TouchableOpacity onPress={() => props.navigation.replace("Home")}>
            <View style={styles.btnopacity}>
              <Text style={styles.f}>VALIDER</Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default FlowA;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    display: "flex",
  },
  h1: {
    fontFamily: "FredokaOne-Regular",

    color: "#fff",
    marginBottom: 15,
    fontSize: 30,
  },
  h2: {
    fontFamily: "FredokaOne-Regular",
    color: "#fff",
    fontSize: 50,
    opacity: 0.5,
  },
  Profile: { alignItems: "center", marginVertical: 30 },

  linearGradient: { flex: 1 },
  Form: {
    alignItems: "center",
  },
  input: {
    width: "70%",
    borderRadius: 20,
    marginBottom: 19,
    height: 40,
    justifyContent: "space-between",
    paddingHorizontal: 60,
    backgroundColor: "#fff",
  },
  btn: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginVertical: 12,
  },
  btnopacity: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginVertical: 12,
    opacity: 0.5,
  },
  f: {
    fontFamily: "FredokaOne-Regular",
  },
});
