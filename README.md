# 在线教育平台

一个基于React和Spring Boot的在线教育平台，支持课程管理、用户管理、学习进度跟踪等功能。

## 技术栈

### 前端
- React 18
- TypeScript
- Vite
- Ant Design
- React Router
- Axios

### 后端
- Spring Boot 2.7.x
- MyBatis Plus
- MySQL
- Redis

## 前后端串联方案

### 1. 配置说明

#### 前端配置
- `vite.config.ts`: 构建输出目录已配置为后端的 `src/main/resources/static` 目录
- 开发环境下，前端通过代理将API请求转发到后端 `http://localhost:8083`

#### 后端配置
- `application.yml`: 移除了 `context-path`，直接在根路径下提供服务
- 配置了静态资源访问，支持访问 `src/main/resources/static` 目录下的前端资源
- 添加了 `WebConfig.java` 配置类，处理前端路由问题

### 2. 构建和启动步骤

#### 1. 构建前端

```bash
# 进入前端目录
cd frontend

# 安装依赖
npm install

# 构建前端项目（输出到后端static目录）
npm run build
```

#### 2. 启动后端

使用IDE（如IntelliJ IDEA）或命令行启动Spring Boot应用：

```bash
# 在项目根目录下执行
mvn spring-boot:run
```

或者直接运行 `OnlineEduPlatformApplication.java` 类的main方法。

#### 3. 访问应用

启动成功后，在浏览器中访问：
- 应用地址：http://localhost:8083
- API文档：http://localhost:8083/swagger-ui.html（如果已配置Swagger）

### 3. 开发流程

#### 开发环境

1. 启动后端服务
2. 启动前端开发服务器

```bash
# 进入前端目录
cd frontend

# 启动开发服务器
npm run dev
```

3. 访问前端开发地址：http://localhost:3000

#### 生产环境

1. 构建前端项目
2. 启动后端服务
3. 访问应用地址：http://localhost:8083

### 4. 注意事项

1. **API请求路径**：
   - 前端开发环境：通过代理 `/api` 转发到后端 `http://localhost:8083`
   - 生产环境：直接访问 `http://localhost:8083/api`

2. **前端路由**：
   - 所有未匹配到后端API的请求都会返回 `index.html`，由前端React Router处理
   - 确保后端API路径与前端路由路径不冲突

3. **静态资源**：
   - 前端构建后的静态资源会输出到 `src/main/resources/static` 目录
   - 后端启动时会自动加载这些静态资源

4. **数据库配置**：
   - 确保MySQL服务已启动，并且 `online_edu_platform` 数据库已创建
   - 首次启动时，系统会自动执行 `init.sql` 初始化数据库表

### 5. 项目结构

```
online-edu-platform/
├── frontend/             # 前端代码
│   ├── src/             # 前端源代码
│   ├── vite.config.ts   # Vite配置文件
│   └── package.json     # 前端依赖
├── src/                 # 后端代码
│   ├── main/java/       # 后端Java代码
│   ├── main/resources/  # 后端资源文件
│   │   ├── static/      # 前端构建输出目录
│   │   └── application.yml  # 后端配置文件
│   └── test/            # 后端测试代码
├── pom.xml              # Maven配置文件
└── README.md            # 项目说明文档
```

## 功能模块

### 1. 课程管理
- 课程列表展示
- 课程详情查看
- 课程搜索和筛选
- 课程分类

### 2. 用户管理
- 用户注册和登录
- 个人中心
- 学习进度跟踪
- 收藏课程

### 3. 教师管理
- 教师信息管理
- 课程发布
- 课程内容管理

### 4. 互动交流
- 课程评论
- 问答功能
- 学习社区

### 5. 系统管理
- 用户角色管理
- 权限管理
- 系统配置

## 后续开发计划

1. 完善用户认证和授权功能
2. 实现课程视频播放功能
3. 添加学习进度跟踪和统计
4. 优化前端UI和用户体验
5. 添加更多课程和学习资源
6. 实现数据分析和报表功能

## 贡献

欢迎提交Issue和Pull Request！

## 许可证

MIT License
