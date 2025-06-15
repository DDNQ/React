import { useRouter } from 'expo-router';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import {  MaterialIcons, AntDesign } from '@expo/vector-icons';
import Swiper from 'react-native-swiper';
import img1 from '../../assets/images/img1.jpg';
import img2 from '../../assets/images/img2.jpg';
import img3 from '../../assets/images/img3.jpg';
// import { useSafeAreaInsets } from 'react-native-safe-area-context';



const images = [img1, img2, img3];



const Edit = () => {
  const router=useRouter()
  // const insets = useSafeAreaInsets()
    return (
      <View style={styles.container}>
        
        {/* Header Section */}
        <View style={styles.header}>
          <Swiper autoplay loop showsPagination={true} style={styles.swiper}>
            {images.map((image, index) => (
              <Image key={index} source={image} style={styles.bannerImage} />
            ))}
          </Swiper>

          

          <View style={styles.proBadge}>
            <Text style={styles.proText}>PRO</Text>
          </View>

          <View style={styles.headerOverlay}>
            <Text style={styles.headerText}>Professional Editor</Text>
          </View>
          </View>
          
          <View style={styles.projectsRow}>
            <Text style={styles.projectsTitle}>Projects</Text>
            <MaterialIcons name= "sort" size={24} color="black" />
          </View>
          

          <View style={{ flex: 1 }}>

        </View>
        
        

          
        <TouchableOpacity
          style={styles.newProjectWrapper}
          activeOpacity={0.8}
          onPress={()=> router.push('/(edit)/Import_screen')}
        >
            <LinearGradient
              colors={['#6C63FF', '#D65DB1']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.newProjectButton}
            >
              <AntDesign name="plussquare" size={24} color="white"/>
            <Text style={styles.newProjectText}> New Project</Text>
          </LinearGradient>
        </TouchableOpacity>
        
        
      
    </View>

    )
}

export default Edit;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    

    
  },
  header: {
    height: 400,
    position: 'relative',
  },
  
  headerOverlay: {
    position: 'absolute',
    bottom: 15,
    left: 16,
  },
  headerText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  
  proBadge: {
    position: 'absolute',
    top: 20,
    right: 14,
    backgroundColor: '#00C4FF',
    borderRadius: 10,
    paddingVertical: 4,
    paddingHorizontal: 16,
  },
  proText: {
    color: '#fff',
    fontWeight: 'bold',
    letterSpacing: 0.8,
    fontSize: 13,
  },
  projectsRow: {
    marginTop: 24,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  projectsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  newProjectWrapper: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  newProjectButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    paddingVertical: 14,
  },
  newProjectText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  swiper: {
  height: '100%',
  borderBottomLeftRadius: 24,
  borderBottomRightRadius: 24,
  
},
bannerImage: {
  width: '100%',
  height: '100%',
  resizeMode: 'cover',
  borderBottomLeftRadius: 3,
  borderBottomRightRadius: 3,
},

});
