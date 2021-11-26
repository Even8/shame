### typescript文件描述（以及引入顺序）- 请按照一下顺寻以此引入
1. jquery: 插件
2. baseContent: 定义全局变量文件
3. common: 基本弹窗(依赖query)
4. request: API接口(依赖query、依赖mask、依赖baseContent、依赖common)
5. index: 基本逻辑(依赖所有)