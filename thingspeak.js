window.onload = function() {
    // Replace YOUR_CHANNEL_ID and YOUR_READ_API_KEY with your actual ThingSpeak Channel ID and Read API Key
    var channelID = '1955200';
    var apiKey = '110V5UEMI5RG13JM';
    var fieldCount = 8; // Number of fields to read

    // Make AJAX request to ThingSpeak API
    
    const url = `https://api.thingspeak.com/channels/${channelID}/feeds.json?api_key=${apiKey}&results=1`;
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
            if (this.status == 200) {
                updateFields(JSON.parse(this.responseText));
            } else {
                console.error('Error fetching data:', this.status);
            }
        }
    };
    xhttp.open('GET', url, true);
    xhttp.send();
    

    function formatField(fieldIndex, value) {
        switch (fieldIndex) {
            case 1:
                return `${value}°C`;
            case 2:
                return `${value} hPa`;
            case 3:
                return `${value}%`;
            case 4:
                return `${value} mm`;
            case 5:
                return `${value} km/h`;
            case 6:
                return mapToCompassShortcut(value);
            case 7:
                return `${value}%`;
            case 8:
                return `${value}°C`;
            default:
                return `${value}`;
        }
    }
    
    
    function updateFields(data) {
        if (data.feeds.length > 0) {
            const latestData = data.feeds[0];
            for (let i = 1; i <= fieldCount; i++) {
                let fieldValue = latestData[`field${i}`];
                fieldValue = formatField(i, fieldValue);
                document.getElementById(`field${i}-value`).textContent = fieldValue;
            }
            
        } else {
            console.error('No data available');
        }
        let date = getDate(data.feeds[0].created_at);
        document.getElementById(`date-value`).textContent = date;
        let time = getTime(data.feeds[0].created_at);
        document.getElementById(`time-value`).textContent = time;
    }
    
    function mapToCompassShortcut(number) {
        const compassShortcuts = ["S", "SW", "W", "NW", "N", "NE", "E", "SE"];
        return compassShortcuts[number];
    }
}


