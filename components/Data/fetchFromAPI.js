const url = 'https://deezerdevs-deezer.p.rapidapi.com/infos';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '31ad4d710bmsh386467647829c47p113ab0jsnaca6afce2499',
		'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
	}
};

// async function getData(url){
// 	try {
// 		const response = await fetch(url, options);
// 		const result = await response.text();
// 		return result;
// 	} catch (error) {
// 		console.error(error);
// 	}
// }
const getData = async ()=>{
	let data = fetch(url, options);
	let parsedata =  await data.json();
	return parsedata;
}

export const fetchFromAPI = getData();
// export * from "./fetchFromAPI"