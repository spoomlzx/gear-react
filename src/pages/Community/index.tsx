import { PageHeaderWrapper } from '@ant-design/pro-layout';
import React from 'react';
import { Tree } from 'antd';
import styles from './index.less';
import { DownOutlined } from '@ant-design/icons';
import { EventDataNode } from 'spoom-tree/lib/interface';

const treeData = [
  {
    key: '0-0',
    title: 'parent 1',
    children: [
      { key: '0-0-0', title: 'parent 1-1', children: [{ key: '0-0-0-0', title: 'parent 1-1-0' }] },
      {
        key: '0-0-1',
        title: 'parent 1-2',
        children: [
          { key: '0-0-1-0', title: 'parent 1-2-0', disableCheckbox: true },
          { key: '0-0-1-1', title: 'parent 1-2-1' },
          { key: '0-0-1-2', title: 'parent 1-2-2' },
          { key: '0-0-1-3', title: 'parent 1-2-3' },
          { key: '0-0-1-4', title: 'parent 1-2-4' },
          { key: '0-0-1-5', title: 'parent 1-2-5' },
          { key: '0-0-1-6', title: 'parent 1-2-6' },
          { key: '0-0-1-7', title: 'parent 1-2-7' },
          { key: '0-0-1-8', title: 'parent 1-2-8' },
          { key: '0-0-1-9', title: 'parent 1-2-9' },
          { key: 1128, title: 1128 },
        ],
      },
    ],
  },
];

const Community: React.FC<{}> = () => {
  const ref = React.createRef<any>();

  const onClick = (e: React.MouseEvent, treeNode: EventDataNode) => {
    ref.current.onNodeExpand(e, treeNode);
  };

  return (
    <PageHeaderWrapper content="这是一个新页面，从这里进行开发！" className={styles.main}>
      <h2>Select</h2>
      <Tree
        ref={ref}
        showLine
        switcherIcon={<DownOutlined />}
        defaultExpandedKeys={['0-0-0']}
        onClick={onClick}
        treeData={treeData}
      />
    </PageHeaderWrapper>
  );
};

export default Community;
