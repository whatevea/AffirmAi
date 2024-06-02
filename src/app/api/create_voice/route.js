// import fs from 'fs';
import { promises as fs } from 'fs';
import { v2 as cloudinary } from 'cloudinary';
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDNIARY_API_KEY,
    api_secret: process.env.CLOUDNIARY_API_SECRET
});

export async function POST(request) {
    try {
        const { textToMakeAudio } = await request.json();
        const response = await fetch('https://api.openai.com/v1/audio/speech', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "Bearer " + process.env.OPENAI_KEY,
            },
            body: JSON.stringify({
                "model": "tts-1",
                "input": textToMakeAudio,
                "voice": "alloy"
            }),
        });

        if (!response.ok) {
            throw new Error('Failed to fetch audio from OpenAI API');
        }
        // const audioBuffer = await response.arrayBuffer() // Convert response to buffer
        const blob = response.blob();
        const file = new File([blob], "audio.mp3", { type: "audio/mpeg" });
        await saveFile(file)
        uploadCloudinary(file)
        return Response.json({ status: "failed" });

        // const buffer = Buffer.from(response.arrayBuffer());
        // await fs.promises.writeFile(speechFile, buffer);
    } catch (error) {
        console.error('Error making request to OpenAI API:', error);
        return Response.json({ status: "failed" });
    }
}

const uploadCloudinary = async (file) => {
    console.log(file)
    console.log("file path is ", file.name)
    cloudinary.uploader.upload(file.path, { resource_type: "auto", folder: "audios" },
        function (error, result) {
            if (error) {
                console.error(error);
            } else {
                console.log(result);
            }
        });
}
const saveFile = async (file) => {
    const buffer = Buffer.from(await file.arrayBuffer());
    await fs.writeFile(file.name, buffer);
};