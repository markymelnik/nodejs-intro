import fs from 'fs/promises';

async function readAndWriteFile() {
  try {
    const first = await fs.readFile('./first-txt', 'utf-8');
    const second = await fs.readFile('./second-txt', 'utf-8');
    await fs.writeFile('/result.txt',`Result:\n${first}\n${second}`);
  } catch (err) {
    console.error(err);
  }
}

readAndWriteFile();
