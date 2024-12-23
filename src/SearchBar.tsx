import {TextField, InputAdornment} from "@mui/material";
import {Search} from "@mui/icons-material";
import React from "react";

type props ={
    username: string,
    onChangeUsername: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

function SearchBar({username, onChangeUsername}: props) {
    return (
        <TextField
            sx={{
                marginTop: "45px",
                width: "75%",
                marginX: "200px",
            }}
            label="Search Bar"
            variant="outlined"
            fullWidth
            slotProps={
                {
                    input: {
                        startAdornment: (
                            <InputAdornment position="start">
                                <Search></Search>
                            </InputAdornment>
                        )
                    }
                }
            }
            value={username}
            onChange={onChangeUsername}
        >
        </TextField>
    )
}

export default SearchBar;