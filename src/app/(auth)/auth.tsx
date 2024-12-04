import {View,Text,Button,ImageBackground, Touchable, TouchableOpacity, TextInput, StyleSheet} from "react-native"
import {useState} from "react"
import {Controller, useForm} from "react-hook-form"
import {z, ZodType} from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "expo-router"
import { supabase } from "../../lib/supabase";

const schema = z.object({
    email: z.string().email(),
    password: z.string().min(6, {message:"must have atleast 6 characters"})
})


const Auth = () => {
    const router = useRouter()
    const {control, handleSubmit, formState} = useForm({resolver: zodResolver(schema)})
    const [isPressed, setIsPressed] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async  function signUpWithEmail(email:string,password:string) {
        const session = await supabase.auth.getSession()

        if (session){
            const {data: {session}, error} = await supabase.auth.signUp({
                email: email, 
                password: password
            }) 
            if (error) {
                console.log(error)
                alert(error)
            }
            router.push("/shop")
        }
        
    }

    const onSubmit = (data:z.infer<typeof schema>) => {
        console.log(data)
        signUpWithEmail(data.email, data.password)
    }

    const signIn = () => {

    }

    

    return (
        // <ImageBackground
        // source={{
        //     uri: 'https://images.pexels.com/photos/682933/pexels-photo-682933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        // }}
        // style={styles.backgroundImage}
        // >
            // <View style={styles.overlay} />
            <View style = {styles.container}>
                    <Text style={styles.title}>Welcome</Text>
                    <Text style={styles.subtitle}>Please Authenticate to continue</Text>

                    
                    <Controller 
                        control={control}
                        name = "email"
                        render={({field: {onChange,onBlur, value}, fieldState: { error },}) => ( 
                          <>
                                <TextInput
                                    style = {styles.input}
                                    value = {value}
                                    onBlur={onBlur}
                                    placeholder={"email"}
                                    placeholderTextColor='#aaa'
                                    onChangeText = {onChange}
                                    editable={!formState.isSubmitting}
                                /> 
                                {error && <Text style={styles.error}>{error.message}</Text>} 
                          </>
                             )
                        }
                    /> 
                    
                    
                    <Controller 
                        control={control}
                        name="password"
                        render={({field:{onChange, onBlur, value}, fieldState: { error },})=> (
                            <>
                            <TextInput
                                style = {styles.input}
                                value = {value}
                                onBlur={onBlur}
                                placeholder = {"password"}
                                placeholderTextColor='#aaa'
                                onChangeText = {onChange}
                                editable={!formState.isSubmitting}
                            />
                            {error && <Text style={styles.error}>{error.message}</Text>}
                            </>
                         )}
                    />
                    
            
                    <TouchableOpacity       style={[styles.button, isPressed && styles.buttonPressed]}
                                onPress={handleSubmit(onSubmit)}
                                onPressIn={() => setIsPressed(true)}
                                onPressOut={() => setIsPressed(false)}
                    >
                    
                        <Text style={styles.buttonText}>Sign Up</Text>
                        
                    </TouchableOpacity>
            

            </View>
        // </ImageBackground>
    )
}

export default Auth;

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
      },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.7)',
    },
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