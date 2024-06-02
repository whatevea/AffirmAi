"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { MdHelpOutline, MdOutlineFileUpload } from "react-icons/md";

export const UploadForm = () => {
    const [loading, setLoading] = useState(true);
    return (
        <div className="w-full">
            <Card>
                <CardHeader>
                    <CardTitle>

                        Upload Music

                    </CardTitle>

                </CardHeader>
                <CardContent>
                    <div className="flex flex-col p-4 gap-4">
                        <div className="dottedbox cursor-pointer text-center w-full h-48 border-dashed rounded-md border-2 flex justify-center items-center">
                            <div className="icon text-center flex flex-col justify-center items-center">
                                <MdOutlineFileUpload size={40} />
                                <p className="">Drop here or choose the file</p>
                            </div>

                        </div>
                        <div class="flex items-center justify-center">
                            <div class="border-t border-muted flex-grow"></div>
                            <div class="mx-4 text-muted-foreground">OR</div>
                            <div class="border-t border-muted flex-grow"></div>
                        </div>

                        <div className="bg-muted">

                        </div>

                        <Input className="w-full" placeholder={"Add file from url"} />
                        <div className="flex justify-between">
                            <div className="help flex gap-2 items-center">
                                <MdHelpOutline /> Help Center
                            </div>
                            <div className="buttons">
                                <Button variant="secondary" className="mr-2">Cancle</Button>
                                <Button>Import </Button>
                            </div>

                        </div>
                    </div>

                </CardContent>
            </Card>
        </div>

    );
};
