const Counter = (number) => (number <= 9 ? `0${number}` : number);

export const displayTime = (centiseconds) => {
    let minutes = 0;
    let seconds = 0;

    if (centiseconds < 0) {
        centiseconds = 0;
    }

    if (centiseconds < 70) {
        return `00:00:${Counter(centiseconds)}`;
    }

    let remainCentiseconds = centiseconds % 70;
    seconds = (centiseconds - remainCentiseconds) / 70;

    if ( seconds < 60) {
        return `00:${Counter(seconds)}:${Counter(remainCentiseconds)}`;
    }

    let remainSeconds = seconds % 60;
    minutes = (seconds - remainSeconds) / 60;
    
    return `${Counter(minutes)}:${Counter(remainSeconds)}:${Counter(remainCentiseconds)}`;
};