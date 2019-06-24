const FluentCalculator = {
    value: null,
    operation: null,

    valuesCount: 0,
    operationsCount: 0,

    operations: {
        plus(a, b) {
            return a + b;
        },
        minus(a, b) {
            return a - b;
        },
        times(a, b) {
            return a * b;
        },
        dividedBy(a, b) {
            return a / b;
        }
    },
    number(value) {
        this.valuesCount += 1;

        this.value = this.operation ? this.operation(this.value, value) : value;

        return this;
    },
    setOperation(operation) {
        this.operationsCount += 1;

        this.operation = operation;
    },

    get zero() {
        return this.number(0);
    },
    get one() {
        return this.number(1);
    },
    get two() {
        return this.number(2);
    },
    get three() {
        return this.number(3);
    },
    get four() {
        return this.number(4);
    },
    get five() {
        return this.number(5);
    },
    get six() {
        return this.number(6);
    },
    get seven() {
        return this.number(7);
    },
    get eight() {
        return this.number(8);
    },
    get nine() {
        return this.number(9);
    },
    get ten() {
        return this.number(10);
    },

    get plus() {
        this.setOperation(this.operations.plus);

        return this;
    },
    get minus() {
        this.setOperation(this.operations.minus);

        return this;
    },
    get times() {
        this.setOperation(this.operations.times);

        return this;
    },
    get dividedBy() {
        this.setOperation(this.operations.dividedBy);

        return this;
    }
};

FluentCalculator.__proto__.valueOf = function () {
    let value = this.value;

    if (this.valuesCount - this.operationsCount !== 1) {
        return undefined;
    }

    this.value = null;
    this.operation = null;
    this.valuesCount = 0;
    this.operationsCount = 0;

    return value;
};
