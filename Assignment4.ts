/**
 * Using what you have learned so far, write the call signatures for two functions:
 * last(arr): 이 함수는 array의 마지막 아이템을 리턴해야 합니다.
 * prepend(arr, item): 이 함수는 array의 시작에 아이템을 넣고, 리턴해야 합니다.
 */

/////////////////////////////////////////////////////////////////////
/** 내가 짠 저질 소스 ^^ */
// 1번 last 함수
function last1<T>(a: T[]) {
    return a[a.length - 1];
}

const test1 = last1([1, 2, 3, 4]);
console.log(test1);

// 2번 prepend 함수*
type Prepend1 = {
    <T, Y>(a: T[], b: Y): T;
};

const prepend1: Prepend1 = (arr, item) => {
    arr.unshift(item);
    return arr[0];
};

const a = prepend1([1, 2, 3], 8);
console.log(a);
/////////////////////////////////////////////////////////////////////

/** 니꼬 선생 답안지 */
// Last
type Last = <T>(items: T[]) => T;
const last: Last = (items) => items[items.length - 1];
const lastItem = last([1, 2, 3, 4, 5]);
console.log(lastItem);

// Prepend
type Prepend = <T>(items: T[], item: T) => T[];
const prepend: Prepend = (items, item) => [item, ...items];
const items = [1, 2, 3, 4, 5];
const newItems = prepend(items, 0);

console.log(newItems);
