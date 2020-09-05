export function isOnWatchList(id) {
    if (localStorage.getItem("watchList")) {
        let watchList = localStorage.getItem("watchList") ? JSON.parse(localStorage.getItem("watchList")) : [];
        return watchList.includes(id)
    }
    return false
}
