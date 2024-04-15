import axios from 'axios';
const API_KEY = 'AIzaSyAJfS5TdamOO7CSVWzqAJw5xUUT2neRGQg';

export default async function searchVideos(q, videoLocation, radius, order) {
    try {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                part: 'snippet',
                q: q,
                key: API_KEY,
                type: 'video',
                maxResults: 1,
                location: "37.795163718678964, -122.41781593138869",
                radius: radius,
                order: order
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error searching videos:', error);
        throw error;
    }
}