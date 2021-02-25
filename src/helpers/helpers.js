export const toLowerCase = (str) => (str || "").toLowerCase();
export const getStorageItem = (key) => localStorage.getItem(key);
export const setStorageItem = (key, value) => localStorage.setItem(key, value);

export const getFormattedUserName = (name) => {
    let sliptArr = name.split(" ");
    let firstName = sliptArr[0];
    if (firstName.slice(-1) === ".") return firstName + " " + sliptArr[1];
    return firstName;
}
