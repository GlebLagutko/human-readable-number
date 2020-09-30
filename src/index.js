module.exports = function toReadable(number) {
    let answer = '';
    let counter = 1;
    if (number === 0) {
        answer = 'zero';
        return answer;
    }
    while (number !== 0) {
        if (counter === 1) {
            let current = number % 100;
            number = Math.floor(number / 100);
            counter += 2;
            if (current < 20) {
                answer += NAME_DIGITS[current];
            } else {
                let a = current % 10;
                current -= a;
                if (a !== 0) {
                    answer += NAME_DIGITS[current] + ' ' + NAME_DIGITS[a];
                } else {
                    answer += NAME_DIGITS[current];
                }
            }
        } else {
            let buffer = answer;
            if (buffer !== '') {
                answer = NAME_DIGITS[number] + ' hundred ' + buffer;
            } else {
                answer = NAME_DIGITS[number] + ' hundred';
            }
            number = 0;
        }

    }

    return answer;

}

const NAME_DIGITS = {
    0: '',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
}

