//import App from 'next/app';
import { Tina, TinaCMS } from 'tinacms';
import { GitClient, GitMediaStore } from '@tinacms/git-client';

const MyApp = ({ Component, pageProps }) => {
  const client = new GitClient('/___tina');
  const cms = new TinaCMS({
    sidebar: {
      position: 'overlay',
    },
  });
  cms.registerApi('git', client);
  cms.media.store = new GitMediaStore(client);

  return (
    <Tina cms={cms}>
      <Component {...pageProps} />
    </Tina>
  );
};

export default MyApp;
