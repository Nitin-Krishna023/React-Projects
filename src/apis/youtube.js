import axios from 'axios';

const KEY = 'AIzaSyArGN30iFoz2LwRlxzGADhtng-M1779Dds';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		type: 'video',
		maxResults: 5,
		key: KEY
	}
});
