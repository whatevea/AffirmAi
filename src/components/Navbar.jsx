"use client"
import { useState } from "react"
import { FaBook, FaCloud, FaList, FaPhone } from "react-icons/fa";
import Link from "next/link";
import { PiInfoBold } from "react-icons/pi";

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false)
    const [activeTab, setActiveTab] = useState("")
    return (
        <div className=" w-full bg-muted  ">
            <div className=" m-auto flex sticky top-0 h-20  p-3 md:w-3/4 justify-between" >
                <div className="logos flex  items-center">
                    <img src="/affirm_logo.png" className=" rounded-full h-full mr-4" alt="logo" />
                    <p className="text-2xl tracking-wide text-primary">Affirm</p>
                    <p className="text-2xl">AI</p>
                </div>

                <div className="navbar-items hidden md:flex gap-2">
                    <Navitems activeTab={activeTab} setActiveTab={setActiveTab} />
                </div>
                <div onClick={() => { setIsOpen(prevState => !prevState) }} className="md:hidden inline rouned-md p-2 text-2xl"> <FaList /> </div>
                {isOpen && (
                    <div className="flex  flex-col  bg-muted  absolute right-0 top-20 w-full  p-2">
                        <Navitems activeTab={activeTab} setActiveTab={setActiveTab} />
                    </div>
                )}
            </div>
        </div >
    )
}

const Navitems = ({ activeTab, setActiveTab }) => {

    const changeTab = (tab) => {
        if (tab === activeTab) return
        setActiveTab(tab)
    }
    return (
        <>
            <Link href={"/profile"} className={`py-4 md:rounded md:border text-center md:w-32 md:h-full hover:border-primary border border-secondary ${activeTab === "profile" ? 'font-bold bg-primary' : "cursor-pointer"}`} onClick={() => { changeTab("profile") }}>
                <PiInfoBold className="inline mr-1" />Profile
            </Link>
            <Link href={"/music"} className={`py-4 md:rounded md:border text-center md:w-32 md:h-full hover:border-primary border border-secondary ${activeTab === "music" ? 'font-bold bg-primary' : "cursor-pointer"}`} onClick={() => { changeTab("music") }}>
                <FaList className="inline mr-1" />Music
            </Link>
            <Link href={"/voice"} className={`py-4 md:rounded md:border text-center md:w-32 md:h-full hover:border-primary border border-secondary ${activeTab === "voices" ? 'font-bold bg-primary' : "cursor-pointer"}`} onClick={() => changeTab("voices")}>
                <FaCloud className="inline mr-1" />Voices
            </Link>
            <Link href={"/affrirmation"} className={`py-4 md:rounded md:border text-center md:w-32 md:h-full hover:border-primary border border-secondary ${activeTab === "affirmation" ? 'font-bold bg-primary' : "cursor-pointer"}`} onClick={() => changeTab("affirmation")}>
                < FaPhone className="inline mr-1" /> Affirmations
            </Link >
            <Link href={"/faq"} className={`py-4 md:rounded md:border text-center md:w-32 md:h-full hover:border-primary border border-secondary ${activeTab === "faq" ? 'font-bold bg-primary' : "cursor-pointer"}`} onClick={() => changeTab("faq")}>
                <FaPhone className="inline mr-1" /> FAQ
            </Link>
            <Link href={"/"} className={`py-4 md:rounded md:border text-center md:w-32 md:h-full hover:border-primary border border-secondary ${activeTab === "faq" ? 'font-bold bg-primary' : "cursor-pointer"}`} onClick={() => changeTab("faq")}>
                <FaPhone className="inline mr-1" /> Logout
            </Link>
        </>
    )
}