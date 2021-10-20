const loggedIn = () => {
    return !!localStorage.getItem("token")
}

const logOut = () => {
    localStorage.removeItem("token")
}

export { loggedIn, logOut }
