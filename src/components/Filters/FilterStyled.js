import styled from 'styled-components';

export const FilterForm = styled.form`
  option {
    color: rgba(18, 20, 23, 0.2);
    font-weight: 500;
    font-size: 16px;
    line-height: 1.25;
    border-radius: 14px;
    cursor: pointer;
    outline: none;
    border: none;
    border-radius: 14px;
  }

  select::-webkit-scrollbar {
    border-radius: 10px;
    width: 8px;
    height: 130px;
  }

  select::-webkit-scrollbar-thumb {
    background-color: rgba(18, 20, 23, 0.05);
    border-radius: 6px;
  }
`;
