module.exports = function getZerosCount(number, base) {
    // your implementation

    let actBase = base, cnt1 = 0, actNumber = number, cnt2 = 0, check;

    for (let i = 2; i <= base; i++) {
        if (actBase % i === 0) {
            cnt1 = 0;
            while (actBase % i === 0) {
                cnt1++;
                actBase = Math.floor(actBase / i);
            }
            check = i;
        }
    }

    while (actNumber / check > 0) {
        cnt2 += Math.floor(actNumber / check);
        actNumber = Math.floor(actNumber / check);
    }
    if (number > cnt2 / cnt1) {
        number = cnt2 / cnt1;
    }
    return Math.floor(number);

}
