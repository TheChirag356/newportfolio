import { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_REFRESH_TOKEN } from '$env/static/private';

const client_id = SPOTIFY_CLIENT_ID;
const client_secret = SPOTIFY_CLIENT_SECRET;
const refresh_token = SPOTIFY_REFRESH_TOKEN;

let token_cache = {
    access_token: null,
    expires_at: 0
}

async function getSpotifyAccessToken() {
    if (token_cache.access_token && token_cache.expires_at && Date.now() < token_cache.expires_at) {
        return { access_token: token_cache.access_token };
    }
    const concat = `${client_id}:${client_secret}`;
    const basic = Buffer.from(concat).toString("base64");

    const response = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
            Authorization: `Basic ${basic}`,
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `grant_type=refresh_token&refresh_token=${refresh_token}`,
    })
    const data = await response.json();
    token_cache.access_token = data.access_token;
    token_cache.expires_at = Date.now() + (data.expires_in - 60) * 1000;
    return { access_token: data.access_token };
}

async function getNowPlaying() {
    const { access_token } = await getSpotifyAccessToken();
    const response = await fetch("https://api.spotify.com/v1/me/player/currently-playing", {
        headers: {
            Authorization: `Bearer ${access_token}`
        },
        cache: "no-store"
    })
    return response;
}

export async function getNowPlayingItem() {
    const response = await getNowPlaying();
    if (response.status === 204 || response.status > 400) {
        return null;
    }

    
    const song = await response.json();
    const artist = song.item.artists.map((artist: { name: string }) => artist.name).join(", ");
    const isPlaying = song.is_playing;
    const title = song.item.name;
    const albumImageUrl = song.item.album.images[0].url;

    return { artist, title, albumImageUrl, isPlaying };
}