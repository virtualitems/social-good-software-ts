import * as fs from 'fs';
import { File } from '../lib/files';


const content = `Social Good Software\n
Altru issues should not be holding you back from your mission.
Our mission is to help you focus less on tech problems and more on your cause.
Our primary focus is just Altru and Museums, Aquariums, Gardens, and Zoos and no one else!
With this focus, we can deliver more results in shorter windows of time without having to
put more stress on your current team.`;


describe('file manager', () =>
{

  // Arrange
  fs.writeFileSync('./tests/file.txt', content, 'utf-8');


  it('should read a file', function ()
  {
    // Arrange
    const fileManager = new File();

    // Act
    fileManager.read('./tests/file.txt');

    // Assert
    expect('string' === typeof fileManager.file).toBe(true);

  });

  it('should update a file', () =>
  {
    // Arrange
    const fileManager = new File();

    // Act
    fileManager.read('./tests/file.txt');

    const initialContent = fileManager.file;

    const newContent = initialContent + '\nThis is a new line of content.';

    fileManager.update(newContent);

    // Assert
    expect(fileManager.file).toBe(newContent);
    expect(fileManager.file).not.toBe(initialContent);
  });

  it('should delete a file', () =>
  {
    // Arrange
    const fileManager = new File();

    // Act
    fileManager.read('./tests/file.txt');

    fileManager.delete();

    // Assert
    expect(fileManager.file).toBe(null);
    expect(fs.existsSync('./tests/file.txt')).toBe(false);
  });

});