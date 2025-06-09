import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'


const RootLayout= () => {
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

export default RootLayout

const styles = StyleSheet.create({})