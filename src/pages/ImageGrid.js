import React, { useEffect, useState } from 'react';
import simplifiedStates from './simplifiedStates.json'; // Asegúrate de que la ruta es correcta

const ImageGrid = () => {
  const [imagePaths, setImagePaths] = useState([]);
  const [gifts, setGifts] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    // Obtener datos de simplifiedStates.json
    const availableGifts = simplifiedStates[0]?.availableGifts || [];
    setGifts(availableGifts);

    // Obtener rutas de imágenes
    const fetchImagePaths = async () => {
      try {
        const images = require.context('./img', false, /\.(png|webp|webm)$/);
        const paths = images.keys().map((imagePath) => {
          const filename = imagePath.split('/').pop().split('.')[0];
          return { path: images(imagePath).default, name: filename };
        });
        setImagePaths(paths);
      } catch (error) {
        console.error('Error fetching image paths:', error);
      }
    };

    fetchImagePaths();
  }, []);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  // Combina los datos de gifts y imagePaths
  const combinedData = [...gifts, ...imagePaths];

  return (
    <div className="image-grid">
      {combinedData.map((item, index) => {
        if (!showAll && index >= 6) {
          return null; // Oculta los elementos adicionales si no se muestra todo
        }

        return (
          <div key={index} className="image-item">
            {item.imageUrl ? (
              <>
                <img src={item.imageUrl} alt={item.name} className="image" />
                <div className="image-name">{item.name}</div>
              </>
            ) : (
              item.path.endsWith('.webm') ? (
                <video src={item.path} className="video" controls />
              ) : (
                <>
                  <img src={item.path} alt={`Image ${index + 1}`} className="image" />
                  <div className="image-name">{item.name}</div>
                </>
              )
            )}
          </div>
        );
      })}
      {combinedData.length >= 19 && (
        <button className="show-more-button" onClick={toggleShowAll}>
          {showAll ? 'Mostrar menos' : 'Mostrar más'}
        </button>
      )}
    </div>
  );
};

export default ImageGrid;
