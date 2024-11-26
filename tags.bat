echo off
clear
echo THIS PROGRAM PREPEARE FOR CREATING A RELEASE OF A REPO ON GITHUB
echo ---
echo Read the instruction in ./changelog.bat before running this script.
echo TAG NAME
echo What do you want to be the tag?
set /p tagname="Enter tagname: "
git tag %tagname%
git push origin --tags
clear
echo ---
echo FINISH MAKING THIS TAG: 
git describe --tags
echo ---
echo NOW, WRITE THIS ON THE COMMAND-LINE (IN GIT BASH):
echo (This is creating the CHANGELOG-file.)
echo -
echo ./generate_changelog_local.sh
echo ---
echo Don't forget to open GIT DASHBOARD and create a commit and push this latest changes to the GitHub (online).