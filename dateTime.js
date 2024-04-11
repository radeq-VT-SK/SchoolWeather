function getDate(dateTimeString) {
    // Create a new Date object from the provided string
    const dateObject = new Date(dateTimeString);

    // Extract date components
    const year = dateObject.getUTCFullYear();
    const month = dateObject.getUTCMonth() + 1; // Month is zero-based, so we add 1
    const day = dateObject.getDate();
    const weekDay = dateObject.getDay();
    const weekDays = ["nedeľa", "pondelok", "utorok", "streda", "štvrtok", "piatok"];
    const dayOfTheWeek = weekDays[weekDay];

    // Format month, day to have leading zeros if necessary
    const formattedMonth = month < 10 ? '0' + month : month;
    const formattedDay = day < 10 ? '0' + day : day;
    //const formattedHours = hours < 10 ? '0' + hours : hours;
    //const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    //const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;

    // Construct the date string in the desired format
    const formattedDate = `${dayOfTheWeek}, ${formattedDay}.${formattedMonth}.${year}`;

    // Return the formatted date string
    return formattedDate;
}

function getTime(dateTimeString) {
    // Create a new Date object from the provided string
    const dateObject = new Date(dateTimeString);

    // Extract time components
    const hours = dateObject.getHours();
    const minutes = dateObject.getMinutes();
    
    // Format time to have leading zeros if necessary
    const formattedHours = hours < 10 ? '0' + hours : hours;
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;

    // Construct the time string in the desired format
    const formattedTime = `${formattedHours}:${formattedMinutes}`;

    // Return the formatted time string
    return formattedTime;
}

// Example usage:
const dateTimeString = '2024-03-28T19:27:57Z';
const formattedDate = getDate(dateTimeString);
const formattedTime = getTime(dateTimeString);
console.log(formattedDate); // Output: "28.03.2024"
console.log(formattedTime); // Output: "19:27"
