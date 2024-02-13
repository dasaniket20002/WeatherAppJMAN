export function unixTo24hr(unixTime: number) {
    // Convert Unix time to milliseconds
    var unixMilliSeconds = unixTime * 1000;
    
    // Create a new Date object
    var date = new Date(unixMilliSeconds);
    
    // Get hours, minutes, and seconds
    var hours = ("0" + date.getUTCHours()).slice(-2);
    var minutes = ("0" + date.getUTCMinutes()).slice(-2);
    var seconds = ("0" + date.getUTCSeconds()).slice(-2);
    
    // Return time in 24-hour format
    return hours + ":" + minutes + ":" + seconds;
}