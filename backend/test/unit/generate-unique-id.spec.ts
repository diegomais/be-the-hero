import generateUniqueId from '../../src/utils/generate-unique-id';

describe('Generate Unique ID', () => {
  it('should generate an unique ID', () => {
    // Act
    const id = generateUniqueId();

    // Assert
    expect(id).toHaveLength(8);
  });
});
