"use client"
import { useState } from "react"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { FaAngleDown } from "react-icons/fa";
import { FaHeadphonesAlt } from "react-icons/fa";
import { FaMusic } from "react-icons/fa6";
import { Button } from "@/components/ui/button"
import { MdOutlineRecordVoiceOver } from "react-icons/md";
import { TiAdjustBrightness } from "react-icons/ti";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import { Textarea } from "@/components/ui/textarea"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Checkbox } from "@/components/ui/checkbox"
export default function Profile() {

    return (

        <div className="flex flex-col-reverse md:flex-row p-3">
            <div className="w-1/2">
                <EditForm />
            </div>


            <div className="w-1/2">
                <UserStats />
            </div>
        </div>
    )
}


const EditForm = () => {

    return (
        <Card>
            <CardHeader>
                <CardTitle>Account</CardTitle>
                <CardDescription>
                    Make changes to your account here. Click save when you're done.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-5">
                <div className="space-y-1">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" defaultValue="Pedro Duarte" />
                </div>
                <div className="space-y-1">
                    <Label htmlFor="username">Username</Label>
                    <Input id="username" defaultValue="@peduarte" />
                </div>
                <div className="space-y-1">
                    <Label htmlFor="bio">About You:</Label>
                    <Textarea id="bio" placeholder=" I am an introvert ..." />
                    <div className="flex items-center">
                        <Checkbox id="terms" className="mr-2" />
                        <Label htmlFor="terms">Use this data to train Ai model</Label>
                    </div>
                </div>
            </CardContent>
            <CardFooter>
                <Button>Save changes</Button>
            </CardFooter>
        </Card>
    )
}

const UserStats = () => {
    const [position, setPosition] = useState("Weekly")
    return (

        <Card>
            <CardHeader>
                <CardTitle>Staus/Settings</CardTitle>
                <CardDescription>
                    Your stats and Settings here.
                </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col justify-center">
                <div className="listen_stats  rounded-md w-full p-6 border ">
                    <div className="flex justify-between items-center">
                        <FaHeadphonesAlt className="bg-muted-foreground text-primary rounded-full p-1" size={40} />
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" className="w-32 rounded-lg">{position} <FaAngleDown className="ml-4" /> </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56">
                                <DropdownMenuLabel>Choose Time</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                                    <DropdownMenuRadioItem value="Daily">Daily</DropdownMenuRadioItem>
                                    <DropdownMenuRadioItem value="Weekly">Weekly</DropdownMenuRadioItem>
                                    <DropdownMenuRadioItem value="Monthly">Monthly</DropdownMenuRadioItem>
                                </DropdownMenuRadioGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    <div className="mt-6">
                        <p className="text-muted-foreground"> Total minutes listened : </p>
                        <p className="font-bold text-2xl"> 42 </p>
                    </div>

                </div>

                <div className="table rounded-md w-full p-6 border">
                    <Label className="text-xl text-bold">
                        Your files
                    </Label>
                    <Table>
                        <TableCaption>A list of your recent invoices.</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="">Type</TableHead>
                                <TableHead>Total</TableHead>
                                <TableHead className="text-right">See All</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-medium">Affirmations <TiAdjustBrightness className="inline ml-2" /></TableCell>
                                <TableCell>10</TableCell>
                                <TableCell className="text-right"><p className="inline bg-muted cursor-pointer" >Click here to see </p></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">Music <FaMusic className="inline ml-2" /></TableCell>
                                <TableCell>10</TableCell>
                                <TableCell className="text-right"><p className="inline bg-muted cursor-pointer" >Click here to see </p></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">Speech  <MdOutlineRecordVoiceOver className="inline ml-2" /></TableCell>
                                <TableCell>10</TableCell>
                                <TableCell className="text-right"><p className="inline bg-muted cursor-pointer" >Click here to see </p></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>

            </CardContent>
        </Card>

    )
}