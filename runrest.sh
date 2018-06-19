docker run \
-e COMPOSER_CARD=${COMPOSER_CARD} \
-e COMPOSER_NAMESPACES=${COMPOSER_NAMESPACES} \
-e COMPOSER_AUTHENTICATION=${COMPOSER_AUTHENTICATION} \
-e COMPOSER_MULTIUSER=${COMPOSER_MULTIUSER} \
-e COMPOSER_PROVIDERS="${COMPOSER_PROVIDERS}" \
-e COMPOSER_DATASOURCES="${COMPOSER_DATASOURCES}" \
-v /home/matthew/github/commercial-paper-starter-kit/_localstore:/home/composer/.composer \
--name rest \
--network cp-stack-network \
-p 3000:3000 \
myorg/composer-rest-server


#  r7YGUiyrR1XgMTTVJ3LJrRyLmvA3INTp5lWS8XAUEEdQLcZF9at4umqKBwJ0cOQ4