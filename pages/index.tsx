import { Button } from 'antd';
import Head from 'next/head';
import Image from 'next/image';

import CuentanosLogo from '../public/LOGO-CUENTANOS.png';

interface Site {
  name: string;
  url: string;
}

interface LocaleSelectButtonProps {
  site: Site;
  onClick: (e: React.SyntheticEvent) => void;
}

const siteTitle = 'CuentaNos';
const message =
  'Información confiable para el empoderamiento de la población en el norte de Centroamérica';
const sites: Site[] = [
  { name: 'El Salvador', url: 'https://elsalvador.cuentanos.org/es' },
  { name: 'Guatemala', url: 'https://guatemala.cuentanos.org/es' },
  { name: 'Honduras', url: 'https://honduras.cuentanos.org/es' },
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
          <Image src={CuentanosLogo} alt="logo" />
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
