const Math = require('../src/math.js');
// importing chai
const expect = require('chai').expect;
// importing sinon
const sinon = require('sinon');

let value = 0;

// descrição do comportamento
describe('Math class', () => {

    // hooks
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
        const math = new Math();

        value = 6;
        // seta um novo valor para o tempo de teste, que por padrão é de 2000ms
        this.timeout(3000);
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
        const math = new Math();

        const obj = {name: 'Doglas'};

        // verifying if object has property name AND verifying the value of the property
        expect(obj).to.have.property('name').to.equal('Doglas');
    });

    it('Verifying if two objects are equal', function() {
        const math = new Math();
        
        const obj = {name: 'Doglas'};
        const obj2 = {name: 'Doglas'};

        expect(obj).to.deep.equal(obj2);
    });

    it('Calls res with sum and index values', function() {
        const math = new Math();
        
        const req = {};
        const res = {
            load: sinon.spy()
        }

        // adding to already created method
        /* sinon.spy(object, 'method') */
        // adding a customized return to the spy
        /* sinon.stub(obj, 'method').returns('thing to return') */
        // returning the method to its original implementation
        /* obj.restore() */

        math.printSum(req, res, 5, 5);

        expect(res.load.calledOnce).to.be.true;
        // verifying if the response was loaded in the method
    })
});

// utiliza-se o done com funções assíncronas
// hooks: formas de executar códigos e evitar repetição