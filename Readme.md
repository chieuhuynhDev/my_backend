# 1. Setup DB

`docker run --name my_db -e MYSQL_ROOT_PASSWORD=123456 -p 3308:3306 -d mysql:latest`

# 2. Khởi tạo Prisma: Chạy lệnh:

`npx prisma init`

# 3. Cấu hình schema.prisma: Mở file prisma/schema.prisma và chỉnh sửa như sau:

```shell
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}

model User {
  id       Int    @id @default(autoincrement())
  name     String
  email    String @unique
  password String
  createdAt DateTime @default(now())
```

# 4. Tạo bảng trong database: Chạy lệnh để áp dụng schema vào MySQL

`npx prisma migrate dev --name init`

CALL API -> Controller -> Service -> Prisma -> Database

GET: lay du lieu
POST: tao
PUT: sua
DELETE: xoa

GET /users
POST /users : tao users

===========================
prompt:

tôi là một developer. tôi mới tìm hiểu nodejs.
tôi muốn xây dựng backend với database là mysql, backend nodejs express prisma (package.json "type":"module",)

thiet ke database de implement duoc cac API trong hinh.
ouput mong muon: file schema.prisma voi database da thiet ke
giai thich cach bang, field va moi he lien giua chung

===============================
hay implement cac API noi tren theo mo hinh router -> controller -> service (goi prisma de tuong tac voi db)
