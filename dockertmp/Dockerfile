FROM hyperledger/composer-rest-server:unstable
RUN npm install --production loopback-connector-mongodb passport-google-oauth2 ibmcloud-appid && \
npm cache clean --force && \
ln -s node_modules .node_modules