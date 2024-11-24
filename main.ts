function wait(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


async function main() {
    // let validIds = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28]
    let n = 10
    while (true) {
        for (let i = 0; i < 6; i++) {
            fetch("https://stupidpop.onrender.com/api/pop/", {
                "headers": {
                    "accept": "application/json, text/plain, */*",
                    "accept-language": "th,en;q=0.9,en-GB;q=0.8,en-US;q=0.7",
                    "content-type": "application/json",
                    "priority": "u=1, i",
                    "sec-ch-ua": "\"Microsoft Edge\";v=\"131\", \"Chromium\";v=\"131\", \"Not_A Brand\";v=\"24\"",
                    "sec-ch-ua-mobile": "?0",
                    "sec-ch-ua-platform": "\"Windows\"",
                    "sec-fetch-dest": "empty",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-site": "cross-site",
                    "Referer": "https://stupidpop-fe.vercel.app/",
                    "Referrer-Policy": "strict-origin-when-cross-origin"
                },
                "body": `{"id":${10},"poptimes":${18}}`,
                "method": "POST"
            }).then(res => res.json()).then(text => console.log(text))
            await wait(100);
            // const json = await res.json()
        }
        // console.log(json)

        // }
        // n+= 1000;
        await wait(1600);
    }
}

main()