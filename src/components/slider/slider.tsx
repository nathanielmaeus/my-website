import * as React from 'react';
import { useAnimationFrame } from './hooks';

import { Cover, Canvas, Tabs, Tab, Progress, Wrapper, Img } from './styles.css';

const MAX_PROCENT = 100;
const DEFAULT_WIDTH = 919;

export interface ISliderProps {
  images: string[];
  isVisible: boolean;
  theme: string;
}

const Slider: React.FC<ISliderProps> = ({ images, isVisible }) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const around = React.useRef<boolean>(false);

  const [position, setPosition] = React.useState<number>(0);
  const [time, setTime] = React.useState<number>(0);
  const [coverWidth, setCoverWidth] = React.useState<number>(DEFAULT_WIDTH);

  const [visible, setVisible] = React.useState<boolean>(true);
  const [progressList, setProgressList] = React.useState([0, 0, 0]);
  const [orderList] = React.useState([1, 2, 3]);

  useAnimationFrame(() => {
    if(visible) {
     setTime(prevCount => (prevCount + 60 * 0.01) % MAX_PROCENT);
    }
  });
  
  const changePosition = React.useCallback(
    (time = MAX_PROCENT) => {
      if (position === images.length - 1) {
        setProgressList([0, 0, 0]);
        setPosition(0);
      } else {
        setPosition(e => e + 1);
        setProgressList(e => [...e.slice(0, position), Math.round(time), ...e.slice(position + 1)]);
      }
    },
    [position, images],
  );
  
  React.useEffect(() => {
    if (Math.round(time) === MAX_PROCENT && !around.current) {
      changePosition(time);
      around.current = true;
      return;
    }
    if (Math.round(time) !== 100) {
      around.current = false;
    }

    setProgressList(e => [...e.slice(0, position), time, ...e.slice(position + 1)]);
  }, [time, position, images, changePosition]);

  React.useEffect(() => {
    function handleResize(): void {
      setCoverWidth(containerRef.current!.offsetWidth + 2);
    }

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  React.useEffect(() => {
    setVisible(isVisible);
  }, [isVisible]);

  const handleClick = (): void => {
    changePosition();
    setTime(0);
  };

  const renderTabs = (): React.ReactElement => (
    <Tabs>
      {images.map((url, index) => (
        <Tab key={index}>
          <Progress style={{width: `${progressList[index]}%`}} />
        </Tab>
      ))}
    </Tabs>
  );

  const renderImages = () => {
    return images.map((url, index) => {
      if(typeof images[index] !== 'string') {
        return images[index];
      }
      return <Img src={url} alt={url} ></Img> 
    })
  }

  const renderCanvas = (): React.ReactElement => {
    const images = renderImages();
    return (
      <Canvas transform={position * coverWidth}>
        {images.map((url, index) => (
          <Cover key={index} order={orderList[index]} color="yellow" width={coverWidth}>
            {images[index]}
          </Cover>
        ))}
      </Canvas>
    )
  };

  return (
    <Wrapper ref={containerRef} onClick={handleClick}>
      {renderTabs()}
      {renderCanvas()}
    </Wrapper>
  );
};

export default React.memo(Slider);
