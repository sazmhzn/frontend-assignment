const url = 'https://deezerdevs-deezer.p.rapidapi.com/infos';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '31ad4d710bmsh386467647829c47p113ab0jsnaca6afce2499',
		'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
	}
};

async function getData(url){
		const response = await fetch(url, options);

		const result = await response.json();
		// console.log("eerer", await result)
		const final_result = await result;
		return final_result
}

// fetchFromAPI = await getData(url);


export const fetchFromAPI = getData(url);
// export * from "./fetchFromAPI"