# Get Stuff Done
Have you ever had problems getting stuff done during the day?
This extension is here to help you on your journey

# Install
Download the repository


![image info](./documentation/install/image.png)

## Prerequisite
Vue CLI

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Install it to chrome

Go to chrome://extensions/

Click `Load unpacked` button

Select the get-stuff-done/extension folder

Done!

## Update the chrome extension

First run the new build

```
npm run build
```

Move everything in dist to extension

```
cp .\dist\ .\extension\
```

Rename the index.html to newtab.html 
```
rm .\extension\newtab.html
cp .\extension\index.html .\extension\newtab.html
```