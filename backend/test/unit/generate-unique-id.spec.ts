import generateUniqueId from '@/utils/generate-unique-id';

describe('Generate Unique ID', () => {
  it('should generate an unique ID', () => {
    // Act
    const id = generateUniqueId();

    // Assert
    expect(id).toHaveLength(8);
  });
});
