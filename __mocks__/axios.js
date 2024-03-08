/* eslint-disable no-undef */
export default {
    get: jest.fn(() => Promise.resolve({ data: {} })),
    post: jest.fn(() => Promise.resolve({ data: {} })),
    // Add other methods you use like delete, put, patch, etc., if needed
};
