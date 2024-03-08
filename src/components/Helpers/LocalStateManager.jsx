export function SetL(name, data)
{
    localStorage.setItem(name,JSON.stringify(data))
}

export function GetL(name)
{
    return JSON.parse(localStorage.getItem(name))
}