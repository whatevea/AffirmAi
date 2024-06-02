"use client"
import Table_Player from "@/components/Table_Player"
import { Card, CardHeader, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { useState } from "react"
import { PopoverClose } from "@radix-ui/react-popover"
import { toast } from "sonner"
import useIndexStore from "@/stores/indexStore"

export default function Voice() {
    const { isMakingSpeech, setIsMakingSpeech } = useIndexStore()
    const [affirmText, setAffirmText] = useState("")
    const [loading, setLoading] = useState(false)
    const [topic, setTopic] = useState("")
    const [errors, setErrors] = useState({})

    const handleSubmit = async (e) => {
        e.preventDefault()
        const { name, topic, text } = e.target.elements
        const nameValue = name.value.trim()
        const topicValue = topic.value.trim()
        const textValue = text.value.trim()

        const errors = validateInputs(nameValue, topicValue, textValue)
        if (Object.keys(errors).length > 0) {
            setErrors(errors)
            return
        }
        setErrors({})
        setIsMakingSpeech(true)
        const user = "user1demo"
        console.log("i am here now i need to show a fucking toast")
        toast.loading("Converting affirmations to voice...", {
            action: {
                label: "Hide"
            }

        })
        const fileUrl = await createAffirmationVoice(user, textValue)
        setIsMakingSpeech(false)
        if (fileUrl) {
            toast.success("Affirmations converted to voice successfully. Here's the URL :", fileUrl)
        } else {
            toast.error("Failed to convert affirmations to voice")
        }
    }

    return (
        <div className="flex flex-col-reverse md:flex-row p-3">
            <div className="w-1/2">
                <Card>
                    <CardHeader>
                        <CardTitle>Account</CardTitle>
                        <CardDescription>Write your affirmations or generate with AI.</CardDescription>
                    </CardHeader>
                    <CardContent className="">
                        <form onSubmit={handleSubmit}>
                            <div className="space-y-1">
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" placeholder="eg.morning-positivity" />
                                {errors.name && <p className="text-red-500">{errors.name}</p>}
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="topic">Topic</Label>
                                <Input id="topic" value={topic} onChange={(e) => setTopic(e.target.value)} placeholder="Positivity" />
                                {errors.topic && <p className="text-red-500">{errors.topic}</p>}
                            </div>
                            <div className="space-y-1">
                                <div className="flex items-center justify-between">
                                    <Label htmlFor="text">Your Affirmation Text.</Label>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <p className="underline text-primary cursor-pointer"> Use AI</p>
                                        </PopoverTrigger>
                                        <PopoverContent className="flex flex-col gap-2">
                                            <PopUpDialog setLoading={setLoading} addAiText={setAffirmText} topic={topic} />
                                        </PopoverContent>
                                    </Popover>
                                </div>
                                <Textarea
                                    id="text"
                                    placeholder={"I am good at everything i do "}
                                    className="h-[40vh]"
                                    value={loading ? "Loading..." : affirmText}
                                    onChange={(e) => setAffirmText(e.target.value)}
                                />
                                {errors.text && <p className="text-red-500">{errors.text}</p>}
                            </div>
                            <Button type="submit">Generate Sound</Button>
                        </form>
                    </CardContent>
                </Card>
            </div>

            <div className="w-1/2">
                <Table_Player />
            </div>
        </div>
    )
}

const PopUpDialog = ({ addAiText, topic, setLoading }) => {
    const [preference, setPreference] = useState("")

    const fetchText = async () => {
        setLoading(true)
        const about_user = "I only believe in Buddhishm and its principles"
        try {
            const response = await fetch(`/api/text_gen?about_user=${about_user}&preference=${preference}&topic=${topic}`)
            if (!response.ok) {
                throw new Error("Failed to fetch text")
            }
            const data = await response.json()
            const parsedResult = JSON.parse(data.choices[0].message.content).generated_text
            addAiText(parsedResult.join("\n"))
        } catch (error) {
            console.error("Error fetching text:", error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <Textarea value={preference} onChange={(e) => setPreference(e.target.value)} placeholder={"e.g  Write affirmations on Wealth,Money etc."} maxLength="100" />
            <PopoverClose asChild>
                <Button onClick={fetchText}>Generate</Button>
            </PopoverClose>
        </>
    )
}

const createAffirmationVoice = async (user, affirmText) => {

    try {
        const url = "/api/create_voice"
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ user, affirmText })
        })
        if (!response.ok) {
            throw new Error("Failed to create voice")
        }
        const data = await response.json()
        return data.filename
    } catch (error) {
        console.error("Error creating voice:", error)
        return false
    }
}

const validateInputs = (name, topic, text) => {
    const errors = {}

    if (name.length < 5) {
        errors.name = "Name must be at least 5 characters"
    }

    if (topic.length < 5) {
        errors.topic = "Topic must be at least 5 characters"
    }

    const textRegex = /^[.,\sa-zA-Z]+$/
    if (text.length < 100 || !textRegex.test(text)) {
        errors.text = "Affirmation text must contain at least 100 words and only '.' and ',' symbols are allowed"
    }

    return errors
}