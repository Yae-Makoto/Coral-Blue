import playlists from "../../config/music.json";

export class Player {
    constructor(setSong) {
        this.playlist_index = Object.keys(playlists);
        this.index = 0;
        this.current = 0;
        this.playlist = playlists[this.playlist_index[this.index]];
        this.setSong = setSong;
        this.player = new Audio(toPath(this.playlist[this.current]));
        this.player.addEventListener('ended', () => {
            this.next();
        });
        this.is_playing = false;
    }
    // single song
    play() {
        this.is_playing = true;
        this.player.play();
    }
    pause() {
        this.is_playing = false;
        this.player.pause();
    }
    reload() {
        this.player.src = toPath(this.playlist[this.current]);
        this.player.load();
        this.setSong(this.playlist[this.current].slice(0, -4));
        if (this.is_playing) {
            this.player.play();
        }
    }
    last() {
        if (this.current - 1 === -1) {
            this.current = this.playlist.length - 1;

        } else {
            this.current -= 1;
        }
        this.reload();
    }
    next() {
        if (this.current + 1 === this.playlist.length) {
            this.current = 0;

        } else {
            this.current += 1;
        }
        this.reload();
    }
    // playlist
    setPlaylist(i) {
        if (i !== this.index) {
            this.index = i;
            this.current = 0;
            this.playlist = playlists[this.playlist_index[this.index]];
            this.reload();
        }
    }
}

function toPath(fn) {
    return `/mp3/${fn}`;
}

