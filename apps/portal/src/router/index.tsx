import type { RouteObject } from 'react-router-dom';
import type { ComponentType } from 'react';
import Home from '../pages/Home';
import Live2DTest from '../pages/Live2DTest';
import BasicTest from '../pages/BasicTest';

// 扩展RouteObject类型，添加组件属性和页面信息
export interface RouteConfig extends Omit<RouteObject, 'element'> {
  component: ComponentType;
  name?: string;
  hideInMenu?: boolean;
}

// 统一的路由配置，包含组件映射和页面信息
export const routes: RouteConfig[] = [
  {
    path: '/',
    component: Home,
    hideInMenu: true, // 首页不在菜单中显示
  },
  {
    path: '/live2d-test',
    component: Live2DTest,
    name: 'Live2D功能测试',
  },
  {
    path: '/basic-test',
    component: BasicTest,
    name: '基础方法测试',
  },
];

// 为了兼容现有代码，提供一个获取页面配置的函数
export const getPageConfig = () => {
  return routes.filter((route) => !route.hideInMenu);
};
