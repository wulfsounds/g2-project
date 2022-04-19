module.exports = { getDate, convertTimestamp };

function getDate() {
    const today = new Date();

    const options = {
        weekday: "long",
        day : "numeric",
        month: "long"
    }

    return today.toLocaleString("en-US",options)
}

function convertTimestamp(timestamp) {
    const options = {
        month: 'long',
        day: 'numeric'
    }

    // convert timestamp: https://stackoverflow.com/questions/24170933/convert-unix-timestamp-to-date-time-javascript
    const date = new Date(timestamp*1000);
    const convertedDate = date.toLocaleString('en-US', options);

    return convertedDate;
}
