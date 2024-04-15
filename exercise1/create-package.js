const fs = require('fs');
const path = require('path');

const DIFF_FILENAME = 'file_diff.txt';
const ADDED_DIR = 'deployPackage/added/';
const REMOVED_DIR = 'deployPackage/removed/';

const moveFileToDir = (fileFullPath, destinationDir) => {
  if (!fs.existsSync(destinationDir)) {
    fs.mkdirSync(destinationDir, { recursive: true });
  }
  const destinationFile = path.join(destinationDir, path.basename(fileFullPath));

  fs.copyFile(fileFullPath, destinationFile, (err) => {
    if (err) {
      console.error('Error copying file:', err);
      return;
    }
    console.log(destinationFile + ' copied successfully!');
  });
}

fs.readFile(DIFF_FILENAME, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  const fileContent = data.split('\n');
  const addedFiles = [];
  const removedFiles = [];

  fileContent.forEach(line => {
    if (line.startsWith('M') || line.startsWith('A')) {
      const fileFullPath = line.split('\t')[1];
      addedFiles.push(path.basename(fileFullPath));
      moveFileToDir(fileFullPath, ADDED_DIR);
    } else if (line.startsWith('R') || line.startsWith('D')) {
      const fileFullPath = line.split('\t')[1];
      removedFiles.push(path.basename(fileFullPath));
      moveFileToDir(fileFullPath, REMOVED_DIR);
    }
  });

  // create added.txt
  fs.writeFile('added.txt', addedFiles.join('\n'), err => {
    if (err) {
      console.error('Error writing to added.txt:', err);
      return;
    }
    console.log('Added files written to added.txt');
  });

  // create removed.txt
  fs.writeFile('removed.txt', removedFiles.join('\n'), err => {
    if (err) {
      console.error('Error writing to removed.txt:', err);
      return;
    }
    console.log('Removed files written to removed.txt');
  });
});
