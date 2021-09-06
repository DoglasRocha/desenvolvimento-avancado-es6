class CustomError extends Error {
    constructor({ message, data }) {
        super(message);
        this.data = data;
    }
}

const myError = new CustomError({ message: 'deu erro ai irmao',
                                 data: {
                                     type: 'Server error'
                                 }});

try {
    const name = 'Doglas';
    throw myError;
} catch(err) {
    if (err.data.type === 'Server error') {
        // do something
    } else {
        // do other thing
    }
    console.log(err);
} finally {
    console.log('Keep going!!');
}