const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCvC4D8onUfXzvjTOM-dBfEA&part=snippet%2Cid&order=date&maxResults=10';
const contentVideo = null || document.querySelector('#content')

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6e35fa8720msh21b7d60c5fbc4a6p136db7jsnc582af4e6ac6',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlApi){
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

(async () => {
    try{
        const videos = await fetchData(API);
        let view = `
            ${videos.items.map(video =>`
                <div class="group relative">
                        <div 
                            class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                            <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
                        </div>
                        <div class="mt-4 flex justify-between">
                            <h3 class="text-sm text-black">
                                <a href="https://www.youtube.com/watch?v=${video.id.videoId}" target="_blank" aria-hidden="true" class="absolute inset-0"></a>
                                ${video.snippet.title}
                            </h3>
                        </div>
                </div>
            `).slice(0,8).join('')}
        `;
        contentVideo.innerHTML = view;
    }catch(err){
        console.log(err);
    }
})();

