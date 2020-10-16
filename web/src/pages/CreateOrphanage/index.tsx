import React from 'react';
import { Map, Marker, TileLayer } from 'react-leaflet';

import { FiPlus } from 'react-icons/fi';

import Sidebar from '../../components/Sidebar';
import mapIcon from '../../utils/mapIcon';

import { PageCreateOrphanage, Form, InputBlock, UploadedImage } from './styles';

const CreateOrphanage: React.FC = () => {
  return (
    <PageCreateOrphanage>
      <Sidebar />

      <main>
        <Form>
          <fieldset>
            <legend>Dados</legend>

            <Map
              center={[-23.6745604, -46.6415725]}
              style={{ width: '100%', height: 280 }}
              zoom={15}
            >
              <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

              <Marker
                interactive={false}
                icon={mapIcon}
                position={[-23.6745604, -46.6415725]}
              />
            </Map>

            <InputBlock>
              <label htmlFor="name">Nome</label>
              <input id="name" />
            </InputBlock>

            <InputBlock>
              <label htmlFor="about">
                Sobre <span>Máximo de 300 caracteres</span>
              </label>
              <textarea id="name" maxLength={300} />
            </InputBlock>

            <InputBlock>
              <label htmlFor="images">Fotos</label>

              <UploadedImage />

              <button className="new-image">
                <FiPlus size={24} color="#15b6d6" />
              </button>
            </InputBlock>
          </fieldset>

          <fieldset>
            <legend>Visitação</legend>

            <InputBlock>
              <label htmlFor="instructions">Instruções</label>
              <textarea id="instructions" />
            </InputBlock>

            <InputBlock>
              <label htmlFor="opening_hours">Nome</label>
              <input id="opening_hours" />
            </InputBlock>

            <InputBlock>
              <label htmlFor="open_on_weekends">Atende fim de semana</label>

              <div className="button-select">
                <button type="button" className="active">
                  Sim
                </button>
                <button type="button">Não</button>
              </div>
            </InputBlock>
          </fieldset>

          <button className="confirm-button" type="submit">
            Confirmar
          </button>
        </Form>
      </main>
    </PageCreateOrphanage>
  );
};

export default CreateOrphanage;
