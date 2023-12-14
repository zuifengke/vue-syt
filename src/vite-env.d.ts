/// <reference types="vite/client" />
// 解决 ts 无法识别 vue文件的问题
declare module '*.vue' {
    import type { DefineComponent } from 'vue';
    const vueComponent: DefineComponent<{}, {}, any>;
    export default vueComponent;
}