export const saveSessionStorage = (key, value) => {
    sessionStorage.setItem(key, JSON.stringify(value))
}

export const getSessionStorage = (key) => {
    return JSON.parse(sessionStorage.getItem(key))
}

export const removeSessionStorage = (key) => {
    sessionStorage.removeItem(key)
}

export const saveLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
}

export const getLocalStorage = (key) => {
    return JSON.parse(localStorage.getItem(key))
}

export const removeLocalStorage = (key) => {
    localStorage.removeItem(key)
}

