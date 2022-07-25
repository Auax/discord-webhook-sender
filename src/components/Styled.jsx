import styled, {css} from "styled-components"

// CONSTANTS
export const colors = {
    base100: "#242424",
    base200: "#1f1f1f",
    base300: "#151515",
    basePText: "#bebebe",
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

export const Separator = styled.hr`
  border-color: rgba(255, 255, 255, 0.1);
`

const sharedInputStyles = css`
  padding: 10px 15px;
  ${({overrideBackground}) => overrideBackground ? "" : `background-color: ${colors.base200};`}
  border-radius: 5px;
  font-size: .9em;
  transition: background-color 0.1s ease-in-out;
  height: 43px;
`

export const Input = styled.input`
  ${sharedInputStyles}
  &[type=submit]:hover {
    ${({overrideBackground}) => overrideBackground ? "" : `background-color: ${colors.base300};`}
  }
`

export const Textarea = styled.textarea`
  resize: none;
  ${sharedInputStyles}
`