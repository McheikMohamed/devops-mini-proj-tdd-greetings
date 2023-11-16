/* eslint-disable no-undef */
const greet = require("./app");

test("greeting a user", () => {
    expect(greet("Jean-Kevin")).toBe("Hello, Jean-Kevin.");
});

test("greeting null", () => {
    expect(greet()).toBe("Hello, my friend.");
    expect(greet(undefined)).toBe("Hello, my friend.");
    expect(greet(" ")).toBe("Hello, my friend.");
});

test("greeting CAPSLOCK name", () => {
    expect(greet("KENOBI")).toBe("HELLO, KENOBI.");
});

test("greeting 2 names", () => {
    expect(greet(["Jill", "Jane"])).toBe("Hello, Jill and Jane.");
});

test("greeting more than 2 names", () => {
    expect(greet(["Amy", "Brian", "Charlotte"])).toBe(
        "Hello, Amy, Brian and Charlotte."
    );
});

test("greeting few names in uppercase or not", () => {
    expect(greet(["Amy", "BRIAN", "Charlotte"])).toBe(
        "Hello, Amy and Charlotte. AND HELLO BRIAN !"
    );
});

test("greeting in different languages (fr)", () => {
    expect(greet("Marie", "fr")).toBe("Bonjour, Marie.");
});

test("greeting in different languages (en)", () => {
    expect(greet(["Marie", "Amy"], "en")).toBe("Hello, Marie and Amy.");
});

test("greeting in different languages (nl)", () => {
    expect(greet(["Marie", "BRIAN", "Amy"], "nl")).toBe(
        "Hallo, Marie en Amy. EN HALLO BRIAN !"
    );
});
