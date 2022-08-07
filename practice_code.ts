//  # 3.4 실습
type Player<E> = {
    name: string;
    extraInfo: E;
};

// type IkPlayer = Player<{ favFood: string }>;

type Extra = {
    favFood: string;
};
type IkPlayer = Player<Extra>;

const ik: IkPlayer = {
    name: 'ik',
    extraInfo: {
        favFood: 'cheonggukjang',
    },
};

// # 4.1 실습
/**
 * Words 타입의 key값이 string만을 property로 가지는 object라는 뜻
 * 그리고 그 key의 value값도 string.
 * key (string): value (string)
 *
 * object의 type을 선언 해야 하는 상황에서 쓸 수 있음
 * 이 object는 제한된 양의 property 만을 가질 수 있고,
 * property에 대해서 미리 알지 못하지만 타입만 알고 있을 때 쓰면 됨.
 */
type Words = {
    [key: string]: string;
};

// 위 Words type 테스트
let test: Words = {
    ik: 'ts master',
};

class Dict {
    private words: Words;
    /**
     * constructor가 words를 지정해주기를 원하지 않는 상황에서 그냥 initializer 없이 바로 쓰면 에러가 남.
     * 그래서 아래에 constructor에서 수동으로 초기화를 해주어야 함.
     */
    constructor() {
        this.words = {};
    }
    add(word: Word) {
        if (this.words[word.term] === undefined) {
            this.words[word.term] = word.def;
        }
    }
    def(term: string) {
        return this.words[term];
    }
    print() {
        return this.words;
    }
}

class Word {
    constructor(
        // readonly를 붙여주면, 접근이 가능하지만, 수정은 불가능하게 함.
        public readonly term: string,
        public def: string,
    ) {}
}

const kimchi = new Word('kimchi', '한국 전통 음식 - 배추');
const dict = new Dict();

dict.add(kimchi);
dict.def('kimchi');

console.log(dict.def('kimchi'));
console.log(dict.print());

// # 4.2 실습
// interface 키워드와 type 키워드를 구현해보고 둘의 차이점을 확인해보자.
// interface 방식
interface User {
    name: string;
}

interface Player1 extends User {
    num: number;
}

const ik2: Player1 = {
    name: 'ik',
    num: 27,
};

// type 방식
type User2 = {
    name: string;
};

type Player2 = User2 & {
    num: number;
};

// # 4.5 실습

interface SStorage<T> {
    // key가 제한되지 않은 오브젝트 정의
    [key: string]: T;
}

class LocalStorage<T> {
    private storage: SStorage<T> = {};
    set(key: string, value: T) {
        this.storage[key] = value;
    }
    remove(key: string) {
        delete this.storage[key];
    }
    get(key: string): T {
        return this.storage[key];
    }
}
// ↑ 제네릭(T)을 class로 보내고, class는 제네릭(T)을 interface로 보낸 뒤에 interface는 generic을 사용하는 모습

const stringsStorage = new LocalStorage<string>();
stringsStorage.get('ketty');
stringsStorage.set('Hello', 'How are you');

const booleansStorage = new LocalStorage<boolean>();
booleansStorage.get('noopy');
