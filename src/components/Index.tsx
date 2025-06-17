import StarIcon from "./StarIcon";

const Border=({reverse}:{reverse?:true})=>{
    return (<div className={`flex justify-center border-secondary ${reverse?'border-t':'border-b'} height-basic`}>
        <div className="w-[80%] border-secondary border-l border-r relative flex items-center justify-center">
            <div className={`absolute ${reverse?'top-0 left-0 translate-y-[-50%] translate-x-[-50%]':'bottom-0 left-0 translate-y-[50%] translate-x-[-50%]'}`}><StarIcon/></div>
            {reverse &&<div className={`absolute top-0 right-0 translate-y-[-50%] translate-x-[50%]`}><StarIcon/></div>}
            {reverse &&<div className="font-bold">©Agence Ema 2025 all right reserved</div>}
            </div>
      </div>)
}
const Index = () => {
  return (
    <div className="bg-primary h-screen flex flex-col">
        <Border/>
        <div className="flex justify-center grow">
            <div className="w-[80%] border-secondary border-l border-r flex flex-col items-center justify-center gap-8">
                <h1 className="text-3xl text-center">by <span className="font-bold">Agence Ema</span></h1>
                <StarIcon animate/>
                <h2 className="text-4xl text-center">Site en production</h2>
            </div>
        </div>
        <Border reverse/>
    </div>
  );
};

export default Index;