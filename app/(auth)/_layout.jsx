import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'


const AuthLayout= () => {
  return (
      <>
          <StatusBar value="auto"/>
      <Stack screenOptions={{
          
          headerStyle: { backgroundColor: '#000' },
          headerTintColor: '#fff',
          headerShown: false,
      }}>
          
          </Stack>
      </>
  )
}

export default AuthLayout

const styles = StyleSheet.create({})