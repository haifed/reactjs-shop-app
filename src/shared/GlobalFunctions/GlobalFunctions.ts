export function truncate(str: string) {
    return str.length > 50 ? str.substring(0, 50) + "..." : str;
};
export const unique = (arr: any) => {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (newArr.findIndex((item) => arr[i] == item) === -1) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
};
export const findMax = (arr: any, prop: any) => {
    let i;
    let max = arr[0][prop];
    for (i = 1; i < arr.length; i++) {
        if (arr[i].price > max) max = arr[i][prop];
    }
    return max;
};
export function uppercaseLetter(value: string, arg: string): any {
    if (arg === 'everyfirst') {
        let arr = value.split(" ");
        let newValue = arr
            .map((item: any, index: any) => {
                return item.charAt(0).toUpperCase() + item.substring(1, item.length).toLocaleLowerCase();
            })
            .join(" ");
        return newValue;
    }
    if (arg === 'first') {
        let newStr = value.charAt(0).toUpperCase() + value.substring(1, value.length).toLowerCase();
        return newStr
    }
}