export const getUsers = () => {
    const url = 'https://api.github.com/repositories';
    return  fetch(url).then((response) => response.json())
}