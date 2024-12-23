import {Link} from "react-router-dom";

import {Avatar, Button, Container, Typography} from "@mui/material";
import {NavigateNext} from "@mui/icons-material";
import {UserData} from "../types/UserData.ts";

type Props = {
    user: UserData
}

function UserPage({ user }: Props) {

    const {name, username, avatar, email, location} = user;

    return (<>
        <Container className="user-avatar" sx={{display: 'flex', alignItems: 'center', marginTop: 6}}>
            <Avatar src={avatar} sx={{width: 150, height: 150}}></Avatar>
            <Container>
                <Typography variant="h1">{name}</Typography>
                <Typography variant="h4">@{username}</Typography>
            </Container>
            <Button
                color="secondary"
                variant="contained"
                component={Link}
                to={`/projects/${username}`}
                fullWidth
                startIcon={<NavigateNext/>}
                sx={{width: '25%', padding: 1.5}}
            >
                Repositories
            </Button>
        </Container>
        <Container sx={{marginTop: 6}}>
            <Container className="user-basic-info">
                <Typography variant="h5" sx={{marginTop: 2}}>Company: Not available</Typography>
                <Typography variant="h5" sx={{marginTop: 2}}>E-mail: {email || 'Not available'}</Typography>
                <Typography variant="h5" sx={{marginTop: 2}}>Location: {location || 'Not available'}</Typography>
            </Container>
        </Container>
    </>)
}

export default UserPage;