export const splitTime = str => {
    var times = new Date(str).toLocaleString('chinese', { hour12: false }).split(' ');
    times[0] = times[0].substr(2);
    return times;
}