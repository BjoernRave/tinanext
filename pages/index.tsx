import * as React from 'react';
import { NextPage } from 'next';
import { useLocalJsonForm } from 'next-tinacms-json';

type Props = {
  fileRelativePath: string;
  data: {
    title: string;
    date: string;
    hero: string;
  };
};

const Home: NextPage<Props> = (props: Props) => {
  const [data] = useLocalJsonForm(props, {
    fields: [
      {
        name: 'title',
        label: 'Page title',
        component: 'text',
      },
      {
        name: 'date',
        label: 'Event date',
        component: 'text',
      },
      {
        name: 'hero',
        label: 'Headline',
        component: 'textarea',
      },
    ],
  });
  return (
    <main>
      <h1>{data.title}</h1>
      <h2>{data.date}</h2>
      <div className="hero">{data.hero}</div>
    </main>
  );
};

Home.getInitialProps = (): Props => {
  const data = require('../data/home.json');
  console.log('data', data);
  return {
    fileRelativePath: '/data/home.json',
    data,
  };
};

export default Home;
