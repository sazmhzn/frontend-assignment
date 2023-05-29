import {useState, useEffect} from "react";

const [data, setData] = useState(null);

const url = 'https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '31ad4d710bmsh386467647829c47p113ab0jsnaca6afce2499',
		'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}