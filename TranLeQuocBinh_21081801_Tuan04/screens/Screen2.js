import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

export default function Screen2() {
  return (
    <ScrollView >
        <View style={styles.container}>
            <View style={{
                marginTop:130
            }}>
                <Image source={require('../assets/data/Image_19.png')}/>
            </View>

            <Text style={{
                fontWeight:'bold',
                fontSize:30,
                justifyContent: 'center',
                alignItems:'center'
            }}>Nice to see you</Text>
            <View>

                <View>
                    <Text>Create your account</Text>
                </View>

                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 15,
                    borderWidth: 1,
                    borderColor: '#ccc',
                    borderRadius: 5,
                }}>
                    < Image 
                        source={require('../assets/data/codicon_account.png')} // Thay đổi đường dẫn tới icon của bạn
                        style={styles.icon} 
                    />
                    <TextInput 
                        style={styles.input} 
                        placeholder='Enter your user name' 
                    />  
                </View>

            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 15,
                borderWidth: 1,
                borderColor: '#ccc',
                borderRadius: 5,
            }}>
            < Image 
                source={require('../assets/data/Vector.png')} // Thay đổi đường dẫn tới icon của bạn
                style={styles.icon} 
            />
            <TextInput 
                style={styles.input} 
                placeholder='Enter your email address' 
            />  
            </View>


            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 15,
                borderWidth: 1,
                borderColor: '#ccc',
                borderRadius: 5,
                
            }}>
            < Image 
                source={require('../assets/data/lock.png')} // Thay đổi đường dẫn tới icon của bạn
                style={styles.icon} 
            />
            <TextInput 
                style={styles.input} 
                placeholder='Enter your password' 
            />  
            </View>

            
            </View>
            
        </View>
    </ScrollView>

    
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal:10,
    },
    icon: {
        width: 20, // Thay đổi kích thước icon theo nhu cầu
        height: 20,
        marginRight: 10, // Khoảng cách giữa icon và TextInput
    },
    input: {
        flex: 1, // Để TextInput chiếm không gian còn lại
        
        padding: 10,
    }
})