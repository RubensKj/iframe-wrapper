import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;

  margin: 0 auto;

  header {
    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 0;

    width: 100%;
    height: 64px;

    padding: 5px 15px;

    border-bottom: 1px solid #cccccc;

    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;

      width: 100%;

      padding: 5px 30px;

      button {
        background: none;
        border-radius: 4px;
        border: 1px solid #cccccc;

        padding: 5px 15px;

        cursor: pointer;

        font-weight: 500;
      }
    }
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 10px 15px;
  border-radius: 8px;

  width: 100%;
  max-width: 1240px;
  height: 100%;
  max-height: 640px;

  background: #FFF;

  border: 1px solid #ecebed;

  iframe {
    width: 100%;
    max-width: 1240px;
    height: 100%;
    max-height: 640px;

    border: 1px solid #ecebed;
    border-radius: 5px;
  }

  input {
    background: none;
    border-radius: 4px;
    border: 1px solid #ecebed;

    font-size: 14px;
    
    height: 38px;

    width: 100%;

    padding: 5px 15px;

    margin-bottom: 16px;
  }
`;
