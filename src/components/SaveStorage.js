export const SaveStorage = (key, element) => {
    let storage = JSON.parse(localStorage.getItem(key));

    if (Array.isArray(storage)){
        storage.push(element);
    } else {
        storage = [element];
    }
    localStorage.setItem(key, JSON.stringify(storage));

}