'use client'
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import axios from 'axios';
import { User } from "@/model/User";
import { useSession } from 'next-auth/react';

interface UserContextProps {
    userData: User | null;
    setUserData: React.Dispatch<React.SetStateAction<User | null>>;
    fetchUserData: () => void;
    loading: boolean;
    logout: () => void;
}

interface UserProviderProps {
    children: ReactNode;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const [userData, setUserData] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const { data: session } = useSession();

    const fetchUserData = async () => {
        setLoading(true);
        try {
            const response = await axios.get('/api/fetch-data'); 
            setUserData(response.data?.user || null); 
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error('Error fetching user data', {
                    message: error.message,
                    name: error.name,
                    code: error.code,
                    config: error.config,
                    response: error.response?.data,
                });
            } else {
                console.error('Unexpected error', error);
            }
        } finally {
            setLoading(false);
        }
    };

    const logout = () => {
        setUserData(null);
    };

    useEffect(() => {
        if (session?.user) {
            fetchUserData();
        }
    }, [session]); 

    console.log("context api ", userData);

    return (
        <UserContext.Provider value={{ userData, setUserData, fetchUserData, loading, logout }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUserContext = (): UserContextProps => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useUserContext must be used within a UserProvider');
    }
    return context;
};
