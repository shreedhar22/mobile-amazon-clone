import {View, Text, TextInput,StyleSheet, TouchableOpacity} from "react-native"
import { useState } from "react"
import {Controller, useForm} from "react-hook-form"
import {z, ZodType} from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import validator from "validator"

const schema = z.object({
    name: z.string().min(1, {message:"must have atleast 1 character"}),
    creditCard: z.string().refine(validator.isCreditCard),
    expiration_date: z.string().refine(validator.isCreditCard)
})

const checkout = () => {

    const {control, handleSubmit, formState} = useForm({resolver: zodResolver(schema)})
    const [isPressed, setIsPressed] = useState(false)

    const onSubmit = (data:z.infer<typeof schema>) => {
        alert("Payment is made with cc")
        console.log("Payment is made with cc")
    }

    return (
        <View style={styles.container}>

            <Text style= {{ fontWeight:"bold", color:"#000", padding: 20}}>Ready to Pay?</Text>

            <Controller 
                control={control}
                name = "name"
                render={({field: {onChange, onBlur, value}, fieldState:{error}}) => (
                        <>
                        <TextInput
                            style = {styles.input}
                            value = {value}
                            onBlur={onBlur}
                            placeholder={"username"}
                            onChangeText = {onChange}
                        />
                        {error && <Text style={styles.error}>{error.message}</Text>} 
                        </>
                    )
                } 
            />

            <Controller 
                control={control}
                name = "creditCard"
                render={({field: {onChange, onBlur, value} ,  fieldState:{error} }) => (
                        <>
                        <TextInput
                            style = {styles.input}
                            value = {value}
                            onBlur={onBlur}
                            placeholder={"creditCard"}
                            onChangeText = {onChange}
                        />
                        {error && <Text style={styles.error}>{error.message}</Text>}
                        </>
                    )
                } 
            />

            <Controller 
                control={control}
                name = "expirate_date"
                render={({field: {onChange, onBlur, value} ,  fieldState:{error} }) => (
                    <>
                    <TextInput
                        style = {styles.input}
                        value = {value}
                        onBlur={onBlur}
                        placeholder={"expirate_date"}
                        onChangeText = {onChange}
                    />
                    {error && <Text style={styles.error}>{error.message}</Text>}
                    </>
                )
            } 
            />

            <TouchableOpacity   style={[styles.button, isPressed && styles.buttonPressed]}
                                onPress={handleSubmit(onSubmit)}
                                onPressIn={() => setIsPressed(true)}
                                onPressOut={() => setIsPressed(false)}
            >
                    
                        <Text style={styles.buttonText}>Pay</Text>
                        
            </TouchableOpacity>

        </View>        
    )
}
export default checkout;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        width: '100%',
        backgroundColor: '#FFDEC8',
        justifyContent: 'center',
        alignItems: 'center',
      },
      title: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 8,
      },
      subtitle: {
        fontSize: 18,
        color: '#000',
        marginBottom: 32,
      },
      input: {
        width: '90%',
        padding: 12,
        marginBottom: 16,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderRadius: 8,
        fontSize: 16,
        color: '#000',
      },
      button: {
        backgroundColor: '#6a1b9a',
        padding: 16,
        borderRadius: 8,
        marginBottom: 16,
        width: '90%',
        alignItems: 'center',
      },
      signUpButton: {
        backgroundColor: 'transparent',
        borderColor: '#fff',
        borderWidth: 1,
      },
      signUpButtonText: {
        color: '#fff',
      },
      buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
      },
      error: {
        color: 'red',
        fontSize: 12,
        marginBottom: 16,
        textAlign: 'left',
        width: '90%',
      },
      buttonPressed: {
        backgroundColor: '#3700B3', // Darker shade when pressed
      },
  });