# Remove old main.js
rm public/main.js -f
rm public/main.less -f
# Concatenate all js files
find public/assets/config.jsx public/assets/shared public/assets/components public/assets/routes.jsx | grep '.jsx' | while read file; do cat $file >> public/main.js; done;
# Concatenate all css files
find public/assets/config.less public/assets/shared public/assets/components | grep '.less' | while read file; do cat $file >> public/main.less; done;
# Start server
node index.js
