import { useContext, useState } from "react";
import { Context } from "../services/Context/Context";
import { createInverseDictionary } from "../services/Helper/Inverse";
import "./BackgroundImage.css";
import theme from "../config/theme.json";
export default function BackgroundImage() {
    const [themeInverse] = useState(createInverseDictionary(theme))
    const { backgroundOn, themeColor, backgroundOpacity } = useContext(Context);
    return (
        <div className={`bg ${backgroundOn ? 'on' : ''} ${themeInverse[themeColor]}`}
            style={{ opacity: backgroundOpacity }}></div>
    );
}