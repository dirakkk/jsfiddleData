(function () {
var primeDecomposerModule = angular.module('primeDecomposerModule',[]);
primeDecomposerModule.service('primeDecomposer', [ function () {


    /* 
     * Returns the list of prime factors (in ascending order) of the given integer.
     * Examples:
     *   primeFactorList(1) = []
     *   primeFactorList(7) = [7]
     *   primeFactorList(60) = [2, 2, 3, 5]
     */
    this.primeFactorList = function (n) {
        if (n < 1) throw "Argument error";

        var result = [];
        while (n != 1) {
            var factor = this.smallestFactor(n);
            result.push(factor);
            n /= factor;
        }
        return result;
    }


    /* 
     * Returns the smallest prime factor of the given integer.
     * Examples:
     *   smallestFactor(2) = 2
     *   smallestFactor(15) = 3
     */

    this.smallestFactor = function (n) {
        if (n < 2) throw "Argument error";

        if (n % 2 == 0) return 2;
        var end = Math.floor(Math.sqrt(n));
        for (var i = 3; i <= end; i += 2) {
            if (n % i == 0) return i;
        }
        return n;
    }


    /* 
     * Returns the prime factorization as a list of factor-power pairs, from the given factor list. The given list must be in ascending order.
     * Examples:
     *   toFactorPowerList([2, 2, 2]) = [[2, 3]]
     *   toFactorPowerList([3, 5]) = [[3, 1], [5, 1]]
     */
    this.toFactorPowerList = function (factors) {
        var result = [];
        var factor = factors[0];
        var count = 1;
        for (var i = 1; i < factors.length; i++) {
            if (factors[i] == factor) {
                count++;
            } else {
                result.push([factor, count]);
                factor = factors[i];
                count = 1;
            }
        }
        result.push([factor, count]);
        return result;
    }
}]);
}) ();