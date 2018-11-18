// all menu-items
export default [
  {
    id: 1,
    pid: null,
    title: '初检录音',
    name: 'check',
    path: '/check',
    icon: 'chujianluyin'
  },
  {
    id: 2,
    pid: 1,
    title: '录音质检',
    name: 'check-quality',
    path: '/check/quality',
    icon: 'luyinzhijian'
  },
  {
    id: 3,
    pid: null,
    title: '复检录音',
    name: 'recheck',
    path: '/recheck',
    icon: 'fujianluyin'
  },
  {
    id: 4,
    pid: 3,
    title: '录音列表',
    name: 'recheck-list',
    path: '/recheck/list',
    icon: 'luyinliebiao'
  },
  {
    id: 5,
    pid: 3,
    title: '录音详情',
    name: 'recheck-detail',
    path: '/recheck/detail',
    icon: 'luyinxiangqing'
  },
  {
    id: 6,
    pid: null,
    title: '任务分发',
    name: 'task',
    path: '/task',
    icon: 'renwufenfa'
  },
  {
    id: 7,
    pid: 6,
    title: '分发列表',
    name: 'task-list',
    path: '/task/list',
    icon: 'fenfaliebiao'
  },
  {
    id: 8,
    pid: 6,
    title: '新建初检',
    name: 'task-create-one',
    path: '/task/create',
    icon: 'xinjianchujian'
  },
  {
    id: 9,
    pid: null,
    title: '数据导出',
    name: 'report',
    path: '/report',
    icon: 'shujudaochu'
  },
  {
    id: 10,
    pid: 9,
    title: '报表导出',
    name: 'report-export',
    path: '/report/export',
    icon: 'baobiaodaochu'
  }
];
