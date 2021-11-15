// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

test('(111)111-1111 is a valid phone number', () => {
  expect(functions.isPhoneNumber('(111)111-1111')).toBe(true);
});

test('x is not a valid phone number', () => {
  expect(functions.isPhoneNumber('x')).toBe(false);
});

test('(888)888-8888 is a valid phone number', () => {
  expect(functions.isPhoneNumber('(888)888-8888')).toBe(true);
});

test('123edcfvg is not a valid phone number', () => {
  expect(functions.isPhoneNumber('123edcfvg')).toBe(false);
});

test('(111)111-1111 is not a valid email address', () => {
  expect(functions.isEmail('(111)111-1111')).toBe(false);
});

test('1111@gmail.com is a valid email address', () => {
  expect(functions.isEmail('1111@gmail.com')).toBe(true);
});

test('sdafv is not a valid email address', () => {
  expect(functions.isEmail('sdafv')).toBe(false);
});

test('xyz80@cx.org is a valid email address', () => {
  expect(functions.isEmail('xyz80@cx.org')).toBe(true);
});

test('(111)111-1111 is not a valid strong password', () => {
  expect(functions.isStrongPassword('(111)111-1111')).toBe(false);
});

test('xxxx12_ is a valid strong password', () => {
  expect(functions.isStrongPassword('xxxx12_')).toBe(true);
});

test('XYZ___W is a valid strong password', () => {
  expect(functions.isStrongPassword('XYZ___W')).toBe(true);
});

test('123edcfvg is not a valid strong password', () => {
  expect(functions.isStrongPassword('123edcfvg')).toBe(false);
});

test('111/11/1111 is not a valid date', () => {
  expect(functions.isDate('111/11/1111')).toBe(false);
});

test('11/11/1111 is a valid date', () => {
  expect(functions.isDate('11/11/1111')).toBe(true);
});

test('1/1/1111 is a valid date', () => {
  expect(functions.isDate('1/1/1111')).toBe(true);
});

test('11/111/1111 is not a valid date', () => {
  expect(functions.isDate('11/111/1111')).toBe(false);
});

test('#aaaaar is not a valid hex color', () => {
  expect(functions.isHexColor('#aaaaar')).toBe(false);
});

test('#df2 is a valid hex color', () => {
  expect(functions.isHexColor('#df2')).toBe(true);
});

test('#ea32a2 is a valid hex color', () => {
  expect(functions.isHexColor('#ea32a2')).toBe(true);
});

test('#aaaaa is not a valid hex color', () => {
  expect(functions.isHexColor('#aaaaa')).toBe(false);
});