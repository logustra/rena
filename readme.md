## Rena
Example Atomic Design with DDD (Domain Driven Design). Read [documentation](https://github.com/logustra/7ad)

## Requirement
  - [node.js](http://nodejs.org/)
  - [yarn](https://yarnpkg.com/en/)
  - [watchman](https://facebook.github.io/watchman/docs/install.html#buildinstall)
  - [adoptopenjdk](https://adoptopenjdk.net/)
  - [android studio](https://developer.android.com/studio)
  - [cocoapods](https://cocoapods.org/)
  - [xcode](https://developer.apple.com/xcode/)
    
## Quick Start

```bash
# clone repository
$ git clone https://github.com/logustra/rena.git

# open folder rena
$ cd rena

# instal dependencies
$ yarn install

# copy file .env.example to .env
$ cp .env.example .env
```

### Android

```bash
# build android and open emulator
$ yarn android
```

### IOS

```bash
# open folder ios
$ cd ios

# instal dependencies
$ pod install

# build ios and open emulator
$ yarn ios
```

## How to Rename
```bash
# add dependency react-native-rename
$ yarn global add react-native-rename

# rename rena to myApp
$ react-native-rename myApp
```

## How to Create Folder
A guide how to create a folder using `create-cli`

### Component
```bash
# create atom component and give it name loading
$ node create atom loading
```

### Page
```bash
# create new page and give it name home
$ node create page home
```
