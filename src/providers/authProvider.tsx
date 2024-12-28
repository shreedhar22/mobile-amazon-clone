import {createContext, useState, PropsWithChildren, useContext, ReactNode} from "react"
import { User } from "../../assets/types/user"

// still to work on the Provider, for now the Auth component in the root is handling calls to supabase auth.
// still to work on states

interface AuthContextType {
    user: User | null,
    setUser : (user:User | null) => void
}

interface AuthProviderProps {
    children: ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {

    const [user, setUser] = useState<User | null>(null)

    return (
        <AuthContext.Provider value = {{user, setUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error('useAuthContext must be used within a AuthProvider');
      }
    return context
}