import React from 'react';
import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-layout';

export default () => (
  <DefaultFooter
    copyright="2020 Spoom 手工打造"
    links={[
      {
        key: 'Gear project',
        title: 'Gear project',
        href: 'https://github.com/spoomlzx/gear-react',
        blankTarget: true,
      },
      {
        key: 'github',
        title: <GithubOutlined />,
        href: 'https://github.com/spoomlzx/gear-react',
        blankTarget: true,
      },
    ]}
  />
);
