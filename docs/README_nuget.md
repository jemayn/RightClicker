# Right Clicker 

[![Downloads](https://img.shields.io/nuget/dt/Umbraco.Community.RightClicker?color=cc9900)](https://www.nuget.org/packages/Umbraco.Community.RightClicker/)
[![NuGet](https://img.shields.io/nuget/vpre/Umbraco.Community.RightClicker?color=0273B3)](https://www.nuget.org/packages/Umbraco.Community.RightClicker)
[![GitHub license](https://img.shields.io/github/license/jemayn/RightClicker?color=8AB803)](../LICENSE)

This package is for all Umbraco users who are working on Umbraco 16.2+ and are frustrated that the right click context actions have disappeared from trees.

All this package does is use some very ugly and bad tree traversal and an event listener that allows your right clicks to go from this:

![Alt text](https://raw.githubusercontent.com/jemayn/RightClicker/refs/heads/main/.github/images/image.png)

To this:

![Alt text](https://raw.githubusercontent.com/jemayn/RightClicker/refs/heads/main/.github/images/image-1.png)

## Installation

Add the package to an existing Umbraco website (v16.2+) from nuget:

`dotnet add package Umbraco.Community.RightClicker`

Now you can right click tree items all you want!

## Contributing

Contributions to this package are most welcome! Please read the [Contributing Guidelines](CONTRIBUTING.md).

## Acknowledgments

Thank you to Lotte Pitcher for her wonderful [opinionated package starter kit](https://github.com/LottePitcher/opinionated-package-starter)