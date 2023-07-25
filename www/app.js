// app.js
document.addEventListener('DOMContentLoaded', (event) => {
    const fetchCoverButton = document.getElementById('fetchCoverButton');
    const coverImage = document.getElementById('coverImage');

    fetchCoverButton.addEventListener('click', () => {
        const { RestAPI } = Capacitor.Plugins;

        RestAPI.getLatestCover({ amount: 3 }).then(result => {
            if (result.covers && result.covers.length > 0) {
                coverImage.src = result.covers[0];
            }
        }).catch(error => {
            console.error(error);
        });
    });
});

