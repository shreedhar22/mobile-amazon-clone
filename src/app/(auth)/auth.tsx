import {View,Text,Button,ImageBackground, Touchable, TouchableOpacity, TextInput, StyleSheet} from "react-native"
import {useContext, useState} from "react"
import {Controller, useForm} from "react-hook-form"
import {z, ZodType} from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "expo-router"
import { supabase } from "../../lib/supabase";
import { useAuthContext } from "../../providers/authProvider";
import {Link} from "expo-router"

const schema = z.object({
    email: z.string().email(),
    password: z.string().min(6, {message:"must have atleast 6 characters"})
})

const Auth = () => {
    const router = useRouter()
    const {control, handleSubmit, formState} = useForm({resolver: zodResolver(schema)})
    const [isPressed, setIsPressed] = useState(false)
    const {user,setUser} = useAuthContext()
    
    async  function signUpWithEmail(email:string,password:string) {
        const session = await supabase.auth.getSession()

        if (session){
            const {data: {session}, error} = await supabase.auth.signUp({
                email: email, 
                password: password
            }) 
            if (error) {
                console.log("We weren't able to sign you up cause " + error)
                alert(error)
            }
            router.push("/shop")
        }       
    }
    const onSignUp = (data:z.infer<typeof schema>) => {
        console.log(data)
        signUpWithEmail(data.email, data.password)
    }

    async function signInWithEmail(_email:string,_password:string) {
 
          const session = await supabase.auth.getSession()
          
          if (session) {
              const {data, error} =  await supabase.auth.signInWithPassword({
                  email: _email,
                  password: _password
              })
              if (error) {
                  console.log ("We weren't able to sign you due to: " + error)
                  alert(error)
              }
              else{
                  console.log ("user was signed in: " + data.user.email)
                  if (data != undefined){
                    setUser({email: data.user?.email, isLoggedIn:true, sessionToken:data.session?.access_token})
                  }
                  router.push("/shop")
              } 
          }
        
    }
    const onSignIn = (data:z.infer<typeof schema>) => {
      console.log(data)
      signInWithEmail(data.email, data.password)
    }

    const loggedIn = user?.isLoggedIn
    return (
        // <ImageBackground
        // source={{
        //     uri: 'https://images.pexels.com/photos/682933/pexels-photo-682933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        // }}
        // style={styles.backgroundImage}
        // >
            // <View style={styles.overlay} />
            <View style = {styles.container}>
              {loggedIn ? (
                <View>
                  <Text style={styles.title}>Want to still shop?</Text>
                  <Text style={styles.subtitle}>Hit the shop button to resume</Text>

                  <TouchableOpacity >
                        <Link href="/shop" style={[styles.linkContainer, isPressed && styles.buttonPressed]} onPressIn={() => setIsPressed(true)}
                                onPressOut={() => setIsPressed(false)}>
                          <Text style={styles.linkText}>Shop</Text>     
                        </Link>
                    </TouchableOpacity>
                  </View>
              ): (
                <View>
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
                    
                    <TouchableOpacity style={[styles.button, isPressed && styles.buttonPressed]}
                                onPress={handleSubmit(onSignUp)}
                                onPressIn={() => setIsPressed(true)}
                                onPressOut={() => setIsPressed(false)}
                    >
                      <Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>

                    <TouchableOpacity       style={[styles.button, isPressed && styles.buttonPressed]}
                                onPress={handleSubmit(onSignIn)}
                                onPressIn={() => setIsPressed(true)}
                                onPressOut={() => setIsPressed(false)}
                    >
                      <Text style={styles.buttonText}>Sign In</Text> 
                    </TouchableOpacity>
                    
                    <TouchableOpacity >
                        <Link href="/shop" style={[styles.linkContainer, isPressed && styles.buttonPressed]} onPressIn={() => setIsPressed(true)}
                                onPressOut={() => setIsPressed(false)}>
                          <Text style={styles.linkText}>Shop</Text>     
                        </Link>
                    </TouchableOpacity>
                    </View>
        // </ImageBackground>
        
              )
              
              }
            </View>
            
            
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
        width: 270,
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
        width: 270,
        alignItems: 'center',
      },
      linkContainer: {
        backgroundColor: '#6a1b9a',
        width: 270,
        padding: 16,
        borderRadius: 8,
        marginBottom: 16,
        alignItems: 'center'
      },
      linkText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
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