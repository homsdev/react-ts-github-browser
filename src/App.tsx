import React, {useEffect, useRef, useState} from "react";

import {CircularProgress, Container, Typography} from "@mui/material";

import UserPage from "./pages/UserPage.tsx";
import SearchBar from "./SearchBar.tsx";

import {getUser} from "./service/getUser.ts";
import {UserData} from "./types/UserData.ts";
import {useAppContext} from "./context/UseAppContext.tsx";

function App() {
    const {username, setUsername} = useAppContext();
    const {loading, setLoading} = useAppContext();
    const [profile, setProfile] = useState<UserData>();
    const [userInput, setUserInput] = useState<string>("");
    const debounceTimeOutRef = useRef<number | null>(null);

    function handleUsernameChange(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;
        setUserInput(value);

        if (debounceTimeOutRef.current) {
            clearTimeout(debounceTimeOutRef.current);
        }

        debounceTimeOutRef.current = setTimeout(() => {
            setUsername(value);
        }, 1000);
    }

    useEffect(() => {

        if (username) {
            setLoading(true);
            getUser(username)
                .then((data) => {
                    setProfile(data);
                    setLoading(false)
                })
                .catch(err => {
                    console.error(err);
                    setLoading(false);
                    setProfile(undefined);
                });
        }

    }, [username]);


    return (
        <>
            <SearchBar username={userInput} onChangeUsername={handleUsernameChange}/>
            {
                username === '' ? (
                    <Container maxWidth="xl" sx={{display: "flex", justifyContent: "center"}}>
                        <Typography variant="caption">Please enter a username to see the profile.</Typography>
                    </Container>
                ) : loading ? (
                    <CircularProgress size={80}/>
                ) : profile ? (
                    <UserPage user={profile}/>
                ) : (
                    <Container maxWidth="xl" sx={{display: "flex", justifyContent: "center", marginTop: "2rem"}}>
                        <Typography variant="h4">User does not exist =(</Typography>
                    </Container>
                )
            }

        </>
    )
}

export default App;
