
import { StyleSheet, Text, View, TextInput, StatusBar, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {auth} from "../firebaseConfig";
import { useNavigation } from '@react-navigation/native';


export default function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();
    const handleSignup = async () => {
        await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log("Register with", user.email);
                navigation.navigate('Home');
            })
            .catch((error) => {
                console.log("Error Code == ", error.code);
                console.log("Error Message == ", error.message);
            });
        
        
    };

    return (
        <View style={styles.container}>
            <StatusBar hidden={true} />
            <View style={{ width: '80%'}}>
                <Text style={{textAlign: 'center', fontSize: 30, marginBottom: 20}}>Sign Up</Text>
                <TextInput
                    style={styles.inputBox}
                    placeholder='Enter Your Email'
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <TextInput
                    style={styles.inputBox}
                    placeholder='Enter Your Password'
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    secureTextEntry={true}
                />

                <TouchableOpacity
                    style={styles.addButton}
                    onPress={() => handleSignup()}
                >
                    <Text style={{ color: '#fff' }}>Register</Text>
                </TouchableOpacity>

                <Text style={{marginLeft: '5%'}}>Already have an account?<TouchableOpacity onPress={()=>navigation.navigate('Login')}><Text style={{color: 'blue'}}> Login</Text></TouchableOpacity></Text>
            </View>

        </View>

    );
}

const styles = StyleSheet.create({
    container: {

        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputBox: {

        borderRadius: 50,
        borderWidth: 2,
        marginVertical: 10,
        padding: 10,
    },
    addButton: {
        backgroundColor: 'blue',
        alignItems: 'center',
        padding: 10,
        borderRadius: 50,
        marginBottom: 5,
    }
});









