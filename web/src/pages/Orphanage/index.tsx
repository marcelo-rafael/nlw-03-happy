import React, { useState, useEffect } from 'react';
// import { FaWhatsapp } from 'react-icons/fa';
import { FiClock, FiInfo } from 'react-icons/fi';
import { Map, Marker, TileLayer } from 'react-leaflet';
import { useParams } from 'react-router-dom';

import Sidebar from '../../components/Sidebar';
import api from '../../services/api';
import mapIcon from '../../utils/mapIcon';

import {
  PageOrphanage,
  Images,
  OrphanageDetails,
  OrphanageDetailsContent,
  MapContainer,
  OpenDetails,
  Hour,
  OpenOnWeekends,
  DontOpen,
} from './styles';

interface PropsOrphanage {
  latitude: number;
  longitude: number;
  name: string;
  about: string;
  instructions: string;
  // eslint-disable-next-line camelcase
  opening_hours: string;
  // eslint-disable-next-line camelcase
  open_on_weekends: string;
  images: Array<{
    id: number;
    url: string;
  }>;
}

interface PropsOrphanageParams {
  id: string;
}

const Orphanage: React.FC = () => {
  const params = useParams<PropsOrphanageParams>();
  const [orphanage, setOrphanage] = useState<PropsOrphanage>();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    api.get(`orphanages/${params.id}`).then(response => {
      setOrphanage(response.data);
    });
  }, [params.id]);

  if (!orphanage) {
    return <p>Carregando...</p>;
  }

  return (
    <PageOrphanage>
      <Sidebar />

      <main>
        <OrphanageDetails>
          <img
            src={orphanage.images[activeImageIndex].url}
            alt={orphanage.name}
          />
          <Images>
            {orphanage.images.map((image, index) => {
              return (
                <button
                  key={image.id}
                  className={activeImageIndex === index ? 'active' : ''}
                  type="button"
                  onClick={() => {
                    setActiveImageIndex(index);
                  }}
                >
                  <img src={image.url} alt={orphanage.name} />
                </button>
              );
            })}
          </Images>

          <OrphanageDetailsContent>
            <h1>{orphanage.name}</h1>
            <p>{orphanage.about}</p>

            <MapContainer>
              <Map
                center={[orphanage.latitude, orphanage.longitude]}
                zoom={15}
                style={{ width: '100%', height: 280 }}
              >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                <Marker
                  interactive={false}
                  icon={mapIcon}
                  position={[orphanage.latitude, orphanage.longitude]}
                />
              </Map>

              <footer>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://www.google.com/maps/dir/?api=1&destination=${orphanage.latitude}, ${orphanage.longitude}`}
                >
                  Ver rotas no Google Maps
                </a>
              </footer>
            </MapContainer>

            <hr />

            <h2>Instruções para visita</h2>
            <p>{orphanage.instructions}</p>

            <OpenDetails>
              <Hour>
                <FiClock size={32} color="#15B6D6" />
                Segunda à Sexta <br />
                {orphanage.opening_hours}
              </Hour>
              {orphanage.open_on_weekends ? (
                <OpenOnWeekends>
                  <FiInfo size={32} color="#39cc83" />
                  Atendemos <br />
                  fim de semana
                </OpenOnWeekends>
              ) : (
                <DontOpen>
                  <FiInfo size={32} color="#ff669d" />
                  Não atendemos <br />
                  fim de semana
                </DontOpen>
              )}
            </OpenDetails>

            {/* <button type="button" className="contact-button">
              <FaWhatsapp size={20} color="#FFF" />
              Entrar em contato
            </button> */}
          </OrphanageDetailsContent>
        </OrphanageDetails>
      </main>
    </PageOrphanage>
  );
};

export default Orphanage;
