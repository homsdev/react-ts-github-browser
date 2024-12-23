import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";

import {Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {GitHub, NavigateBefore, NavigateNext} from "@mui/icons-material";

import {getUserRepos} from "../service/getRepos.ts";
import {GithubRepository} from "../domain/Repositorires.ts";

type Params = {
    username?: string;
}

function ReposPage() {

    const {username} = useParams<Params>();
    const [repos, setRepos] = useState<GithubRepository[]>([]);

    useEffect(() => {

        if (username) {
            getUserRepos(username)
                .then(data => {
                    setRepos(data);
                });
        }

    }, [username]);

    return (
        <>
            <Button
                color="secondary"
                variant="contained"
                startIcon={<NavigateBefore/>}
                component={Link}
                to={`/`}
            >
                Back
            </Button>
            <List sx={{width: '30%'}}>
                {repos.map((repo: GithubRepository) => (
                    <ListItem
                        disablePadding
                        key={repo.name}
                    >
                        <ListItemButton>
                            <ListItemIcon>
                                <GitHub/>
                            </ListItemIcon>
                            <ListItemText>
                                {repo.name}
                            </ListItemText>
                            <ListItemIcon>
                                <NavigateNext/>
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </>
    )
}

export default ReposPage;