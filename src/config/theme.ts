export interface ThemeConfig {
    author: {
        name: string;
        bio: string;
        avatar?: string;  // 可选的自定义头像URL
    };
    sidebar?: {
        stats?: boolean;  // 是否显示统计信息
        categories?: boolean;  // 是否显示分类
    };
}

// 默认配置
export const defaultThemeConfig: ThemeConfig = {
    author: {
        name: "博主",
        bio: "个人简介",
    },
    sidebar: {
        stats: true,
        categories: true
    }
};

// 用户配置 (可以被 astro.config.mjs 覆盖)
export const themeConfig: ThemeConfig = {
    author: {
        name: "博客昵称",
        bio: "愿话凡是在真实却从不轻易",
        // avatar: "/custom-avatar.jpg"  // 可选的自定义头像
    },
    sidebar: {
        stats: true,
        categories: true
    }
}; 