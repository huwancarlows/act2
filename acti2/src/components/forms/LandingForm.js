import { View, StyleSheet, Image } from "react-native";
import React from "react";
import { Button, Text, TextInput } from "react-native-paper";

export default function LandingForm({ navigation }) {

    return (
        <View styles={{ flex: 1 }}>
        <Image
        style={styles.logo}
        source={require('../forms/logo.png')}
        mode="contained"
      />
        <Text style={styles.title}>Welcome to Our App</Text>
        <Text style={styles.description}>
        Explore amazing features and connect with people around the world.
      </Text>
        <Button
        onPress={() => navigation.navigate("Login")}
        icon="login" mode="contained" style={{ marginTop: 10 }}>
        Login
        </Button>
        <Button
        onPress={() => navigation.navigate("Register")}
        icon="account-plus" mode="contained" style={{ marginTop: 10 }}>
        Register
        </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 30,
      },
      logo: {
        width: 200,
        height: 100,
        marginBottom: 20,
    },
});