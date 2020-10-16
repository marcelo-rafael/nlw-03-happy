import styled from 'styled-components';

export const PageMap = styled.div`
  width: 100vw;
  height: 100vh;

  position: relative;
  display: flex;

  aside {
    width: 440px;
    background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);
    padding: 80px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h2 {
      font-size: 40px;
      font-weight: 800;
      line-height: 42px;
      margin-top: 64px;
    }

    p {
      line-height: 28px;
      margin-top: 24px;
    }

    footer {
      display: flex;
      flex-direction: column;

      line-height: 24px;

      strong {
        font-weight: 800;
      }
    }
  }

  .leaflet-container {
    z-index: 5;
  }

  .map-popup {
    .leaflet-popup-content-wrapper {
      background: rgba(255, 255, 255, 0.8);
      border-radius: 20px;
      box-shadow: none;
    }

    .leaflet-popup-content {
      color: #0089a5;
      font-size: 20px;
      font-weight: bold;
      margin: 8px 12px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      a {
        width: 40px;
        height: 40px;
        background: #15c3d6;
        box-shadow: 17.2868px 27.6589px 41.4884px rgba(23, 142, 166, 0.16);
        border-radius: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    .leaflet-popup-tip-container {
      display: none;
    }
  }

  & > a {
    z-index: 10;

    position: absolute;
    right: 40px;
    bottom: 40px;

    width: 60px;
    height: 60px;
    background: #15c3d6;
    border-radius: 20px;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: background-color 0.2s;

    &:hover {
      background: #17d6eb;
    }
  }
`;
