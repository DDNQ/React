import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'


const Profile = () => {
  return (
    <View style={styles.container}>
          <Text>Profile</Text>
          
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        
        },
    loginBtn: {
        width: '65%',
        paddingVertical: 20,
        borderRadius: 15,
        backgroundColor: '#6C63FF', // fallback gradient color
        // marginBottom: 16,
       
        alignItems: 'center',
        
      },
      loginText: {
        color: '#fff',
          fontWeight: '600',
        fontSize: 20,
      },
})