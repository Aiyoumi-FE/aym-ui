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
    # build
    VERSION=$VERSION npm run build && npm run deploy:docs
    # updata version
    npm version $VERSION
    echo " $RELEASE_TAG ..."

    # commit
    git add -A
    git add -f \
        dist/**/* \
        lib/**/*
    git commit -m "build: build $VERSION"
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
