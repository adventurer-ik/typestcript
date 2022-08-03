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
