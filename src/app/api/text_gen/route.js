export async function GET(request) {
    const { searchParams } = new URL(request.url)
    const about_user = searchParams.get('about_user')
    const affirmation_topic = searchParams.get('topic')
    const preference = searchParams.get('preference')
    const data = await getResult({ about_user, affirmation_topic, preference })
    return Response.json(data)
}
console.log(process.env.OPENAI_KEY)

const getResult = async (argument) => {
    const url = "https://api.openai.com/v1/chat/completions";
    const data = {
        messages: [
            {
                role: 'system',
                content: "You will generate Affirmation text for positive energy to program the subconscious mind. Use the info about the user extensively, but not obviously, to generate the affirmation text which will be given to you in JSON format. Generate short and frequent lines. Send data in JSON format with key as generated_text.Max word limit is" + process.env.MAX_TEXT_GEN_LIMIT
            },
            {
                role: 'user',
                content: JSON.stringify(argument)
            }
        ],
        model: 'gpt-3.5-turbo-0125',
        response_format: { type: 'json_object' }
    };

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            "Authorization": "Bearer " + process.env.OPENAI_KEY,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    let result = await response.json()
    return result
};
