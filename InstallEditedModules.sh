BASE='https://docs.google.com/uc?export=download&id='
DARKRAWTHEME='0B0PGb86yx1wDQjZjaURqakUzVFE'
LIGHTRAWTHEME='0B0PGb86yx1wDQjF3NDRXWVN3d2M'

mkdir .tmpxx

wget $BASE$DARKRAWTHEME -O dark-raw-theme.js
wget $BASE$LIGHTRAWTHEME -O light-raw-theme.js

mv dark-raw-theme.js light-raw-theme.js ./node_modules/material-ui/lib/styles/raw-themes/
