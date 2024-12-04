import {useState, useEffect} from "react"
import { View, Text } from 'react-native'
import { Session } from '@supabase/supabase-js'

// still to work on the Provider, for now the Auth component in the root is handling calls to supabase auth.
// still to work on states

const AuthProvider = () => {

    const [session, setSession] = useState()

    const [user, setUser] = useState()

    // useEffect (()=> {
        
    // })
    
}

export default AuthProvider;