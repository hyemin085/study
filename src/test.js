import {useEffect} from "react";


const Test = () => {
  // if (navigator.geolocation)
  //   navigator.geolocation.getCurrentPosition(
  //     function (position) {
  //       console.log(position);
  //     },
  //     function () {
  //       alert('Could not get your position');
  //     }
  //   );
  useEffect(()=> {
    window.addEventListener('scroll', function (e) {
  console.log(window.scrollY, window.scrollX);
  }) })

  return(
    <>
      <div>
        <div></div>

      </div>
    </>
  )
}

export default Test;