docker build --no-cache -f SQL\Dockerfile.PostgreSql -t phonebook/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t phonebook/app ../..
