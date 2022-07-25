import axios from "axios"
import MetricCard from "./components/MetricCard.jsx"
import {BiStats, MdOutlineSettingsSuggest} from "react-icons/all.js"
import {toast, ToastContainer, Zoom} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {useEffect, useState} from "react"
import {WebviewWindow} from "@tauri-apps/api/window"
import {Container, Input, Separator, Textarea} from "./components/Styled"

function App() {
    // Create stats useState
    const [sentData, setSentData] = useState(parseInt(localStorage.getItem("messages_sent")))
    const [failedData, setFailedData] = useState(parseInt(localStorage.getItem("messages_failed")))
    const sentToastID = "sent-id"
    const failedToastID = "failed-id"

    // Load the stats when loading app
    useEffect(() => {
        setSentData(sentData || 0)
        setFailedData(failedData || 0)
    }, [])

    // Update stats
    useEffect(() => {
        localStorage.setItem("messages_sent", sentData)
        toast.clearWaitingQueue();
    }, [sentData])

    useEffect(() => {
        localStorage.setItem("messages_failed", failedData)
        toast.clearWaitingQueue();
    }, [failedData])

    // Clear stats
    const clearData = () => {
        setSentData(0)
        setFailedData(0)
    }

    const isValidHttpUrl = (string) => {
        let url;

        try {
            url = new URL(string);
        } catch (_) {
            return false;
        }
        return url.protocol === "http:" || url.protocol === "https:";
    }

    // Send the Discord webhook
    const sendWebhook = (msg, url, usr, avatarUrl) => {
        if (!msg) {
            toast.error("Please input a message!")
            return
        }
        if (!isValidHttpUrl(url)) {
            toast.error("Invalid webhook URL!", {toastId: failedToastID})
            return
        }
        // Send post request
        axios.post(url, {content: msg, username: usr || "", avatar_url: avatarUrl || ""})
            .then(r => {
                if (r.status !== 204 && r.status !== 404) return
                toast.success("Message sent!", {toastId: sentToastID})
                setSentData(sentData + 1)
            })
            .catch((err) => {
                if (err.response.status === 404) {
                    toast.error("Invalid webhook URL!", {toastId: failedToastID})
                    return
                } else toast.error("Error sending webhook!", {toastId: failedToastID})
                setFailedData(failedData + 1)
            })
    }

    // Submitting the form
    const formSubmit = (e) => {
        e.preventDefault()
        // then getting the values
        let message = document.getElementById("message").value
        let webhookUrl = document.getElementById("webhook_url").value
        let username = document.getElementById("username").value
        let avatarUrl = document.getElementById("avatar_url").value
        // and send the webhook
        sendWebhook(message, webhookUrl, username, avatarUrl)
    }

    const appInfo = () => {
        const webview = new WebviewWindow('info', {
            url: "./info.html",
            title: "About this app",
            width: 500,
            height: 270,
            center: true,
            resizable: false,
        })
    }

    return (
        <div className="App">
            <ToastContainer
                position="bottom-left"
                autoClose={2500}
                hideProgressBar
                transition={Zoom}
                newestOnTop={false}
                closeOnClick
                closeButton={false}
                rtl={false}
                limit={3}
                pauseOnFocusLoss={false}
                draggable
                theme="dark"
                pauseOnHover
            />
            <Container textAlign="center">
                <h1 className="text-4xl font-bold mt-2">Discord Webhook Sender
                </h1>
                <a href="#" className="text-1xl text-neutral-400 hover:text-neutral-500" onClick={appInfo}>About this
                    app</a>
                <h2 className="mt-8 text-2xl font-bold text-left flex">
                    Settings
                    <MdOutlineSettingsSuggest size={28} className="text-white/40 ml-1"/>
                </h2>
                <form className="mt-2" onSubmit={formSubmit}>
                    <div className="grid gap-2 grid-cols-2">
                        <Textarea type="text" placeholder="Message" id="message" className="w-full" required
                                  autoComplete="off"/>
                        <Input type="text" placeholder="Webhook URL" id="webhook_url" className="w-full"
                               required autoComplete="off"/>
                        <Input type="text" placeholder="Username (optional)" id="username" className="w-full"/>
                        <Input type="text" placeholder="Avatar URL (optional)" id="avatar_url" className="w-full"
                               autoComplete="off"/>
                    </div>
                    <div className="text-right mt-2 flex">
                        <Input type="submit" value="Send" className="w-full bg-blue-800 hover:bg-blue-700"
                               overrideBackground={true}/>
                    </div>
                </form>
                <Separator className="mt-8 mb-5"/>
                <h2 className="text-2xl font-bold text-left flex">
                    Data
                    <BiStats size={28} className="text-white/40 ml-1"/>
                </h2>
                <div className="mt-2 grid grid-cols-2">
                    <MetricCard className="mr-1" title="Messages sent" description="Total" number={sentData}/>
                    <MetricCard className="ml-1" title="Failed to send" description="Total" number={failedData}
                                textType="failed"></MetricCard>
                </div>
                <div className="text-right">
                    <button className="mt-2" onClick={clearData}>Clear Data</button>
                </div>
            </Container>
        </div>
    )
}

export default App
