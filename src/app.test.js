/* eslint-disable no-undef */
const greet = require('./app');

test('greeting a user', () => {
    expect(greet('Jean-Kevin')).toBe('Hello, Jean-Kevin.');
});

test('greeting null', () => {
    expect(greet()).toBe('Hello, my friend.');
    expect(greet(undefined)).toBe('Hello, my friend.');
    expect(greet(' ')).toBe('Hello, my friend.');
});

test('greeting CAPSLOCK name', () => {
    expect(greet('KENOBI')).toBe('HELLO, KENOBI!');
});

test('greeting 2 names', () => {
    expect(greet(['Jill', 'Jane'])).toBe('Hello, Jill and Jane.');
});

test('greeting more than 2 names', () => {
    expect(greet(['Amy', 'Brian', 'Charlotte'])).toBe(
        'Hello, Amy, Brian and Charlotte.'
    );
});

test('greeting few names in uppercase or not', () => {
    expect(greet(['Amy', 'BRIAN', 'Charlotte'])).toBe(
        'Hello, Amy and Charlotte. AND HELLO BRIAN !'
    );
    expect(greet(['Amy', 'BRIAN', 'CHARLOTTE'])).toBe(
        'Hello, Amy. AND HELLO BRIAN AND CHARLOTTE !'
    );
    expect(greet(['AMY', 'BRIAN', 'CHARLOTTE'])).toBe(
        'HELLO, AMY, BRIAN AND CHARLOTTE !'
    );
});

test('greeting in different languages (fr)', () => {
    expect(greet(['Marie'], 'fr')).toBe('Bonjour, Marie.');
    expect(greet(['MARIE'], 'fr')).toBe('BONJOUR, MARIE!');
    expect(greet(['Marie', 'Amy'], 'fr')).toBe('Bonjour, Marie et Amy.');
    expect(greet(['Marie', 'AMY'], 'fr')).toBe(
        'Bonjour, Marie. ET BONJOUR AMY !'
    );
    expect(greet(['MARIE', 'AMY'], 'fr')).toBe('BONJOUR, MARIE ET AMY !');
    expect(greet(['Marie', 'Brian', 'AMY'], 'fr')).toBe(
        'Bonjour, Marie et Brian. ET BONJOUR AMY !'
    );
    expect(greet(['Marie', 'AMY', 'Brian'], 'fr')).toBe(
        'Bonjour, Marie et Brian. ET BONJOUR AMY !'
    );
    expect(greet(['Marie', 'BRIAN', 'AMY'], 'fr')).toBe(
        'Bonjour, Marie. ET BONJOUR BRIAN ET AMY !'
    );
    expect(greet(['MARIE', 'BRIAN', 'AMY'], 'fr')).toBe(
        'BONJOUR, MARIE, BRIAN ET AMY !'
    );
});

test('greeting in different languages (en)', () => {
    expect(greet(['Marie'], 'en')).toBe('Hello, Marie.');
    expect(greet(['MARIE'], 'en')).toBe('HELLO, MARIE!');
    expect(greet(['Marie', 'Amy'], 'en')).toBe('Hello, Marie and Amy.');
    expect(greet(['Marie', 'AMY'], 'en')).toBe('Hello, Marie. AND HELLO AMY !');
    expect(greet(['MARIE', 'AMY'], 'en')).toBe('HELLO, MARIE AND AMY !');
    expect(greet(['Marie', 'Brian', 'AMY'], 'en')).toBe(
        'Hello, Marie and Brian. AND HELLO AMY !'
    );
    expect(greet(['Marie', 'AMY', 'Brian'], 'en')).toBe(
        'Hello, Marie and Brian. AND HELLO AMY !'
    );
    expect(greet(['Marie', 'BRIAN', 'AMY'], 'en')).toBe(
        'Hello, Marie. AND HELLO BRIAN AND AMY !'
    );
    expect(greet(['MARIE', 'BRIAN', 'AMY'], 'en')).toBe(
        'HELLO, MARIE, BRIAN AND AMY !'
    );
});

test('greeting in different languages (nl)', () => {
    expect(greet(['Marie'], 'nl')).toBe('Hallo, Marie.');
    expect(greet(['MARIE'], 'nl')).toBe('HALLO, MARIE!');
    expect(greet(['Marie', 'Amy'], 'nl')).toBe('Hallo, Marie en Amy.');
    expect(greet(['Marie', 'AMY'], 'nl')).toBe('Hallo, Marie. EN HALLO AMY !');
    expect(greet(['MARIE', 'AMY'], 'nl')).toBe('HALLO, MARIE EN AMY !');
    expect(greet(['Marie', 'Brian', 'AMY'], 'nl')).toBe(
        'Hallo, Marie en Brian. EN HALLO AMY !'
    );
    expect(greet(['Marie', 'AMY', 'Brian'], 'nl')).toBe(
        'Hallo, Marie en Brian. EN HALLO AMY !'
    );
    expect(greet(['Marie', 'BRIAN', 'AMY'], 'nl')).toBe(
        'Hallo, Marie. EN HALLO BRIAN EN AMY !'
    );
    expect(greet(['MARIE', 'BRIAN', 'AMY'], 'nl')).toBe(
        'HALLO, MARIE, BRIAN EN AMY !'
    );
});
