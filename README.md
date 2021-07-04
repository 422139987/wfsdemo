# wfsdemo

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Build Go 
windows编译需要安装mingw64
go build -o public/wfs_server.exe  server/wfs_server_lite.go server/wfs_websockets_hub.go 

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
