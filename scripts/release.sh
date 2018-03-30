set -e

if [[ -z $1 ]]; then
echo "Enter new version: "
read VERSION
else
VERSION=$1
fi

read -p "Releasing $VERSION - are you sure? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
echo "Releasing $VERSION ..."
echo "Releasing $RELEASE_TAG ..."
    # build
    # VERSION=$VERSION npm run build
    echo 'build done---'
    # commit
    git add -f \
        dist/*.js
    git commit -m "build: build $VERSION"
fi
