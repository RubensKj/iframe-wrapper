import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;

  margin: 0 auto;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 10px 15px;
  border-radius: 8px;

  width: 100%;
  max-width: 375px;

  background: #FFF;

  border: 1px solid #ecebed;

  header {
    text-align: center;

    margin-bottom: 8px;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  p {
    color: red;

    text-align: center;
  }

  input {
    background: none;
    border-radius: 4px;
    border: 1px solid #ecebed;

    font-size: 14px;
    
    height: 38px;

    width: 100%;

    padding: 5px 15px;
  }

  button {
    background: none;
    border-radius: 4px;
    border: 1px solid #ecebed;

    margin-top: 8px;

    padding: 5px 15px;

    cursor: pointer;

    width: 100%;
  }
`;