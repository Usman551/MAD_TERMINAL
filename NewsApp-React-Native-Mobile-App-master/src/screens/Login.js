import { StyleSheet, Text, View, TextInput, StatusBar, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import {onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../firebaseConfig';

export default function Login({navigation}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    

    useEffect(()=>{
        onAuthStateChanged(auth, (user)=>{
            if(user){
                navigation.replace('Home');
            }
        })

    }, []);

    const handleLogin = async () => {
        if(email === "" || password === ""){
            alert("Please fill all the fields");
            return;
        }
        await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log("Logged in with", user.email);
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
            <View style={{ width: '80%' }}>
                <Text style={{textAlign: 'center', fontSize: 30, marginBottom: 20}}>Login</Text>
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
                    onPress={() => handleLogin()}
                >
                    <Text style={{ color: '#fff' }}>Login</Text>
                </TouchableOpacity>

                <Text style={{marginLeft: '5%'}}>Don't have an account?<TouchableOpacity  onPress={()=>navigation.navigate('Signup')}><Text style={{color: 'blue'}}> Sign up here</Text></TouchableOpacity></Text>
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