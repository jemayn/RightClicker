@ECHO OFF
:: This file can now be deleted!
:: It was used when setting up the package solution (using https://github.com/LottePitcher/opinionated-package-starter)

:: set up git
git init
git branch -M main
git remote add origin https://github.com/jemayn/RightClicker.git

:: ensure latest Umbraco templates used
dotnet new install Umbraco.Templates --force

:: use the umbraco-extension dotnet template to add the package project
cd src
dotnet new umbraco-extension -n "RightClicker" --site-domain "https://localhost:44398" --include-example

:: replace package .csproj with the one from the template so has nuget info
cd RightClicker
del RightClicker.csproj
ren RightClicker_nuget.csproj RightClicker.csproj

:: add project to solution
cd..
dotnet sln add "RightClicker"

:: add reference to project from test site
dotnet add "RightClicker.TestSite/RightClicker.TestSite.csproj" reference "RightClicker/RightClicker.csproj"
