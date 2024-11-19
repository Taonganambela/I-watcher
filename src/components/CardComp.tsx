

interface cardDetails {
  title: string;
  number: number;
  Icon : any;
  text?: string;
}
export const CardComp: React.FC<cardDetails> = ({
  title,
  number,
  // text,
  Icon
} ) => {
    return (
      <div className="justify-center items-center w-full pt-3 pb-3">
        <div
          className="bg-white border rounded-lg  shadow-md w-full p-4"
          // hoverable
        >
          <div className="w-full">
           
           
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2">
              <div> 
                <p className="font-semibold text-[10px]">
              {title}
            </p>
               <p className="font-bold text-4xl">
              {number}
            </p> 
              </div>
               
            <div className=" ml-0 mt-3 flex md:ml-24" > 
              {/* <div className="pt-6 text-sm font-semibold text-green-500 flex">{text}</div> */}
              {/* @tx-error */}
              <div className="text-3xl" >
                <Icon style={{ fontSize: "50" ,color:"#026efa" }}/>
              </div>
             
            </div>
            </div>
           
          </div>

        </div>
      </div>
    );
  };
  