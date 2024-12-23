import React, {createContext, ReactNode, useContext, useState} from "react";

type State = {
    username: undefined | string;
    loading: boolean;
}

const initialState = {
    username: undefined,
    loading: false,
}

type AppContextType = State & {
    setUsername: React.Dispatch<React.SetStateAction<string>>
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

const UseAppContext = createContext<AppContextType>({
    ...initialState,
    setUsername: () => {
    },
    setLoading: () => {
    }
});

type Props = {
    children: ReactNode;
}

export function AppProvider({children}: Props) {
    const [username, setUsername] = useState<string>("");
    const [loading, setLoading] = useState(false);
    return (
        <UseAppContext.Provider
            value={{
                username,
                setUsername,
                loading,
                setLoading
            }}>
            {children}
        </UseAppContext.Provider>
    )
}

export const useAppContext: () => AppContextType = () => {
    const context = useContext(UseAppContext);

    if (!context) {
        throw new Error("useAppContext must be used within provider");
    }

    return context;
}
