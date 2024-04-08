const dotenv = require('dotenv')
const mysql = require('mysql')

// Tải các biến môi trường từ file .env
dotenv.config()

// Tạo kết nối tới cơ sở dữ liệu MySQL
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
})

// Kết nối với cơ sở dữ liệu
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err)
    return
  }
  console.log('Connected to MySQL database')
})

// Thực hiện các thao tác với cơ sở dữ liệu tại đây...

// Đóng kết nối khi hoàn tất
connection.end()
