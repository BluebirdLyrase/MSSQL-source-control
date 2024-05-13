const fs = require('fs');

const sourceFolderName = 'db';

exports.initFolder = () => {
  if (fs.existsSync(sourceFolderName)) {
    fs.rmdir(sourceFolderName, { recursive: true }, (err) => {
      if (err) {
        console.error('Error removing folder:', err);
      } else {
        console.log('Folder removed successfully');
      }
    });
  } else {
    console.log('Folder does not exist');
  }

  fs.mkdir(sourceFolderName, { recursive: true }, (err) => {
    if (err) {
      console.error('Error creating folder:', err);
    } else {
      console.log('Folder created successfully ' + sourceFolderName);
    }
  });
};

// exports.createFolder = async (path) => {
//   return await fs.mkdir(
//     `${sourceFolderName}/${path}`,
//     { recursive: true },
//     (err) => {
//       if (err) {
//         console.error('Error creating folder:', err);
//       } else {
//         console.log(
//           'Folder created successfully ' + `${sourceFolderName}/${path}`
//         );
//       }
//     }
//   );
// };

exports.createFile = (fileName, folderName, fileContent) => {
  const folderPath = `${sourceFolderName}/${folderName}`;
  const filePath = `${sourceFolderName}/${folderName}/${fileName}.sql`;
  const writeFile = () =>
    fs.writeFile(filePath, fileContent, (err) => {
      if (err) {
        console.error('Error creating file:', err);
      } else {
        console.log(`File created successfully ${filePath}`);
      }
    });
  fs.access(folderPath, fs.constants.F_OK, (err) => {
    if (err) {
      fs.mkdir(folderPath, { recursive: true }, (err) => {
        if (err) {
          console.error('Error creating directory:', err);
        } else {
          writeFile();
          console.log('Directory created successfully ' + folderPath);
        }
      });
    } else {
      writeFile();
      console.log('Directory already exists ' + folderName);
    }
  });
};
