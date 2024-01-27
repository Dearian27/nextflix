import React from 'react'
import getBillboardVideo from '@/app/actions/getBillboardVideo';
import PlayButton from './PlayButton';

const Billboard = async() => {
  const billboardVideoData = await getBillboardVideo();
  if(!billboardVideoData) return null;

  return (
    <div className='relative h-[56.25vw]'>
      <video 
      poster={billboardVideoData?.thumbnailUrl}
      className='w-full h-[56.25vw] object-cover brightness-[60%] transition duration-500'
      autoPlay
      muted
      loop
      preload='auto'
      src={billboardVideoData?.videoUrl}
      controls
      >
         <source src={billboardVideoData?.videoUrl} type='video/mp4' />
      </video>
      <div className='absolute top-[30%] md:top-[40%] ml-4 md:ml-16'>
        <p className='text-white text-1xl md:text-5xl h-full w-[50%] lg:text-6xl font-bold drop-shadow-xl'>
          {billboardVideoData?.title}
        </p>
        <p className='text-white text-[8px] md:text-lg mt-3 md:mt-8 w-[90%] lg:w-[50%] drop-shadow-xl'>
          {billboardVideoData?.description}
        </p>
        <div className='flex flex-row items-center mt-3 md:mt-4 gap-3'>
          <PlayButton movieId={billboardVideoData?.id}/>
        </div>
      </div>

      <video height={400} width={650} controls>
          <source src="https://drive.google.com/file/d/1kkWqZKZ7sDOFIgcqgIruna1sY7Ppcm37/preview" type='video/webm'/>
      </video>
    </div>
  )
}

export default Billboard