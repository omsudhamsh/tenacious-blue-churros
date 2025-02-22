import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Home Screen Component
function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Page</Text>
      <Text style={styles.text}>Welcome to the Home Screen!</Text>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('SignLinkAbout')}
      >
        <Text style={styles.buttonText}>Go to SignLink</Text>
      </TouchableOpacity>
    </View>
  );
}

// SignLink About Screen Component
function SignLinkAboutScreen({ navigation }) {
  return (
    <View style={styles.signLinkContainer}>
      <View style={styles.header}>
        <Text style={styles.headerTime}>19:02</Text>
        <View style={styles.statusIcons}>
          <Text style={styles.statusIcon}>🔇</Text>
          <Text style={styles.statusIcon}>📶</Text>
          <Text style={styles.statusIcon}>🔋</Text>
        </View>
      </View>

      <View style={styles.content}>
        <TouchableOpacity style={styles.silentButton}>
          <Text style={styles.silentButtonText}>Silent</Text>
        </TouchableOpacity>

        <Text style={styles.screenTitle}>About us</Text>

        <View style={styles.infoBox}>
          <Text style={styles.infoText}>
            Our app turns words into Indian Sign Language (ISL) images, making communication easy for everyone.
          </Text>
          <Text style={styles.slogan}>Bridging Words to Gestures 🖐</Text>
        </View>

        <TouchableOpacity 
          style={styles.beginButton}
          onPress={() => navigation.navigate('SignLinkMain')}
        >
          <Text style={styles.beginButtonText}>Begin {'>'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// New SignLink Main Screen Component (The core functionality)
function SignLinkMainScreen() {
  const [inputText, setInputText] = React.useState('');

  return (
    <View style={styles.signLinkContainer}>
      <View style={styles.header}>
        <Text style={styles.headerTime}>19:02</Text>
        <View style={styles.statusIcons}>
          <Text style={styles.statusIcon}>🔇</Text>
          <Text style={styles.statusIcon}>📶</Text>
          <Text style={styles.statusIcon}>🔋</Text>
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.screenTitle}>Sign Language Converter</Text>

        <View style={styles.converterBox}>
          <TextInput
            style={styles.input}
            placeholder="Type your message here..."
            value={inputText}
            onChangeText={setInputText}
            multiline
          />
          
          <View style={styles.signOutput}>
            <Text style={styles.outputText}>
              {inputText ? 
                'Sign language images would appear here for: "' + inputText + '"' : 
                'Sign language images will appear here'}
            </Text>
          </View>

          <TouchableOpacity style={styles.convertButton}>
            <Text style={styles.convertButtonText}>Convert to Signs</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

// Create Stack Navigator
const Stack = createStackNavigator();

// Main App Component
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SignLinkAbout" component={SignLinkAboutScreen} />
        <Stack.Screen name="SignLinkMain" component={SignLinkMainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  signLinkContainer: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#000',
  },
  headerTime: {
    color: '#fff',
    fontSize: 16,
  },
  statusIcons: {
    flexDirection: 'row',
  },
  statusIcon: {
    color: '#fff',
    marginLeft: 5,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0f7fa',
  },
  silentButton: {
    backgroundColor: '#ff8a65',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  silentButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  infoBox: {
    backgroundColor: '#b2ebf2',
    padding: 20,
    borderRadius: 10,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  converterBox: {
    backgroundColor: '#b2ebf2',
    padding: 20,
    borderRadius: 10,
    marginHorizontal: 20,
    width: '90%',
    alignItems: 'center',
  },
  infoText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  slogan: {
    fontSize: 18,
    fontStyle: 'italic',
    color: '#666',
    textAlign: 'center',
  },
  input: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 5,
    marginBottom: 20,
    fontSize: 16,
    minHeight: 100,
  },
  signOutput: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 5,
    minHeight: 150,
    marginBottom: 20,
  },
  outputText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  convertButton: {
    backgroundColor: '#ff8a65',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  convertButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  beginButton: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#666',
  },
  beginButtonText: {
    fontSize: 16,
    color: '#666',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  text: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#e91e63',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});