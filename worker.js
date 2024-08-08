let callCount = 0;
let currentIndex = 0;

self.onmessage = function (e) {
    if (e.data.apiUrl) {
        fetchAndSliceData(e.data.apiUrl);
    }
};

function fetchAndSliceData(apiUrl) {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            updateDataPeriodically(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function updateDataPeriodically(data) {
    let initialData = data.slice(0, 10);

    function update() {
        if (currentIndex + 10 < data.length) {
            initialData.shift(); // Remove the first item
            initialData.push(data[currentIndex + 10]); // Add the next item from the original data
            currentIndex++;
        } else {
            currentIndex = 0;
            initialData = data.slice(0, 10); // Reset to the first 10 items
        }

        self.postMessage({ updatedData: initialData });

        const randomInterval = 5000; // 5 seconds
        setTimeout(update, randomInterval);
    }

    update();
}
