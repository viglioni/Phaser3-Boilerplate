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

const random = {
    randInt: (from, to, diff) => {
        diff = diff | Infinity;
        let range = to - from;
        let n = diff;
        while(n === diff)
            n = Math.floor(Math.random()*10*range)%range + from + 1;
        return n;
    },

    rand: (from, to, diff) => {
        diff = diff | Infinity;
        let factor = 10**Math.max( String(from).length, String(to).length, String(diff).length);
        return this.a.randInt(from*factor, to*factor, diff*factor)/factor;
    },

    prob: (desirable) => {
	let n = this.a.randInt(0,100);
	return n <= desirable;
    }
 
};

export default random;
