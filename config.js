// DeepSeek 配置
// 
// 使用方法：
// 1. 将下方的 'sk-your-api-key-here' 替换为你自己的 DeepSeek API Key
// 2. 保存此文件
// 3. 刷新页面即可自动加载配置（无需再手动输入 API Key）
//
// 注意：请勿将包含真实 API Key 的文件提交到公开仓库！
//
window.appConfig = {
    apiKey: 'sk-your-api-key-here',  // 👈 在这里填入你的 API Key，例如：sk-xxxxxxxxxxxxxxxx
    model: 'deepseek-chat',          // 可选：deepseek-chat (标准版), deepseek-reasoner (深度思考), deepseek-coder (编程版)
    enableSearch: false              // 是否启用联网搜索
};
