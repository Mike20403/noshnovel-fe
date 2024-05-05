import nosh_bg_v from '/src/assets/nosh_bg_v.png'
import { ArrowLeftIcon } from '@heroicons/react/16/solid';

export interface SourceNovel {
  name?:string,
  url?:string,

}

export interface NovelDetails {
  title?:string,
  totalRating?:number,
  description?:string
  imageUrl?:string,
  sources:
}
export const NovelDetails = () => {
  
  return (
    <>
    <div
      style={{
        backgroundImage: `url(${nosh_bg_v})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      className="wrapper w-full h-full min-h-[100vh] flex items-center justify-center">
      <div className="page-detail mt-[5rem] bg-white w-[90vw] h-[100vh] flex flex-col">
        <button className="flex flex-row rounded-2xl bg-app_tertiary hover:bg-app_secondary p-2 mt-5 ml-5 inline-block w-[10rem] justify-center items-center">
          <ArrowLeftIcon className="w-5 h-5"/>
          <p className="ml-2 inline-block font-bold">Trang trước</p>
        </button>

      </div>
    </div>
    </>
  )
}