import {View,Text,Button , Touchable, TouchableOpacity, TextInput, StyleSheet} from "react-native"
import {useState} from "react"
import {Controller, useForm} from "react-hook-form"
import {z, ZodType} from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "expo-router"

const schema = z.object({
    username: z.string().min(4, {message:"must have atleast 4 characters"}),
    password: z.string().min(6, {message:"must have atleast 6 characters"})
})

const Auth = () => {
    const {control, handleSubmit, formState: {errors} } = useForm({resolver: zodResolver(schema)})
    const [isPressed, setIsPressed] = useState(false)
    const onSubmit = (data:z.infer<typeof schema>) => {
        console.log(data)
    }

    return (
        <View style = {styles.container}>
                <Text>Auth</Text>
                <Text>Username</Text>
                <Controller 
                    control={control}
                    name = "username"
                    render={({field: {onChange, onBlur, value}}) => (
                            <TextInput
                                style = {styles.input}
                                value = {value}
                                onBlur={onBlur}
                                placeholder={"username"}
                                onChangeText = {onChange}
                            />  
                        )
                    }
                />
                {errors.username && <Text style={styles.error}>{errors.username.message}</Text>}
                <Text>Password</Text>
                <Controller 
                    control={control}
                    name="password"
                    render={({field:{onChange, onBlur, value}})=>(
                        <TextInput
                            style = {styles.input}
                            value = {value}
                            onBlur={onBlur}
                            placeholder = {"password"}
                            onChangeText= {onChange}
                        />
                    )}
                />
                {errors.password && <Text style={styles.error}>{errors.password.message}</Text>}
            <TouchableOpacity       style={[styles.button, isPressed && styles.buttonPressed]}
                        onPress={handleSubmit(onSubmit)}
                        onPressIn={() => setIsPressed(true)}
                        onPressOut={() => setIsPressed(false)}
            >
                    <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
            
        </View>
    )
}

export default Auth;

const styles = StyleSheet.create({
    container: {
      padding: 20,
    },
    input: {
      height: 40,
      borderColor: "gray",
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 8,
    },
    error: {
      color: "red",
    },

    button: {
        backgroundColor: '#6200EE', // Purple color
        paddingVertical: 12, // Vertical padding for height
        paddingHorizontal: 20, // Horizontal padding for width
        borderRadius: 8, // Rounded corners
        alignItems: 'center', // Center the text horizontally
        justifyContent: 'center', // Center the text vertically
        shadowColor: '#000', // Shadow color for depth (iOS only)
        shadowOffset: { width: 0, height: 2 }, // Shadow offset for iOS
        shadowOpacity: 0.2, // Shadow opacity for iOS
        shadowRadius: 4, // Shadow radius for iOS
        elevation: 5, // Shadow effect for Android
      },
      buttonText: {
        color: '#FFFFFF', // White text
        fontSize: 16, // Font size
        fontWeight: 'bold', // Bold text
        textTransform: 'uppercase', // Text in uppercase
      },
      buttonPressed: {
        backgroundColor: '#3700B3', // Darker shade when pressed
      },
  });