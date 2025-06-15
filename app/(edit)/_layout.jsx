import { StyleSheet, Text, View } from 'react-native'
import { Stack } from 'expo-router'
import React from 'react'

const _layout = () => {
    return (
        <Stack screenOptions={{
          
            headerStyle: { backgroundColor: '#000' },
            headerTintColor: '#fff',
            headerShown: false,
        }}>
            
            </Stack>
    
  )
}

export default _layout

const styles = StyleSheet.create({})