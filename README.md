# type_script_study_backend

# Env 설정
PORT= <br>
MYSQL_USERNAME= <br>
MYSQL_PASSWORD= <br>
MYSQL_DATABASE= <br>
MYSQL_HOST= <br>
MYSQL_PORT=3306 <br>

# 테이블생성
ts-node ./src/migrations/create-table.ts

# 스키마생성
ts-node ./src/migrations/create-schema.ts

# REF
https://sequelize.org/docs/v6/other-topics/typescript/#requesting-a-model-class
