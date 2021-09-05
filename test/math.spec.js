const assert = require('assert');
const Math = require('../src/math.js');
// importing chai
const expect = require('chai').expect;

let value = 0;

// descrição do comportamento
describe('Math class', () => {

    beforeEach(function() {
    // instruções a serem executadas antes de cada teste
        value = 0;
    });

    afterEach(function() {
        // instruções a serem executadas depois de cada teste
        value = 0;
    });

    // comportamento esperado
    it('Sum two numbers', function(done) {
        value = 6;
        // seta um novo valor para o tempo de teste, que por padrão é de 2000ms
        this.timeout(3000);
        const math = new Math();
        // verifica se os valores são iguais
        math.sum(value, 5, value => {
            /*
            assert with node
            assert.equal(value, 11);
            */
           // assert with chai
           expect(value).to.equal(11);
            done();
        });
    });
    // quando se coloca only, ele executa apenas o teste com only
    // it.only('Multiply two numbers', function() {
    it('Multiply two numbers', function() {
        const math = new Math();
        //           func                valor esperado
        expect(math.multiply(value, 5)).to.equal(0);
    });
    // quando se utiliza skip, ele pula o teste
    it.skip('Divide two numbers', function() {})

    it('Verifying if object has property', function() {
        const obj = {name: 'Doglas'};

        // verifying if object has property name AND verifying the value of the property
        expect(obj).to.have.property('name').to.equal('Doglas');
    });

    it('Verifying if two objects are equal', function() {
        const obj = {name: 'Doglas'};
        const obj2 = {name: 'Doglas'};

        expect(obj).to.deep.equal(obj2);
    })
});

// utiliza-se o done com funções assíncronas
// hooks: formas de executar códigos e evitar repetição