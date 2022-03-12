import { createContext, useState } from "react";
import playlists from "../../config/music.json";
import theme from "../../config/theme.json";
import { Player } from "../Helper/Player";
export const Context = createContext();

export default function ContextProvider({ children }) {
    const [themeColor, setThemeColor] = useState(theme.Melancholy);
    const [playlist, setPlaylist] = useState(0);
    const [backgroundOn, setBackgroundOn] = useState(false);
    const [song, setSong] = useState(playlists[Object.keys(playlists)[0]][0].slice(0, -4));
    const [player] = useState(new Player(setSong))
    const changePlaylist = (index) => {
        setPlaylist(index);
        player.setPlaylist(index);
    }
    return (
        <Context.Provider value={{
            player,
            themeColor, setThemeColor,
            playlist, setPlaylist, changePlaylist,
            backgroundOn, setBackgroundOn,
            song, setSong
        }}>
            {children}
        </Context.Provider>
    );
}
