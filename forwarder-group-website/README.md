# forwarder-group
货代群官网项目

一个现代、美观、大气的货代群展示网站，展示货代群的价值观、群规和联系方式。

## 特点

- 🎨 现代设计风格，层次分明
- 📱 响应式设计，支持移动端
- ⚡ 平滑滚动和动画效果
- 🔧 无需后端，纯前端实现
- 🌟 优雅的用户体验

## 技术栈

- HTML5
- CSS3 (使用CSS变量和现代布局)
- JavaScript (ES6+)
- Inter 字体

## 功能特色

### 设计特色
- 渐变背景和玻璃态效果
- 卡片式布局，悬停动画
- 平滑滚动导航
- 响应式设计

### 交互功能
- 导航栏滚动效果
- 懒加载动画
- 返回顶部按钮
- 移动端菜单
- 点击涟漪效果

## 快速开始

### 1. 安装依赖

```bash
npm install serve
```

### 2. 启动服务器

```bash
npm start
```

网站将在 `http://localhost:3004` 上运行

### 3. 开发模式

```bash
npm run dev
```

## 项目结构

```
forwarder-group-website/
├── index.html          # 主页面
├── style.css           # 样式文件
├── script.js           # 交互脚本
├── package.json        # 项目配置
└── README.md           # 项目说明
```

## 内容板块

1. **首页** - 货代群介绍和价值观标签
2. **价值观** - 价值、吸引、开放、简单四大核心理念
3. **创始人感言** - 群创始人的思考和感悟
4. **群规** - 8条详细的群规说明
5. **群的境界** - 群管理哲学
6. **价值观念** - 关于时间、价值和互利的思考
7. **自我介绍模板** - 入群介绍格式
8. **联系方式** - 创始人联系信息

## 自定义配置

### 修改颜色主题

在 `style.css` 中的 `:root` 选择器中修改 CSS 变量：

```css
:root {
    --primary-color: #2563eb;    /* 主色调 */
    --secondary-color: #3b82f6;  /* 辅助色 */
    --accent-color: #f59e0b;     /* 强调色 */
    --dark-color: #1e293b;       /* 深色 */
    --light-color: #f8fafc;      /* 浅色 */
    --gray-color: #64748b;       /* 灰色 */
}
```

### 修改内容

直接编辑 `index.html` 中的文本内容即可。

## 浏览器兼容性

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## 性能优化

- 使用 CSS 变量统一管理颜色
- 懒加载动画减少初始渲染压力
- 响应式图片和字体优化
- 平滑滚动优化用户体验

## 部署

### 静态托管

可以部署到任何静态文件托管服务：

- GitHub Pages
- Netlify  
- Vercel
- Cloudflare Pages

### 服务器部署

将所有文件上传到 Web 服务器即可，无需特殊配置。

## 联系方式

**Darren 陈闯**
- 微信：13424243144

## 许可证

MIT License

---

© 2023 货代群. All rights reserved. 