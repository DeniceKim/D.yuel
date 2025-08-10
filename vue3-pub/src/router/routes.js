// 퍼블리싱 전용 라우터 설정
import MainLayoutPub from '@/layouts/MainLayout.vue'
import SubLayoutPub from '@/layouts/SubLayout.vue'
import GuideLayoutPub from '@/layouts/GuideLayout.vue'
import ErrorPage from '@/pages/Error.vue';

const routes = [  
  // 메인
  {
    path: '/main', component: MainLayoutPub, meta: { title: '메인' },
    children: [
      { path: '', component: () => import('@/pages/main/Index.vue'), meta: { title: 'Main' } },
    ]
  },

  // UI/UX 퍼블리싱 가이드
  {
    path: '', component: GuideLayoutPub, meta: { title: '가이드' },
    children: [
      { path: '', component: () => import('@/pages/guide/Index.vue'), meta: { title: 'UI/UX 페이지 진행 현황' } },
      { path: 'guide/color', component: () => import('@/pages/guide/Color.vue'), meta: { title: 'Color' } },
      { path: 'guide/typo', component: () => import('@/pages/guide/Typo.vue'), meta: { title: 'Typo' } },
    ]
  },
  {
    path: '/component', component: GuideLayoutPub, meta: { title: 'Component' },
    children: [
      { path: 'button', component: () => import('@/pages/component/Button.vue'), meta: { title: 'Button' } },
      { path: 'input', component: () => import('@/pages/component/Input.vue'), meta: { title: 'Input' } },
      { path: 'checkbox', component: () => import('@/pages/component/Checkbox.vue'), meta: { title: 'Checkbox' } },
      { path: 'radio', component: () => import('@/pages/component/Radio.vue'), meta: { title: 'Radio' } },
      { path: 'select', component: () => import('@/pages/component/Select.vue'), meta: { title: 'Select' } },
      { path: 'tag', component: () => import('@/pages/component/Tag.vue'), meta: { title: 'Tag' } },
      { path: 'range', component: () => import('@/pages/component/Range.vue'), meta: { title: 'Range' } },
      { path: 'table', component: () => import('@/pages/component/Table.vue'), meta: { title: 'Table' } },
      { path: 'list', component: () => import('@/pages/component/List.vue'), meta: { title: 'List' } },
      { path: 'card', component: () => import('@/pages/component/Card.vue'), meta: { title: 'Card' } },
      { path: 'tabs', component: () => import('@/pages/component/Tabs.vue'), meta: { title: 'Tabs' } },
      { path: 'navigation', component: () => import('@/pages/component/Navigation.vue'), meta: { title: 'Navigation' } },
      { path: 'tooltip', component: () => import('@/pages/component/Tooltip.vue'), meta: { title: 'Tooltip' } },
      { path: 'toast', component: () => import('@/pages/component/Toast.vue'), meta: { title: 'Toast' } },
      { path: 'badge', component: () => import('@/pages/component/Badge.vue'), meta: { title: 'Badge' } },
      { path: 'modal', component: () => import('@/pages/component/Modal.vue'), meta: { title: 'Modal' } },
      { path: 'swiper', component: () => import('@/pages/component/Swiper.vue'), meta: { title: 'Swiper' } },
      { path: 'accordion', component: () => import('@/pages/component/Accordion.vue'), meta: { title: 'Accordion' } },
      { path: 'dropdown', component: () => import('@/pages/component/Dropdown.vue'), meta: { title: 'Dropdown' } },
      { path: 'calendar', component: () => import('@/pages/component/Calendar.vue'), meta: { title: 'Calendar' } },
      { path: 'tabbar', component: () => import('@/pages/component/Tabbar.vue'), meta: { title: 'Tabbar' } },
      { path: 'progress', component: () => import('@/pages/component/Progress.vue'), meta: { title: 'Progress' } },
      { path: 'loading', component: () => import('@/pages/component/Loading.vue'), meta: { title: 'Loading' } },
      { path: 'floating', component: () => import('@/pages/component/Floating.vue'), meta: { title: 'Floating' } },
      { path: 'sidebar', component: () => import('@/pages/component/Sidebar.vue'), meta: { title: 'Sidebar' } },
      { path: 'header', component: () => import('@/pages/component/Header.vue'), meta: { title: 'Header' } },
      { path: 'step', component: () => import('@/pages/component/Step.vue'), meta: { title: 'Step' } },
    ]
  },
  {
    path: '/demo', component: SubLayoutPub, meta: { title: 'Demo UI 확인용' },
    children: [
      { path: 'page', component: () => import('@/pages/demo/Page.vue'), meta: { title: 'Demo Page' } },
      { path: 'page1', component: () => import('@/pages/demo/Page1.vue'), meta: { title: 'Sub Test Page1' } },
      { path: 'page2', component: () => import('@/pages/demo/Page2.vue'), meta: { title: 'Sub Test Page2' } },
      { path: 'page3', component: () => import('@/pages/demo/Page3.vue'), meta: { title: 'Sub Test Page3' } },
      { path: 'page4', component: () => import('@/pages/demo/Page4.vue'), meta: { title: 'Sub Test Page4' } },
      { path: 'page5', component: () => import('@/pages/demo/Page5.vue'), meta: { title: 'Sub Test Page5' } },
      { path: 'b', component: () => import('@/pages/demo/B.vue'), meta: { title: 'Demo Page' } },
      { path: 'button', component: () => import('@/pages/demo/Button.vue'), meta: { title: 'Demo 버튼' } },
      { path: 'select', component: () => import('@/pages/demo/Select.vue'), meta: { title: 'Demo Select' } },
      { path: 'slider', component: () => import('@/pages/demo/Slider.vue'), meta: { title: 'Demo Slider' } },
      { path: 'swiper', component: () => import('@/pages/demo/Swiper.vue'), meta: { title: 'Demo 스와이퍼' } },
      { path: 'slide', component: () => import('@/pages/demo/Slide.vue'), meta: { title: 'Demo 슬라이드' } },
      { path: 'modal', component: () => import('@/pages/demo/Modal.vue'), meta: { title: 'Demo 모달(팝업)' } },
      { path: 'accordion', component: () => import('@/pages/demo/Accordion.vue'), meta: { title: 'Demo Accordion' } },
      { path: 'floating', component: () => import('@/pages/demo/Floating.vue'), meta: { title: 'Floating' } },
      { path: 'sidebar', component: () => import('@/pages/demo/Sidebar.vue'), meta: { title: 'Demo Sidebar' } },
      { path: 'dropdown', component: () => import('@/pages/demo/Dropdown.vue'), meta: { title: 'Demo Dropdown' } },
      { path: 'datepicker', component: () => import('@/pages/demo/Datepicker.vue'), meta: { title: 'Demo Datepicker' } },
      { path: 'keypad', component: () => import('@/pages/demo/Keypad.vue'), meta: { title: 'Demo Keypad' } },
      { path: 'navscroll', component: () => import('@/pages/demo/Navscroll.vue'), meta: { title: 'Demo Navscroll' } },
      { path: 'navscroll-v1', component: () => import('@/pages/demo/Navscroll-v1.vue'), meta: { title: 'Demo Navscroll' } },
      { path: 'collapse', component: () => import('@/pages/demo/Collapse.vue'), meta: { title: 'Demo Collapse' } },
      { path: 'numbercount', component: () => import('@/pages/demo/NumberCount.vue'), meta: { title: 'Number Count' } },
      { path: 'chart', component: () => import('@/pages/demo/Chart.vue'), meta: { title: 'Demo chart' } },
      { path: 'walking', component: () => import('@/pages/demo/Walking.vue'), meta: { title: 'Demo Walking' } },
      { path: 'scroll', component: () => import('@/pages/demo/ScrollEvent.vue'), meta: { title: 'Demo ScrollEvent' } },
      { path: 'scroll2', component: () => import('@/pages/demo/ScrollEvent2.vue'), meta: { title: 'Demo ScrollEvent' } },
      { path: 'scroll3', component: () => import('@/pages/demo/ScrollEvent3.vue'), meta: { title: 'Demo ScrollEvent' } },
      { path: 'calendar', component: () => import('@/pages/demo/Calendar.vue'), meta: { title: 'Demo Calendar' } },
      { path: 'week', component: () => import('@/pages/demo/CalendarWeek.vue'), meta: { title: 'Demo Calendar Week' } },
      { path: 'list', component: () => import('@/pages/demo/ListType.vue'), meta: { title: 'Demo list all' } },
    ]
  },

  // 에러페이지
  {
    path: '/:pathMatch(.*)*', // 모든 일치하지 않는 경로
    name: 'NotFound',
    component: ErrorPage,
    meta: { title: '404 Not Found' }
  }
]

export default routes
