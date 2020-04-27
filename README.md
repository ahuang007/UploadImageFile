# UploadImageFile
* Nodejs实现上传图片服务

## 安装环境

* linux 安装 nodejs

  ```
  wget https://npm.taobao.org/mirrors/node/v11.0.0/node-v11.0.0.tar.gz
  解压文件
  ./configure --prefix=/usr/local/nodejs/
  make 
  make install
  
  ln -s /usr/local/nodejs/bin/node /usr/local/bin
  ln -s /usr/local/nodejs/bin/npm /usr/local/bin
  ```

* nodejs 安装 koa

  ```
  npm install koa
  npm install koa --save
  ```

* 启动项目

  ```
  cd UploadImageFile
  npm start &
  
  服务搭建完成 访问地址如下(localhost修改为对应的IP地址)
  http://localhost:3000
  ```

  

