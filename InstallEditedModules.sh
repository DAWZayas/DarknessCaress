BASE='https://docs.google.com/uc?export=download&id='
DARKRAWTHEME='0B0PGb86yx1wDQjZjaURqakUzVFE'
LIGHTRAWTHEME='0B0PGb86yx1wDQjF3NDRXWVN3d2M'
REACTCOVERFLOW='0B0PGb86yx1wDR2dabG1SZ2VlQWs'

mkdir .tmpxx

wget $BASE$DARKRAWTHEME -O dark-raw-theme.js
wget $BASE$LIGHTRAWTHEME -O light-raw-theme.js
wget $BASE$REACTCOVERFLOW -O react-coverflow.js

mv dark-raw-theme.js light-raw-theme.js ./node_modules/material-ui/lib/styles/raw-themes/
mv react-coverflow.js ./node_modules/react-coverflow/dist/
