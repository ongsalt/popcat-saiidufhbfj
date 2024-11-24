export type GroupState = {
    success: boolean,
    count: number,
    message: string,
    data: {
        desc: string,
        enable: boolean,
        id: number,
        title: string,
        total: number,
        url1: string,
        url2: string,
    }
}

export async function getState() {
    const data = await Promise.all(
        Array.from({ length: 25 }).map((_, i) => {
            // console.log(i)
            return fetch("https://stupidpop.onrender.com/api/pop/", {
                "headers": {
                    // "accept": "application/json, text/plain, */*",
                    // "accept-language": "th,en;q=0.9,en-GB;q=0.8,en-US;q=0.7",
                    "content-type": "application/json",
                    // "priority": "u=1, i",
                    // "sec-ch-ua": "\"Microsoft Edge\";v=\"131\", \"Chromium\";v=\"131\", \"Not_A Brand\";v=\"24\"",
                    // "sec-ch-ua-mobile": "?0",
                    // "sec-ch-ua-platform": "\"Windows\"",
                    // "sec-fetch-dest": "empty",
                    // "sec-fetch-mode": "cors",
                    // "sec-fetch-site": "cross-site",
                    // "Referer": "https://stupidpop-fe.vercel.app/",
                    // "Referrer-Policy": "strict-origin-when-cross-origin"
                },
                "body": `{"id":${i},"poptimes":${0}}`,
                "method": "POST"
            }).then(it => it.json()).catch(it => {
                // console.error(it)
            })
        })
    )

    return data.filter(it => it.success) as GroupState[]
}