/* eslint-disable import/prefer-default-export */
import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-top: 80px;
  min-height: 100vh;
  width: 100%;
`;

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;

  background-color: white;
  height: 80px;
  position: fixed;
  top: 0;
  width: 100%;
`;

export const StyledInput = styled.input`
  background-color: #e3e3e3;
  border: none;
  border-radius: 15px;
  padding: 12px 15px;
  width: 80%;
`;

export const StyledButton = styled.button`
  background-color: #e3e3e3;
  border: none;
  border-radius: 15px;
  padding: 5px 10px;
  &:hover {
    background-color: #fef68a;
    cursor: pointer;
  }
`;

export const NotesListContainer = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

  padding: 0 15px;
  width: 90%;
`;

// Styles for a single Note
export const NoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: #fef68a;
  border-radius: 10px;
  min-height: 170px;
  padding: 1rem;
  white-space: pre-wrap;

  svg {
    &:hover {
      cursor: pointer;
      color: #ff4e45;
    }
  }

  ${(props) =>
    props.add &&
    css`
      background: white;
      border: 3px solid #e3e3e3;
      color: black;
    `}
`;

export const NoteFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
