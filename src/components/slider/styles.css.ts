import styled from 'styled-components';

interface Props {
  width?: number;
  color?: string;
  transform?: number;
  order?: number;
}

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  max-height: 500px;
  overflow: hidden;
  border-radius: 10px;
  background: ${({ theme }) =>
    `${theme === 'light' ? '#fff' : '#212121'}`};
  cursor: pointer;
  -webkit-mask-image: -webkit-radial-gradient(white, black);
`;

export const Cover = styled.div`
  position: relative;
  height: 100%;
  width: ${({ width }: Props) => `${width+1}px`};
  order: ${({ order }: Props) => `${order}`};
`;

export const Canvas = styled.div`
  display: flex;
  transition: 0.3s;
  transform: ${({ transform }: Props) => `translateX(-${transform}px)`};
`;

export const Tabs = styled.div`
  display: flex;
  position: absolute;
  top: 10px;
  left: 50%;
  width: 50%;
  background: transparent;
  transform: translateX(-50%);
  z-index: 1;
`;

export const Tab = styled.div`
  position: relative;
  height: 3px;
  width: 100%;
  margin: 0 4px;
  background: rgba(102, 103, 120, 1);
  border-radius: 10px;
  z-index: 1;
`;

export const Progress = styled.div`
  position: absolute;
  height: 100%;
  background: rgba(191, 191, 191, 1);
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
