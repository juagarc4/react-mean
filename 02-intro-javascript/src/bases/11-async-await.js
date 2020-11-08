// async

// const getImage = async () => {
//     return 'http://url.com';
// }
//
// getImage().then(console.log)

// await allows us to manage the promise as it were syncronous.
// Also, it waits until the promise has been resolved.
// Notice: Await must be used into a function declared as async
const getImage = async () => {
    try {
        const apiKey = 'apRdaKcwOzqVBsDIpZE2MzSssnZXNexp';
        // Await wait until the promise fetch has ended. So, "request" is not more a promise but a Response.
        const request = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

        const {data} = await request.json();

        const {url} = data.images.original;
        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
    }catch (error) {
        // manage error
        console.error(error);
    }
}

getImage();