export function addFilmToWatchList(id) {
    let watchList = localStorage.getItem("watchList") ? JSON.parse(localStorage.getItem("watchList")) : [];
    !watchList.includes(id) && watchList.push(id);
    localStorage.setItem('watchList', JSON.stringify(watchList))
}

export function deleteFilmFromWatchList(id) {
    let watchList = localStorage.getItem("watchList") ? JSON.parse(localStorage.getItem("watchList")) : [];
    watchList.includes(id) && watchList.splice(watchList.findIndex(movieId => movieId === id), 1);
    localStorage.setItem('watchList', JSON.stringify(watchList))
}

export function isOnWatchList(id) {
    // let watchList = localStorage.getItem("watchList") ? JSON.parse(localStorage.getItem("watchList")) : [];
    // return watchList.includes(id)
    return false
}
