// https://umijs.org/config/
import { defineConfig } from 'umi';
import defaultSettings from './defaultSettings';
import proxy from './proxy';

const { REACT_APP_ENV } = process.env;
export default defineConfig({
  hash: true,
  antd: {},
  dva: {
    hmr: true,
  },
  layout: {
    name: 'Ant Design Pro',
    locale: true,
    siderWidth: 208,
  },
  locale: {
    // default zh-CN
    default: 'zh-CN',
    // default true, when it is true, will use `navigator.language` overwrite default
    antd: true,
    baseNavigator: true,
  },
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/docs/routing
  routes: [
    {
      path: '/user',
      layout: false,
      routes: [
        {
          name: 'login',
          path: '/user/login',
          component: './user/login',
        },
      ],
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      icon: 'smile',
      component: './DashBoard',
    },
    {
      path: '/admin',
      name: 'admin',
      icon: 'crown',
      access: 'canAdmin',
      component: './Admin',
      routes: [
        {
          path: '/admin/sub-page',
          name: 'sub-page',
          icon: 'smile',
          component: './Welcome',
        },
      ],
    },
    {
      path: '/form',
      name: 'form',
      icon: 'crown',
      routes: [
        {
          name: 'advanced-form',
          icon: 'smile',
          path: '/form/formadvancedform',
          component: './Temp/FormAdvancedForm',
        },
        {
          name: 'basic-form',
          icon: 'smile',
          path: '/form/formbasicform',
          component: './Temp/FormBasicForm',
        },
        {
          name: 'step-form',
          icon: 'smile',
          path: '/form/formstepform',
          component: './Temp/FormStepForm',
        },
      ],
    },
    {
      path: '/list',
      name: 'list',
      icon: 'crown',
      routes: [
        {
          name: 'table-list',
          icon: 'table',
          path: '/list/ListTableList',
          component: './ListTableList',
        },
        {
          name: 'account.center',
          icon: 'smile',
          path: '/list/accountcenter',
          component: './Temp/AccountCenter',
        },
        {
          name: 'account.settings',
          icon: 'smile',
          path: '/list/accountsettings',
          component: './Temp/AccountSettings',
        },
        {
          name: 'basic-list',
          icon: 'smile',
          path: '/list/listbasiclist',
          component: './Temp/ListBasicList',
        },
        {
          name: 'card-list',
          icon: 'smile',
          path: '/list/listcardlist',
          component: './Temp/ListCardList',
        },
        {
          name: 'search-list.projects',
          icon: 'smile',
          path: '/list/listsearchprojects',
          component: './Temp/ListSearchProjects',
        },
        {
          name: 'search-list',
          icon: 'smile',
          path: '/list/listsearch',
          component: './Temp/ListSearch',
        },
        {
          name: 'profileadvanced',
          icon: 'smile',
          path: '/list/profileadvanced',
          component: './Temp/ProfileAdvanced',
        },
        {
          name: 'profilebasic',
          icon: 'smile',
          path: '/list/profilebasic',
          component: './Temp/ProfileBasic',
        },
        {
          name: 'resultfail',
          icon: 'smile',
          path: '/list/resultfail',
          component: './Temp/ResultFail',
        },
        {
          name: 'resultsuccess',
          icon: 'smile',
          path: '/list/resultsuccess',
          component: './Temp/ResultSuccess',
        },
        {
          name: 'userregisterresult',
          icon: 'smile',
          path: '/list/userregisterresult',
          component: './Temp/UserRegisterResult',
        },
        {
          name: 'userregister',
          icon: 'smile',
          path: '/list/userregister',
          component: './Temp/UserRegister',
        },
      ],
    },
    {
      path: '/',
      redirect: '/dashboard',
    },
    {
      component: './404',
    },
  ],
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    // ...darkTheme,
    'primary-color': defaultSettings.primaryColor,
  },
  ignoreMomentLocale: true,
  proxy: proxy[REACT_APP_ENV || 'dev'],
  manifest: {
    basePath: '/',
  },
});
