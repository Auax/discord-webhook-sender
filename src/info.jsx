import React from 'react'
import ReactDOM from 'react-dom/client'
import styled from "styled-components"
import './index.css'
import {appWindow} from "@tauri-apps/api/window"
import {Button} from "./components/Styled.jsx"

const MainDiv = styled.div`
  padding: 40px;
  display: grid;
  grid-gap: .25rem;
  & h2, p {
    user-select: text;
  }
`

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <div>
            <MainDiv className="">
                <h2 className="text-2xl font-bold text-left flex">Discord Webhook Sender</h2>
                <p className="text-sm text-neutral-400">A Tauri powered app by Ibai Farina <a
                    href="https://github.com/Auax" target="_blank">(Auax)</a></p>
                <p className="text-sm text-neutral-400">Tested in Windows 11</p>
                <p className="text-sm text-neutral-400">Version 0.1.0 - 2022 Build</p>
                <p className="text-sm text-neutral-400">Github: <a href="https://github.com/Auax/discord-webhook-sender"
                                                                   target="_blank">Main</a> / <a
                    href="https://github.com/Auax/discord-webhook-sender/issues" target="_blank">Issues</a></p>
                <Button className="mt-4" onClick={async () => {
                    await appWindow.close()
                }}>Close
                </Button>
            </MainDiv>
        </div>
    </React.StrictMode>
)
