import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import Translate, {translate} from '@docusaurus/Translate';
import ImageGrid from './ImageGrid'; // Importación sin llaves

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
        <Translate>{siteConfig.title}</Translate>
        </Heading>
        <p className="hero__subtitle"><Translate>{siteConfig.tagline}</Translate></p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/inicio">
          <Translate>documentación y Inicio [Tutorial]
          </Translate>
          </Link>
        </div>
        <div className={styles.buttons}>
          <a className={styles.programLink} href="https://github.com/nglmercer/Tiktok-Live-TTS-APPv2/releases">
          <Translate>Click Descargar el programa</Translate>
          </a>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Tiktok web app live interactive app Support minecraft interactive server 
      speechchat, sound alerts and mixitupapp live<head />"
    >
      <HomepageHeader />
      <main>
      <div><Translate>Recursos e imagenes utilizados para Comandos Y alertas en Lives</Translate></div>
        <ImageGrid />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}