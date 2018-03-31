set -e

# if [[ -z $1 ]]; then
# echo "Enter new version: "
# read VERSION
# else
# VERSION=$1
# fi

# read -p "Releasing $VERSION - are you sure? (y/n) " -n 1 -r
# echo
# if [[ $REPLY =~ ^[Yy]$ ]]; then
# echo "Releasing $VERSION ..."
# echo "tag $RELEASE_TAG ..."
#     # build
#     # VERSION=$VERSION npm run build
#     # updata version
#     npm version $VERSION
#     # commit
#     git add -f \
#         dist/*.js
#     git commit -m "build: build $VERSION"
#     git push
# fi
echo "tag is $1 $TRAVIS_BRANCH"
git add -f \
    lib/**/*
git commit -m "auto build"
git push origin $TRAVIS_BRANCH
