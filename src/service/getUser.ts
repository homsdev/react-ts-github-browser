import {UserData} from "../types/UserData.ts";
import {UserApiResponse} from "../domain/UserApiResponse.ts";

export async function getUser(username: string): Promise<UserData> {
    const response = await fetch(`https://api.github.com/users/${username}`);
    if(!response.ok) {
        throw new Error(response.statusText);
    }
    const body = (await response.json()) as unknown;
    assertIsUserApiResponse(body);
    return normalizeData(body);
}

function normalizeData(data: UserApiResponse): UserData {
    return {
        avatar: data.avatar_url,
        email: data.email || "no-email@example.com",
        location: data.location || "Unknown location",
        name: data.name || "Unknown Name",
        username: data.login || "Anonymous"
    };
}

export function assertIsUserApiResponse(userData: unknown): asserts userData is UserApiResponse {
    console.log(userData);
    if (!userData) {
        throw new Error("User Data doesn't exist");
    }
}