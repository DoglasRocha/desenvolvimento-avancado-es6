const assert = require('assert');
const Math = require('../src/math.js');

let value = 0;

// descrição do comportamento
describe('Math class', () => {

    beforeEach(function() {
    // instruções a serem executadas antes de cada teste
        value = 0;
    })

    afterEach(function() {
        // instruções a serem executadas depois de cada teste
            value = 0;
        })

    // comportamento esperado
    it('Sum two numbers', function(done) {
        value = 6;
        // seta um novo valor para o tempo de teste, que por padrão é de 2000ms
        this.timeout(3000);
        const math = new Math();
        // verifica se os valores são iguais
        math.sum(value, 5, value => {
            assert.equal(value, 11);
            done();
        });
    });
    // quando se coloca only, ele executa apenas o teste com only
    // it.only('Multiply two numbers', function() {
    it('Multiply two numbers', function() {
        const math = new Math();
        //           func                valor esperado
        assert.equal(math.multiply(value, 5), 0)
    });
    // quando se utiliza skip, ele pula o teste
    it.skip('Divide two numbers', function() {})
});

// utiliza-se o done com funções assíncronas
// hooks: formas de executar códigos e evitar repetição