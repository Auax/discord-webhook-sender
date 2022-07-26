import styled, {css} from "styled-components"

// CONSTANTS
export const colors = {
    base100: "#242424",
    base200: "#1f1f1f",
    base300: "#151515",
    electricBlue: "#256cd3",
}

// ELEMENTS
export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  text-align: ${({textAlign}) => textAlign || "left"};
  // sm
  @media (min-width: 640px) {
    max-width: 640px;
  }
  // md
  @media (min-width: 768px) {
    max-width: 768px;
  }
  // lg
  @media (min-width: 1024px) {
    max-width: 1024px;
  }
  // xl
  @media (min-width: 1280px) {
    max-width: 1280px;
  }
  // 2xl
  @media (min-width: 1536px) {
    max-width: 1536px;
  }
`

export const Button = styled.button`
  border-radius: 5px;
  padding: 0.6em 1.2em;
  transition: all 0.1s ease-in-out;
  font-size: .9em;
  font-weight: bold;
  font-family: inherit;
  background-color: #1f1f1f;
  cursor: pointer;

  &:hover {
    background: #151515;
  }
`

export const Separator = styled.hr`
  border-color: rgba(255, 255, 255, 0.1);
`

const sharedInputStyles = css`
  padding: 10px 15px;
  ${({overrideBackground}) => overrideBackground ? "" : `background-color: ${colors.base200};`}
  border-radius: 5px;
  font-size: .9em;
  height: 43px;
  transition: all 0.15s ease-in-out;
`

export const Input = styled.input`
  ${sharedInputStyles};
`

export const SubmitInput = styled.input`
  &[type=submit] {
    background-color: rgb(0, 35, 255);
    cursor: pointer;
    padding: 10px 15px;
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 5px;
    transition: all 0.15s ease-in-out;
  }

  &[type=submit]:hover {
    //box-shadow: 0 8px 20px 2px rgba(0, 0, 0, 0.2);
    //transform: translateY(-1px);
    background-color: rgb(42, 66, 222);
  }

  &[type=submit]:focus {
    border: 1px solid rgba(255, 255, 255, 0.2);
    background-color: rgb(0, 21, 162);
  }

`

export const Textarea = styled.textarea`
  resize: none;
  ${sharedInputStyles}
`