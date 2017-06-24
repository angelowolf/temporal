# Utilizamos la imagen oficial de node 6
FROM node:6

# Instalamos vue cli
RUN npm install -g vue-cli 

# Now, our application will have a `package.json` that defines packages
# Let's go ahead and grab that so we can install some packages
# [1] This section is a bit strange looking at first, it is explained below
ADD package.json /tmp/package.json

# Then, we can move to the `/tmp` directory and install our packages
RUN cd /tmp && npm install

RUN cd /tmp && mkdir -p node_modules

# Our packages are installed, but they aren't much use to us in `/tmp`
# Let's move them to our application directory
#   (creating it if it doesn't exist)
RUN mkdir -p /opt/app && cp -a /tmp/node_modules /opt/app/
# Now we'll change our working directory
WORKDIR /opt/app

# And finally add all our files from our host machine
ADD . /opt/app/

# I'm also going to expose a port here, we'll use this later
EXPOSE 8080

# Finally, we'll run a command whenever we start this in a container
CMD ["npm", "run", "dev"]  