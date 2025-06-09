import { Link } from 'expo-router';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

const  loginScreen= ()=> {
  return (
      <View style={styles.container}>
          <View style= {styles.card}>
              <Text style={styles.title}>Login to your account</Text>

              <TextInput style={styles.input}
                  placeholder="Email"
                  placeholderTextColor="#999"
              />
                <TextInput style= {styles.input}
                    placeholder="Password"
                    placeholderTextColor="#999"
                  secureTextEntry={true}
              />
              <TouchableOpacity>
                  <Link href={'/forgot'} style={styles.forgot}><Text >
                      Forgot Password?
                  </Text></Link>
              </TouchableOpacity>

                <TouchableOpacity style={styles.loginBtn}>  
                    <Text style={styles.loginText}>
                        Login
                  </Text>
              </TouchableOpacity>

              <Text style={styles.signupText}>
                  Don't have an account?<Link href={'/register'}> <Text style={styles.link}>Create Now</Text></Link>
              </Text>

              <View style={styles.socials}>
                  <Image style={styles.icon}
                      source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg' }}
                  />
                  <Image style={styles.icon}
                      source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg' }}
                  />
                  <Image style={styles.icon}
                      source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png' }}
                          />
              </View>
              </View>
    </View>
  )
}

export default loginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center'
        
    },
    card: {
        backgroundColor: '#fff',
        padding: 30,
        borderRadius: 16,
        height: '100%',
        width: '100%',
       
        alignItems: 'center',
        justifyContent: 'center',   
        
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 12,
        marginBottom: 12,
        fontSize: 14,
    },
    forgot: {
        color: 'red',
        alignSelf: 'flex-end',
        marginBottom: 20,
      
    },
    loginBtn: {
    width: '100%',
    paddingVertical: 14,
    borderRadius: 999,
    backgroundColor: '#6C63FF', // fallback gradient color
    marginBottom: 16,
    alignItems: 'center',
  },
  loginText: {
    color: '#fff',
    fontWeight: '600',
  },
  signupText: {
    fontSize: 14,
    marginBottom: 10,
  },
  link: {
    fontWeight: '600',
      color: '#000',
  },
  socials: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginTop: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },


})