import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors'

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.userInfo}>
          <Image source={{uri:'https://xsgames.co/randomusers/avatar.php?g=male'}} style={styles.userImage}/>

          <View style={{gap: 3}}>
            <Text style={styles.welcomeTxt}>Welcome!</Text>
            <Text style={styles.userName}>Mateus Maia</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => {}}>
          <Ionicons name={'notifications-outline'} size={24} color={Colors.black} />   
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userImage:{
    width: 50,
    height: 50,
    borderRadius: 30,
  },
  userInfo:{
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  welcomeTxt:{
    fontSize: 12,
    color: Colors.darkGrey,
  },userName:{
    fontSize: 14, 
    fontWeight: '700',
    color: Colors.black,
  }
})