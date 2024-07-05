import { NavigationContainer, NavigationProp } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import Details from './Details';
import { useState } from 'react';
import CheckLogin from './Services';
import Add from './Add';

function HomeScreen({ navigation }: { navigation: NavigationProp<any> } ) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const onChangeEmail = (Email: string) => {
    setEmail(Email);
  };

  const onChangePassword = (Pass: string) => {
    setPassword(Pass);
  };
  const sleep = (ms: number) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  };

  async function handleCheckLogin() {
    try {
      console.log('Checking login for:', email, password);
      let verificacao:string = await CheckLogin(email, password);
      
      console.log('Login response:'+ verificacao );
      
      if (verificacao === "true") {
        navigation.navigate('Details');
      } else {
        alert("Usuário e senha não conferem!");
      }
    } catch (error) {
      console.error('Error in handleCheckLogin:', error);
      alert("Ocorreu um erro ao tentar fazer login.");
    }
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.titulo}>Login</Text>

      <TextInput
        placeholder="Email"
        placeholderTextColor="#808080"
        style={styles.input}
        value={email}
        onChangeText={onChangeEmail}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        placeholderTextColor="#808080"
        style={styles.input}
        value={password}
        onChangeText={onChangePassword}
      />
      <Text></Text>
      <Text></Text>
      <Button title="Click" onPress={handleCheckLogin} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={HomeScreen} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Add" component={Add} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 2,
    borderColor: "grey",
    minWidth: '60%',
    textAlignVertical: "center",
    paddingLeft: 10,
    borderRadius: 10,
    color: "#000",
  },
  titulo: {
    fontSize: 18,
  },
});

