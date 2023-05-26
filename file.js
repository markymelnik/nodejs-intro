const fs = require('fs/promises');

// Rename file

async function renameFile() {
  try {
    await fs.access('before.json');
    await fs.rename('before.json', 'after.json');
    console.log(`'before.json' changed to 'after.json'`);
  } catch (error) {
    try {
      await fs.rename('after.json', 'before.json');
      console.log(`'after.json' changed to 'before.json'`);
    } catch (error) {
      console.error(error);
      return;
    } 
  }
}

// Create file with content

const content = 'Calisthenics Workout';

async function createFile(fileName, content) {
  try {
    await fs.writeFile(fileName, content);
    console.log('file created successfully');
  } catch (error) {
    console.error('error creating file', error);
  }
}

// Append content to the end of a file

async function appendContentToFile() {
  try {
    const content = '- 5x5 Pullups\n- 5x10 Pushups';
    await fs.appendFile('workout.txt', content);
  } catch (error) {
    console.log('content unsuccessfully appended', error);
  }
}

// Delete file

async function checkAndDeleteFile(fileName) {
  try {
    await fs.access(fileName);
    await fs.unlink(fileName);
    console.log('file exists!');
    console.log('file deleted successfully');
    return true;
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.log('file does not exist!')
      return false;
    } else {
      console.error('error accessing or deleting files', error);
    }
  }
}

// Alternate between creating and deleting a file

async function addOrDeleteFile(fileName, content) {
  const fileExists = await checkAndDeleteFile(fileName);
  if (!fileExists) {
    await createFile(fileName, content);
    await appendContentToFile();
  }
}

// 

async function main() {
  try {
    await addOrDeleteFile('workout.txt', content+'\n\n').catch(console.error);
    await renameFile().catch(console.error);
  } catch (error) {
    console.error(error);
  }
}

main();
