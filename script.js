let pointHome = 0
let pointGuest = 0


let homeEl = document.getElementById("home-score")
let guestEl = document.getElementById("guest-score")

function scoreHome(point) {
    pointHome += point
    homeEl.textContent = pointHome
}

function scoreGuest(point) {
    pointGuest += point
    guestEl.textContent = pointGuest
}

function resetScore() {
    pointHome = 0
    pointGuest = 0
    homeEl.textContent = pointHome
    guestEl.textContent = pointGuest
}
