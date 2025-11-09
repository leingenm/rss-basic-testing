import { mockOne, mockTwo, mockThree, unmockedFunction } from './index';

jest.mock('./index', () => {
  const originalModule =
    jest.requireActual<typeof import('./index')>('./index');

  return {
    ...originalModule,
    mockOne: jest.fn(() => 'mockOne'),
    mockTwo: jest.fn(() => 'mockTwo'),
    mockThree: jest.fn(() => 'mockThree'),
  };
});

describe('partial mocking', () => {
  let spy: jest.SpyInstance;

  beforeEach(() => {
    spy = jest.spyOn(console, 'log');
  });

  afterEach(() => {
    spy.mockClear();
  });

  afterAll(() => {
    jest.unmock('./index');
  });

  test('mockOne, mockTwo, mockThree should not log into console', () => {
    // Write your test here
    mockOne();
    mockTwo();
    mockThree();
    expect(spy).not.toHaveBeenCalled();
  });

  test('unmockedFunction should log into console', () => {
    // Write your test here
    unmockedFunction();
    expect(spy).toHaveBeenCalled();
  });
});
