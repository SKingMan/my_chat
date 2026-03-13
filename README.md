# DeepSeek 智能助手

一个Web 智能对话应用，界面简洁美观，主要添加了问答目录，每一轮问答都会生成一个目录，方面用户快速定位历史问答记录。

## 功能特性

- 🤖 基于 DeepSeek API 的智能对话
- 📑 问答目录导航，每轮问答自动生成目录，快速定位历史记录
- 📋 一键复制消息内容
- 💾 会话历史自动保存本地
- 📱 用户数据不上云，保证私密安全

## 使用方法

### 1. 克隆项目

```bash
git clone <repository-url>
cd my_chat
```

### 2. 启动服务

使用任意 Web 服务器打开 `index.html`，例如：

```bash
# 使用 Python
python -m http.server 8000

# 或使用 Node.js
npx http-server -p 8000
```

然后在浏览器访问：http://localhost:8000

### 3. 配置 API Key

首次使用需要配置 DeepSeek API Key，



#### 方式一：页面输入

1. 打开页面后，在弹出的设置面板中输入 API Key
2. 选择模型（标准版/深度思考版/编程版）
3. 点击"开始对话"即可

> ⚠️ 注意：你的 API Key 保存在浏览器本地存储中，不会发送到任何服务器。

## 获取 DeepSeek API Key

1. 访问 [DeepSeek 开放平台](https://platform.deepseek.com/)
2. 注册/登录账号
3. 在"API Keys"页面创建新的 API Key
4. 复制 Key 并配置到项目中

## 界面预览

- **左侧**：历史会话列表
- **中间**：对话区域
- **右侧**：当前会话的问答目录

## 技术栈

- HTML + CSS (Tailwind CSS)
- JavaScript (原生)
- Marked.js (Markdown 渲染)
- Highlight.js (代码高亮)
- DeepSeek API (流式输出)

## 注意事项

- 本项目仅为前端演示，数据存储在浏览器本地 (localStorage)
- 请妥善保管你的 API Key，不要泄露给他人
- 如遇 API 请求错误，请检查网络连接和 API Key 是否有效
