import Mock from 'mockjs'
Mock.mock('/xsyyds', 'get', function () {
  // 返回的数据
  const data = Mock.mock({
    'list|1-1': [
      {
        // 'id|+1': 1,
        path: '/xueyuan',
        title: '学生管理',
    },
    {
        // 'id|+1': 2,
        path: '/jiang',
        title: '教师管理',
    },
    {
        // 'id|+1': 3,
        path: '/zhu',
        title: '助教管理',
    }
    ]
  })
  return data
})



