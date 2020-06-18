//MESIN HITUNG
//challenge 17
//buatlah class yang befungsi sebagai mesin hitung, memiliki kemampuan seperti dibawah ini
// 1 initial number
// 2 penambahan
// 3 penguranan
// 4 pembagian
// 5 perkalian
// 6 exponent
// 7 akar pangkat 2
// 8 dapat menghitung keliling dan luaslingkaran
//keyword gunakan 
//import export ES6 untuk menggunakan 2 file javascript
//metode chaining,class,import,export,ES6

class MesinHitung {
    //write code
    constructor() {
        this.x = 1;
    }

    add(number) {
        this.x += number;
        return this;
    }
    substract(number) {
        this.x -= number;
        return this;
    }

    divide(number) {
        this.x = this.x / number;
        return this;
    }
    multiply(number) {
        this.x *= number;
        return this;
    }
    squareRoot() {
        this.x = Math.sqrt(this.x, 2);
        return this;
    }
    square() {
        this.x **= 2;
        return this;
    }
    exponent(number) {
        this.x = Math.pow(this.x, number)
        return this;

    }
    result() {
        console.log(this.x);

    }

}
export default MesinHitung