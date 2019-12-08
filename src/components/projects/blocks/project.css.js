import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 1rem;

  .preview {
    box-shadow: 0px 1px 2px rgba(46, 41, 51, 0.08),
      0px 2px 4px rgba(71, 63, 79, 0.08);
  }
`;

export const Title = styled.a`
  padding: 4px;
`;

export const Desc = styled.div`
  padding: 4px;
`;

export const Tags = styled.div`
  display: flex;
`;

export const Tag = styled.div`
  margin: 0 4px;
  padding: 0px 4px;
  font-size: 0.8rem;
  border: 1px solid #fff;
`;
