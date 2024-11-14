import {View,Text,Button , Touchable, TouchableOpacity, TextInput, StyleSheet} from "react-native"
import {useState} from "react"
import {Controller, useForm} from "react-hook-form"
import {z, ZodType} from "zod"
import { zodResolver } from "@hookform/resolvers/zod";


const schema = z.object({
    username: z.string().min(4, {message:"must have atleast 4 characters"}),
    password: z.string().min(6, {message:"must have atleast 6 characters"})
})

const Auth = () => {
    const {control, handleSubmit, formState: {errors} } = useForm({resolver: zodResolver(schema)})
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
            <TouchableOpacity>
                <Button title = "sign-up" onPress={handleSubmit(onSubmit)} />
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
  });