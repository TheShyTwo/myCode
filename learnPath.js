const path = require('path');

const filePath = '/user/local/bin/file.txt';

// Lấy tên tệp
const baseName = path.basename(filePath);
console.log('Base name:', baseName);

// Lấy tên thư mục
const dirName = path.dirname(filePath);
console.log('Directory name:', dirName);

// Lấy phần mở rộng tệp
const extName = path.extname(filePath);
console.log('Extension name:', extName);

// Nối các phần của đường dẫn
const joinedPath = path.join('/user', 'local', 'bin', 'file.txt');
console.log('Joined path:', joinedPath);

// Tạo đường dẫn tuyệt đối
const absolutePath = path.resolve('user', 'local', 'bin', 'file.txt');
console.log('Absolute path:', absolutePath);

// Chuẩn hóa đường dẫn
const normalizedPath = path.normalize('/user//local/../bin/file.txt');
console.log('Normalized path:', normalizedPath);

// Kiểm tra đường dẫn tuyệt đối
const isAbsolutePath = path.isAbsolute('/user/local/bin');
console.log('Is absolute path:', isAbsolutePath);

// Tạo đường dẫn tương đối
const fromPath = '/user/local/bin';
const toPath = '/user/local/bin/file.txt';
const relativePath = path.relative(fromPath, toPath);
console.log('Relative path:', relativePath);

// Phân tích và tái tạo đường dẫn
const parsedPath = path.parse(filePath);
console.log('Parsed path:', parsedPath);

const formattedPath = path.format(parsedPath);
console.log('Formatted path:', formattedPath);
