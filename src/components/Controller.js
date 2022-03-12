import { useContext, useState } from "react";
import { Context } from "../services/Context/Context";
import './Controller.css';
import { ReactComponent as Logo } from "./logo.svg";

export default function Controller() {
    const { player, themeColor } = useContext(Context);
    const [active, setActive] = useState(false);

    const onClick = () => {
        if (active) {
            player.pause()
        } else {
            player.play();
        }
        setActive(pre => !pre);
    }

    return (
        <div>
            <div className={`Controller ${active ? 'hover' : ''}`} onClick={onClick} style={{ fill: themeColor }}>
                <Logo />
            </div>
            <div className={`Controller-shadow ${active ? 'Controller-shadow-active' : ''}`} style={{ fill: themeColor }}>
                <Logo />
            </div>
        </div>
    );
}