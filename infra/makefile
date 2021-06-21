explain:
	echo "このMakefileはdocker-compose の操作を楽にするものです"
build:
	docker-compose build --no-cache --force-rm
up:
	docker-compose up -d
init:
	@make build
	@make up
down:
	docker-compose down
destroy:
	docker-compose down --rmi all --volumes
remake:
	@make destroy
	@make init
stop:
	docker-compose stop
start:
	docker-compose start
restart:
	@make down
	@make up
exec-next:
	docker-compose exec next bash
exec-express:
	docker-compose exec express bash
exec-mysql:
	docker-compose exec mysql bash
exec-redis:
	docker-compose exec redis bash

sql:
	docker-compose exec mysql bash -c 'mysql -u $$MYSQL_USER -p$$MYSQL_PASSWORD $$MYSQL_DATABASE'