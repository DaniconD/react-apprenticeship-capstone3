/* eslint-disable import/prefer-default-export */
import styled, { css } from 'styled-components';

const dark = '#282c34';
const light = '#fff';

export const Container = styled.div`
  background-color: ${(props) => (props.toggle ? light : dark)};
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 80px;
  min-height: 100vh;
  width: 100%;
  transition: all 0.25s linear;
  h2 {
    color: ${(props) => (props.toggle ? dark : light)} !important;
  }
  a {
    color: ${(props) => (props.toggle ? dark : light)} !important;
  }

  ${(props) =>
    props.centered &&
    css`
      display: flex;
      justify-content: center;
      button {
        margin 5px;
      }
    `}
`;

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;

  background-color: ${(props) => (props.toggle ? light : dark)};
  height: 80px;
  padding: 0 5%;
  position: fixed;
  top: 0;
  width: 90%;
  transition: all 0.25s linear;
  a {
    color: ${(props) => (props.toggle ? dark : light)} !important;
  }
  ${(props) =>
    props.navbar &&
    css`
      display: none;
    `}
  ${(props) =>
    props.displayList &&
    css`
      border-top: solid 1px black;
      border-bottom: solid 1px black;
      display: flex;
      top: 80px;
    `}
`;

export const StyledHeaderButton = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 15px;
  font-size: 1.5rem;
  padding: 10px;
  &:hover {
    background-color: #fef68a;
    cursor: pointer;
  }
`;

export const NavVarList = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-constent: flex-start;
  transition: all 0.25s linear;
  a {
    border-radius: 15px;
    padding: 10px;
    margin-right: 10px;
    &:hover {
      color: #fef68a !important;
      cursor: pointer;
    }
  }
`;

export const SearchBar = styled.div`
  display: flex;
  flex:direction: row;
  align-items: center;

  background-color: #e3e3e3;
  border-radius: 15px;
  padding: 5px 15px;
  margin: 0 5px;
  min-width: 50%;
`;

export const StyledInput = styled.input`
  background-color: #e3e3e3;
  border: none;
  font-size: 1.1rem;
  margin: 5px;
  width: 100%;
`;

export const StyledButton = styled.button`
  background-color: #e3e3e3;
  border: none;
  border-radius: 15px;
  font-size: 1.1rem;
  padding: 10px;
  &:hover {
    background-color: #fef68a;
    cursor: pointer;
  }

  ${(props) =>
    props.white &&
    css`
      background: white;
    `}
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

  background-color: ${(props) => props.bgColor || '#fef68a'};
  border-radius: 10px;
  min-height: 170px;
  padding: 1rem;
  white-space: pre-wrap;
  transition: all 0.25s linear;

  svg {
    &:hover {
      color: #fef68a;
      cursor: pointer;
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
  margin-top: 10px;
`;
