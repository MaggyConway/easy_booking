#!/bin/bash

# We need to install dependencies only for Docker
[[ ! -e /.dockerenv ]] && exit 0

set -xe

# Install git and php extensions
apt-get update -y
apt-get install -y \
  git \
  libpng-dev \
  libzip-dev \
  zip \
  rsync \

# Install composer
cd ~
curl -sS https://getcomposer.org/installer -o composer-setup.php
php composer-setup.php  --version=1.10.19 --install-dir=/usr/local/bin --filename=composer

# Configure and install php extensions
docker-php-ext-configure zip --with-libzip
docker-php-ext-install gd zip bcmath pdo_mysql