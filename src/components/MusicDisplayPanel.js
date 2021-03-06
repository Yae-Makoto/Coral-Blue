import { useContext } from "react";
import { Context } from "../services/Context/Context";
import "./MusicDisplayPanel.css";
import { SvgBackward, SvgForward } from "./SvgIcon/SvgIcon";

export default function MusicDisplayPanel() {
    const { player, song, themeColor } = useContext(Context);
    return (
        <div className="display" style={{
            color: themeColor,
            fill: themeColor,
            borderColor: themeColor
        }}>
            <div>{song}</div>
            <div>
                <div className="svg" onClick={() => { player.last(); }}><SvgBackward /></div>
                <div className="svg" onClick={() => { player.next(); }}><SvgForward /></div>
            </div>
        </div>
    )
}