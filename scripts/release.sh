set -e

if [[ -z $1 ]]; then
echo "Enter new version: "
read -r VERSION
else
VERSION=$1
fi

read -p "Releasing $VERSION - are you sure? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
echo "Releasing $VERSION ..."
    # build
    VERSION=$VERSION npm run build && npm run deploy:docs
    # commit
    git add -A
    git add -f \
        dist/ \
        lib/
    git commit -m "build: build $VERSION"

     # updata tag version
    npm version "$VERSION" --message "build: release $VERSION"
    echo " $RELEASE_TAG ..."

    git push origin refs/tags/v$VERSION
    git push
    # npm
    npm publish
fi

# echo "tag is   $RELEASE_TAG"
# git add -f \
#     lib/**/*
# git commit -m "auto build"
# git push origin $TRAVIS_BRANCH
