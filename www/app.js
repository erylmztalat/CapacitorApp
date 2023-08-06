import { RestAPI } from 'capacitor-restapi-plugin';

document.addEventListener('DOMContentLoaded', (event) => {
    const fetchCoverButton = document.getElementById('fetchCoverButton');
    const coverImage = document.getElementById('coverImage');

    fetchCoverButton.addEventListener('click', async () => {
        console.log('Fetch Cover button clicked'); // Add this line
        try {
            const result = await RestAPI.getLatestCover({ amount: 3 });
            console.log('Result received:', result); // Add this line
            if (result.covers && result.covers.length > 0) {
                console.log('Setting image src to', result.covers[0]); // Add this line
                coverImage.src = result.covers[0];
            }
        } catch(error) {
            console.error('An error occurred:', error); // Add this line
        }
    });
});
