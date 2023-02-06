run:
	docker run -d -p 8080:8080 . --rm --name crypto
stop:
	docker stop crypto