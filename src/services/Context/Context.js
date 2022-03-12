import { createContext, useState } from "react";
import playlists from "../../config/music.json";
import theme from "../../config/theme.json";
import { Player } from "../Helper/Player";
export const Context = createContext();

export default function ContextProvider({ children }) {

    const [themeColor, setThemeColor] = useState(theme[Object.keys(theme)[0]]);
    const [backgroundOn, setBackgroundOn] = useState(false);
    const [backgroundOpacity, setBackgroundOpacity] = useState(0.11);

    const [playlist, setPlaylist] = useState(0);
    const [song, setSong] = useState(playlists[Object.keys(playlists)[0]][0].slice(0, -4));
    const [player] = useState(new Player(setSong))
    const changePlaylist = (index) => {
        setPlaylist(index);
        player.setPlaylist(index);
    }

    return (
        <Context.Provider value={{
            themeColor, setThemeColor,
            backgroundOn, setBackgroundOn,
            backgroundOpacity, setBackgroundOpacity,

            player,
            playlist, setPlaylist, changePlaylist,
            song, setSong
        }}>
            {children}
        </Context.Provider>
    );
}
