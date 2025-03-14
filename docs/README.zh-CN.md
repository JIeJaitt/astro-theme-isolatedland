# 🏝️ Astro Theme IsolatedLand

一个简约优雅的个人博客主题，基于 Astro 构建。

> ⚠️ **注意**：本主题仍在开发中，尚未在 Astro 官方主题展示中提供。

## 🖥️ 预览

[这里需要放置一张高质量的主题预览图]

## ✨ 特性

- ✅ 响应式设计
- ✅ 优秀的 SEO 支持
- ✅ 支持 Markdown & MDX
- ✅ 日历组件展示
- ✅ 待办事项清单
- ✅ 个性化侧边栏
- ✅ 支持 RSS Feed
- ✅ 支持站点地图

## ⚡ 性能

- 100/100 Lighthouse 性能评分
- 快速的页面加载速度
- 优化的资源加载

## 📦 快速开始

> ⚠️ 目前需要克隆仓库并本地运行：

```bash
# 克隆仓库
git clone https://github.com/JIeJaitt/astro-theme-isolatedland.git

# 进入目录
cd astro-theme-isolatedland

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

## 🚀 项目结构

```text
├── public/
├── src/
│   ├── components/
│   │   ├── sidebar/
│   │   ├── Footer.astro
│   │   └── ...
│   ├── content/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

## 🔧 配置说明

1. 主题配置：修改 `src/config/theme.ts`
2. 侧边栏设置：编辑对应的侧边栏组件
3. 内容编写：在 `src/content/` 目录下创建文章

## 📝 使用说明

### 文章前置信息

| 字段        | 说明     | 是否必需 |
|------------|----------|---------|
| title      | 文章标题  | 是      |
| pubDate    | 发布日期  | 是      |
| description| 文章描述  | 是      |
| image      | 封面图片  | 否      |
| tags       | 文章标签  | 否      |

## 🛠️ 开发命令

| 命令                    | 作用                                   |
|------------------------|----------------------------------------|
| `npm install`          | 安装依赖                               |
| `npm run dev`          | 启动开发服务器 `localhost:4321`        |
| `npm run build`        | 构建生产版本到 `./dist/`               |
| `npm run preview`      | 本地预览生产版本                        |

## 📄 许可证

MIT License © 2024-PRESENT [JIeJaitt](https://github.com/JIeJaitt)

## 💖 致谢

本主题基于 [Astro](https://astro.build/) 构建。

[English](../README.md)