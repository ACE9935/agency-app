function Logo({width, className}: {width: string, className?:string}) {
    return ( 
        <img
         className={`aspect-square object-cover ${className}`}
         width={width}
         alt="Ia ema"
         src="https://c.animaapp.com/mc1n4zn94AUOLo/img/ia---ema-2-5.png"
        />
     );
}

export default Logo;