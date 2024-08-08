import React from 'react';
import Layout from '@theme/Layout';
import ImageGrid from './ImageGrid'; // Importación sin llaves
export default function MyReactPage() {
  return (
    <Layout>
              <ImageGrid />
      <h1>Tiktok Live giftnames</h1>
      <p>Como descargar las imagenes y nombres de los regalos que se envían en los directos de Tiktok para usarlos en overlays, comandos, alertas y más.</p>
      <p>Click derecho en la imagen y guarde la imagen</p>
      <p>Tambien puedes descargar arrastrando las imagenes a su herramienta de descarga favorita.</p>
    </Layout>
  );
}