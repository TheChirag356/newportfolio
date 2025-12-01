import { json } from "@sveltejs/kit";
import { getNowPlayingItem } from '$lib/server/spotify';

export async function GET() {
    try {
        const song = await getNowPlayingItem();
        return json(song ?? {
            artist: '',
            title: '',
            albumImageUrl: '',
            isPlaying: false
        });
    } catch (error) {
        return json({ error: 'Spotify API error' }, { status: 500 });
    }
}
