// перетворюємо обєкт searchParams в строку

export default function searchParamsStringify(searchParams) {
    let queryString = '';
    for (let key in searchParams) {
    queryString += `${key}=${searchParams[key]}&`;
    }
    return queryString = queryString.slice(0, -1); // удалить последний символ &
}