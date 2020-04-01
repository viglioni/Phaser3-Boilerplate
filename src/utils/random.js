/** randInt 
 * @param from (int)
 * @param to (int)
 * @param diff (int)
 * @return n (int) such that n != diff and from <= n <= to
 */

/** prob
 * @param desirable (float) event in %, i.e. from 0 to 100
 * @returns (bool) if the desirable event happened or not
 */

const random = () =>  {
    const randInt = (from, to, diff=Infinity) => {

        const range = to - from;
        const n = Math.floor(Math.random()*10*range)%range + from + 1;
        if(n === diff) return randInt(from, to, diff)
        else return n
    }

    const rand =(from, to, diff=Infinity) => {
        const factor = 10**Math.max( String(from).length, String(to).length, String(diff).length);
        return randInt(from*factor, to*factor, diff*factor)/factor;
    }

    const prob = (desirable) => {
	const n = randInt(0,100);
	return n <= desirable;
    }

    return {randInt, rand, prob}
};

export default random;
