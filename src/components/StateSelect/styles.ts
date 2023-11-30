import styled from 'styled-components'

export const ContainerSelect = styled.div`
  padding: 8px;
  border-radius: 6px;

  display: flex;
  align-items: center;

  span {
    position: absolute;
    z-index: 1;
    margin-left: 5px;
  }
  select,
  option {
    width: inherit;
    position: relative;
    -webkit-appearance: none;
    -moz-appearance: none;
    -o-appearance: none;
    appearance: none;
    text-indent: 0.01px;
    padding: 13px 0px 13px 30px;

    background-color: ${(props) => props.theme['purple-light']};
    border-radius: 6px;
    text-align: r;
    font-size: 14px;
    border: 0;
    color: ${(props) => props.theme['purple-dark']};
    outline: none;

    font-size: 14px;
  }
`
