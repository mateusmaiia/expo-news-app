import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";
import Animated, { FadeInDown, FadeInRight } from "react-native-reanimated";
import { StatusBar } from "expo-status-bar";
import axios from "axios";
import { NewsDataType } from "@/types";

const Page = () => {
  const router = useRouter();
  const [breakingNews, setBreakingNews] = useState<NewsDataType[]>([])
  const getBreakingNews = async () => {
    try {
      const url = `https://newsdata.io/api/1/news?apikey=${process.env.EXPO_PUBLIC_API_KEY}&country=br,us&language=en,pt&removeduplicate=1&size=5`
      const response = await axios.get(url)

      if(response && response.data) {
        setBreakingNews(response.data.results)
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <View style={styles.container}>
      <ImageBackground source={require("@/assets/images/getting-started.jpg")} style={{flex: 1}} resizeMode="cover" >
        <StatusBar style="light"/>
        <View style={styles.wrapper}>
          <Animated.Text style={styles.title} entering={FadeInRight.delay(300).duration(500)}>Stay Updated!</Animated.Text>
          <Animated.Text style={styles.description} entering={FadeInRight.delay(700).duration(500)}>Get breaking news and personalized updates directly to your feed.</Animated.Text>
          <Animated.View entering={FadeInDown.delay(1200).duration(500)}>
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
