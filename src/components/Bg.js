import { useContext } from "react";
import { Context } from "../services/Context/Context";
import "./Bg.css";

export default function Bg() {
    const { backgroundOn } = useContext(Context);
    return (
        <div className={`bg ${backgroundOn ? 'on' : ''}`}></div>
    );
}