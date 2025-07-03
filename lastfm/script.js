async function getTopTracks() {
    const url = `http://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=phuongwj&api_key=9ef2bde13e24433d38533f77f6455206&format=json`;
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const responseJson = await response.json();
        document.getElementById("music-list").innerHTML = responseJson.toptracks.track.map(track => {
            return `<li>${track.name} by ${track.artist.name}</li>`;
        }).join('');
        console.log(responseJson);

    } catch (error) {
        console.log(error);
    }
}

getTopTracks();