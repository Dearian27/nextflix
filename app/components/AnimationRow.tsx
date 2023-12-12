// 'use client'
import { images } from '@/app/components/AnimBackground';

function shuffleArray(array: string[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

type AnimationRowProps = {
  shuffle: boolean,
  side: string,
  id: number,
  plus: number,
  length: number
}

const AnimationRow: React.FC<AnimationRowProps> = ({shuffle=false, side='left', id, plus, length=5}) => {  
  const iterations = Array.from({ length: length }, (_, index) => index + 1);
  let array = iterations.map((_, i) => {
    return images[(i + plus) % images.length]
  })
  // if(shuffle) {
  //   array = shuffleArray(array);
  // }

  return (
    <div className='slider-row'>
      <div className={`slider-track ${side}`}>
        {array.map((url) => {
          return <img key={url + id} src={url} alt="" />
        })}

        {array.map((url) => {
          return <img key={url + id + 'key'} src={url} alt="" />
        })}
      </div>
    </div>
  )
}

export default AnimationRow