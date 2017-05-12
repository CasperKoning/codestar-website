<img align=center src=https://cloud.githubusercontent.com/assets/4116708/12473911/e67fdd44-c016-11e5-9c21-5714e07549fe.png width=450 />

*Passionate programmers standing to make a change*

---

# Howto

## Installing / Upgrading

`brew install imagemagick` (once per computer)

Install node 7.10.0 and npm 4.2.0

`npm update`

`npm install`

## Developing

`npm run dev`

## Add a team member

Keep in mind the way of working around branching.

* Add an object to the array in app/data/team.json with these properties:
```JavaScript
{
    "name": "FirstName",
    "job": "Front-end Developer",
    "tagline": "“A tagline”",
    "bio": "A bio",
    "image": "image_name.jpg"
}
```
* Add an image with the name specified in the object under app/img/Team. At least JPEG and PNG work. A resolution of 144 x 144px is adequate.

# Development

Our base branch is develop, from there we create feature branches.  
We create pull requests from these feature branches.  
The master branch represents the stable version deployed to http://www.codestar.nl

To make changes:

1. Checkout develop branch
2. Create new feature branch
3. Make changes, test locally and commit
4. Push feature branch and create pull request
5. After merge, deploy develop branch to [test](#test).
6. Create merge request from develop to master.
7. After merge, deploy master branch to [production](#production).

For issues see: https://github.com/code-star/codestar-website/issues

# Deploying

## Test
`build/deploy_to_test.sh` deploys your current branch to http://www.codestar.nl/codestar-website

This script compiles your current branch and commits that to the `gh-pages` branch of this repository.

## Production

`build/deploy_to_production.sh` deploys the `master` branch to http://www.codestar.nl.

This script pushes the compiled website to [this repository](https://github.com/code-star/code-star.github.io#master), make sure you have write access to it.

## Continuous Deployment

Builds are run on https://circleci.com/gh/code-star/codestar-website for changes on the master branch and merge requests. Log in with your GitHub account. The build code is not yet automatically deployed.
