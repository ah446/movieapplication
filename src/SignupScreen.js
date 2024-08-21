import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Picker } from 'react-native';

const SignupScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [role, setRole] = useState('user');
    const [adminRole, setAdminRole] = useState('');

    const handleSignup = () => {
        // Add your signup logic here
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign Up</Text>

            <TextInput
                style={styles.input}
                placeholder="Email"
                onChangeText={text => setEmail(text)}
                value={email}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                onChangeText={text => setPassword(text)}
                value={password}
                secureTextEntry
            />
            <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                onChangeText={text => setConfirmPassword(text)}
                value={confirmPassword}
                secureTextEntry
            />

            <View style={styles.roleContainer}>
                <Text style={styles.roleText}>I am a: </Text>
                <Picker
                    selectedValue={role}
                    style={styles.picker}
                    onValueChange={(itemValue, itemIndex) => setRole(itemValue)}
                >
                    <Picker.Item label="User" value="user" />
                    <Picker.Item label="Admin" value="admin" />
                </Picker>
            </View>

            {role === 'admin' && (
                <View style={styles.roleContainer}>
                    <Text style={styles.roleText}>Admin Role: </Text>
                    <Picker
                        selectedValue={adminRole}
                        style={styles.picker}
                        onValueChange={(itemValue, itemIndex) => setAdminRole(itemValue)}
                    >
                        <Picker.Item label="President" value="president" />
                        <Picker.Item label="Vice President" value="vice_president" />
                        <Picker.Item label="Member" value="member" />
                    </Picker>
                </View>
            )}

            <TouchableOpacity onPress={handleSignup} style={styles.button}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        width: '100%',
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 15,
    },
    button: {
        backgroundColor: '#28a745',
        padding: 15,
        borderRadius: 8,
        width: '100%',
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    roleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    roleText: {
        fontSize: 16,
        marginRight: 10,
    },
    picker: {
        height: 50,
        flex: 1,
    },
});

export default SignupScreen;
