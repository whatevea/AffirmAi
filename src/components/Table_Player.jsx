"use client"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
    Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow
} from "@/components/ui/table"
import { Icon } from "@iconify/react"
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import { FaCloudDownloadAlt } from "react-icons/fa";
import { MdOutlineRecordVoiceOver } from "react-icons/md";
const Table_Player = () => {
    const [activeTab, setActiveTab] = useState(0)
    const audioSources = [
        {
            name: "Free sound",
            src: "https://cdn.freesound.org/previews/733/733723_151878-lq.mp3",
            data: "4/28/2024"
        },
        {
            name: "Free sound 2",
            src: "https://cdn.freesound.org/previews/332/332808_5859881-lq.mp3",
            data: "4/28/2024"
        },
        {
            name: "Free sound 3",
            src: "https://cdn.freesound.org/previews/332/332808_5859881-lq.mp3",
            data: "4/28/2024"
        },
    ]
    const changeActive = (index) => {
        setActiveTab(+index)
        console.log(
            "the current src should be ", audioSources[activeTab].src
        )
    }
    return (
        <div className="w-full">
            <Card>
                <CardHeader>
                    <CardTitle>
                        Listen here:
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col gap-4">

                        <audio controls src={audioSources[activeTab].src} />

                        <div className="table w-full">
                            <Table>
                                <TableCaption>A list of your recent invoices.</TableCaption>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="">File Name</TableHead>
                                        <TableHead>Upload Date</TableHead>
                                        <TableHead className="text-right">Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {audioSources.map((item, index) => (
                                        <TableRow key={index}>
                                            <TableCell className={`font-medium ${activeTab === index ? "bg-primary" : "cursor-pointer"}`} onClick={() => changeActive(index)}>{item.name}<MdOutlineRecordVoiceOver className="inline ml-2" /></TableCell>
                                            <TableCell>{item.data}</TableCell>
                                            <TableCell>
                                                <div className="buttons flex gap-4">
                                                    <HoverCard>
                                                        <HoverCardTrigger asChild>
                                                            <FaTrashAlt className="cursor-pointer" />
                                                        </HoverCardTrigger>
                                                        <HoverCardContent
                                                            align="start"
                                                            className="w-[260px] text-sm"
                                                            side="left">
                                                            Delete this audio
                                                        </HoverCardContent>
                                                    </HoverCard>
                                                    <HoverCard>
                                                        <HoverCardTrigger asChild>
                                                            <FaCloudDownloadAlt className="cursor-pointer" />
                                                        </HoverCardTrigger>
                                                        <HoverCardContent
                                                            align="start"
                                                            className="w-[260px] text-sm"
                                                            side="left">
                                                            Delete this audio
                                                        </HoverCardContent>
                                                    </HoverCard>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                    }
                                </TableBody>
                            </Table>

                        </div>
                    </div>

                </CardContent>
            </Card>
        </div>
    );
};
export default Table_Player
