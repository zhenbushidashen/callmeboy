使用 `patch-package` 可以修改第三方模块，及时解决第三方依赖包的 bug

1. npm install patch-package --save-dev
2. 修改node_modules下需要改的包内文件
3. npx patch-package 修改的包名
4. 执行完自动生成patches文件夹，内部就是patch后的文件信息，后续安装会自动将patch的内容打到依赖包内
5. 最最最重要的一点，在npm scripts 中 postinstall 设置为 patch-package


## 完