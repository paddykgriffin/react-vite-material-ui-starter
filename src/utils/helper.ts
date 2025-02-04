export function getFileNamefromURL(url:string):string {
    return url.substring(url.lastIndexOf('/') + 1)
}