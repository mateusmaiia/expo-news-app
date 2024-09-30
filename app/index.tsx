import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";
import Animated from "react-native-reanimated";

const Page = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ImageBackground source={require("@/assets/images/getting-started.jpg")} style={{flex: 1}} resizeMode="cover" >
        <View style={styles.wrapper}>
          <Animated.Text style={styles.title}>Stay Updated!</Animated.Text>
          <Animated.Text style={styles.description}>Get breaking news and personalized updates directly to your feed.</Animated.Text>
          <Animated.View>
            <TouchableOpacity style={styles.btn} onPress={() => router.replace("/(tabs)")}>
              <Text style={styles.btnText}>Get Started</Text>
            </TouchableOpacity>  
          </Animated.View>
        </View>
      </ImageBackground >  
    
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper:{
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 50,
    paddingHorizontal: 30,
    gap: 10,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  title:{
    color: Colors.white,
    fontSize: 24,
    fontWeight: '600',
    textAlign: "center",
    lineHeight: 36,
    letterSpacing: 1.5,
  },
  description:{
    color: Colors.white,
    fontSize:16,
    fontWeight: '500',
    letterSpacing: 1.2,
    lineHeight: 22,
    textAlign: "center",
  },
  btn:{
    backgroundColor: Colors.tint,
    paddingVertical: 15,
    marginVertical: 20,
    alignItems: "center",
    borderRadius: 10,
  },
  btnText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '700',
  }
});
