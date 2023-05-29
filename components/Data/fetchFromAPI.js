import axios from 'axios';

const url = 'https://deezerdevs-deezer.p.rapidapi.com/infos';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '31ad4d710bmsh386467647829c47p113ab0jsnaca6afce2499',
		'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
	}
};
export const fetchFromAPI = async(url)=> {
 	const {data} = await axios.get('${url}',options);
	return data;
}

export * from './fetchFromAPI';


