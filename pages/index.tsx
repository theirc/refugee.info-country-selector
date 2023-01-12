import { Button } from 'antd';
import Head from 'next/head';
import Image from 'next/image';

import RefugeeLogo from '../public/LOGO-refugee.png';

interface Site {
  name: string;
  url: string;
}

interface LocaleSelectButtonProps {
  site: Site;
  onClick: (e: React.SyntheticEvent) => void;
}

const siteTitle = 'Refugee.info';
const message =
  'A European information service for refugees, migrants, and asylum-seekers.';
const sites: Site[] = [
  { name: 'Greece', url: 'https://greece.refugee.info/en-us' },
  { name: 'Italy', url: 'https://italy.refugee.info/hc/en-us' },
];

function LocaleSelectButton({ onClick, site }: LocaleSelectButtonProps) {
  return (
    <div className="locale-select-page-button-container">
      <a href={site.url}>
        {/* Putting display: 'block', so that the button fills out available width. */}
        <Button ghost size="large" onClick={onClick} block={true}>
          {site.name}
        </Button>
      </a>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="locale-select-page-container">
        <div
          className="locale-select-page-content"
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <Image src={RefugeeLogo} alt="logo" />
          <div className="locale-select-page-message">{message}</div>
          {sites.map((site) => (
            <LocaleSelectButton
              site={site}
              key={site.name}
              onClick={(e: React.SyntheticEvent) => e?.preventDefault}
            />
          ))}
        </div>
      </div>
    </>
  );
}
