import styled from "styled-components"

const dividerColorType = dividerColor => {
    switch (dividerColor) {
        case "purple":
          return "#965BA0";
        default:
          return "#fff";
      }
 }


export const Divider = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff
`
export const Triangle = styled.div`
    width: 0; 
    height: 0; 
    border-left: 40px solid transparent;
    border-right: 40px solid transparent;
    border-top: 40px solid ${({dividerColor}) => dividerColorType(dividerColor)};
    z-index: 99;
`