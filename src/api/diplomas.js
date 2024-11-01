export const getDiploma = (code) => {
    return fetch(`${import.meta.env.VITE_API_URL}/diplomas/${code}`)
        .then((response) => response.json())
        .then(({ data, status }) => {
            return {
                data, status
            }
        })
}