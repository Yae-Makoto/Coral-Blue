import { Popover, Radio, Slider, Space, Switch } from "antd";
import { useContext, useEffect, useState } from "react";
import playlists from "../config/music.json";
import theme from "../config/theme.json";
import { Context } from "../services/Context/Context";
import './ConfigPanel.css';
import { SvgCompass, SvgSetting } from "./SvgIcon/SvgIcon";

export default function ConfigPanel() {


    const {
        themeColor,
        setThemeColor,
        playlist,
        changePlaylist,
        backgroundOn,
        setBackgroundOn,
        backgroundOpacity,
        setBackgroundOpacity
    } = useContext(Context);

    // if (themeColor) {
    //     try {
    //         document.getElementsByClassName("ant-slider-track")[0].style.backgroundColor = themeColor;
    //     } catch (error) {

    //     }

    // }

    useEffect(() => {
        try {
            document.getElementsByClassName("ant-slider-track")[0].style.backgroundColor = themeColor;
        } catch (error) {
        }

        // document.querySelector('.ant-slider-track')
    }, [backgroundOn, themeColor])

    return (
        <>
            <Popover placement="bottomRight" content={
                <div className="setting_panel panel">
                    <h1 style={{ borderColor: themeColor, color: themeColor }}>BACKGROUND</h1>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div style={{ color: themeColor }}>Background</div>
                        <Switch checkedChildren="On" unCheckedChildren="Off"
                            checked={backgroundOn}
                            onChange={() => setBackgroundOn(pre => !pre)}
                            style={{ backgroundColor: themeColor }} />
                    </div>
                    <div style={{ display: `${backgroundOn ? 'flex' : 'none'}`, flexDirection: 'column' }}>
                        <div style={{ color: themeColor }}>Opacity</div>
                        <Slider
                            value={backgroundOpacity}
                            min={0}
                            max={1}
                            step={0.01}
                            onChange={(opt) => { setBackgroundOpacity(opt) }}
                        />
                    </div>
                    <h1 style={{ borderColor: themeColor, color: themeColor }}>THEME</h1>
                    <Radio.Group
                        onChange={(e) => { setThemeColor(e.target.value); }}
                        buttonStyle='solid'
                        value={themeColor}>
                        <Space direction="vertical">
                            {
                                Object.keys(theme).map((k) =>
                                    <Radio.Button value={theme[k]} style={{ background: theme[k] }}>{k}</Radio.Button>
                                )
                            }
                        </Space>
                    </Radio.Group>
                </div>
            } trigger="hover">
                <div className="panel_container setting" style={{ borderColor: themeColor, backgroundColor: themeColor }}>
                    <SvgSetting />
                </div>
            </Popover>
            <Popover placement="bottomLeft" content={
                <div className="music_panel panel">
                    <h1 style={{ borderColor: themeColor, color: themeColor }}>Playlist</h1>
                    <Radio.Group
                        onChange={(e) => { changePlaylist(e.target.value); }}
                        value={playlist}>
                        <Space direction="vertical">
                            {
                                Object.keys(playlists).map((k, i) =>
                                    <Radio.Button value={i} style={{ background: themeColor }}>{k}</Radio.Button>
                                )
                            }
                        </Space>
                    </Radio.Group>
                </div>
            } trigger="hover">
                <div className="panel_container music" style={{ borderColor: themeColor, backgroundColor: themeColor }}>
                    <SvgCompass />
                </div>
            </Popover>
        </>
    );
}
