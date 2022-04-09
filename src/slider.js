import img0 from "./img/img1.jpg";
import img1 from "./img/img2.jpg";
import img2 from "./img/img3.png";
import img3 from "./img/img4.png";
import styles from "./slider.module.scss";
import classNames from "classnames";
import React from "react";
import { useEffect, useRef, useState } from "react";

const Slider = () => {
  const totalSlides = [img0, img1, img2, img3];
  const [curSlide, setCurSlide] = useState(0);
  const [curDot, setCurDot] = useState(0);
  const slideRef = useRef(null);

  //버튼클릭
  //다음버튼 클릭 더이상 넘어갈 이미지가 없으면 초기화
  const nextSlide = () => {
    if (curSlide >= totalSlides.length - 1) {
      setCurSlide(0);
      setCurDot(0);
    } else {
      setCurSlide(curSlide + 1);
      setCurDot(curDot + 1);
    }
    console.log(curDot, "닷");
    console.log(curSlide);
    console.log("click");
  };
  //이전버튼 클릭
  const prevSlide = () => {
    if (curSlide === 0) {
      setCurSlide(totalSlides.length - 1);
      setCurDot(totalSlides.length - 1);
    } else {
      setCurSlide(curSlide - 1);
      setCurDot(curDot - 1);
    }
    console.log(curDot);
  };
  // const createDots = () => {
  //   const result = [];
  //   for (let i = 0; i < totalSlides + 1; i++) {
  //     // result.push(<div className={classNames(`styles.dot_${i}`)} />);
  //     result.push(
  //       <div
  //         key={i}
  //         // className={classNames(styles.dot, "styles.dot" + `_${i}`)}
  //         className={classNames(styles.dot, "styles.dot" + `active`)}
  //       />
  //     );
  //   }
  //   return result;
  // };
  console.log(totalSlides.length);

  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${100 * curSlide}%)`;
  }, [curSlide]);

  return (
    <>
      <div className={styles.container}>
        <h1>헹구</h1>
        <div className={styles.slider} ref={slideRef}>
          {totalSlides.map((img, idx) => (
            <div className={styles.slide} key={idx.toString()}>
              <img src={img} alt="img" key={img} />
            </div>
          ))}
        </div>
        {/*<div className={classNames(styles.slide, styles.slide_01)}>*/}
        {/*  <img src={img1} alt="img" />*/}
        {/*</div>*/}
        {/*<div className={classNames(styles.slide, styles.slide_02)}>*/}
        {/*  <img src={img2} alt="img" />*/}
        {/*</div>*/}
        {/*<div className={classNames(styles.slide, styles.slide_03)}>*/}
        {/*  <img src={img3} alt="img" />*/}
        {/*</div>*/}
        {/*<div className={classNames(styles.slide, styles.slide_04)}>*/}
        {/*  <img src={img4} alt="img" />*/}
        {/*</div>*/}
        <button
          className={classNames(styles.slide_button, styles.slide_button_left)}
          onClick={prevSlide}
        >
          &larr;
        </button>
        <button
          className={classNames(styles.slide_button, styles.slide_button_right)}
          onClick={nextSlide}
        >
          &rarr;
        </button>
        {/*<div className={styles.dots}>{createDots()}</div>*/}
        <div className={styles.dots}>
          <div
            onClick={() => {
              setCurSlide(0);
              setCurDot(0);
            }}
            className={
              curSlide === 0
                ? classNames(styles.dot, styles.dot_active)
                : styles.dot
            }
          />
          <div
            onClick={() => {
              setCurSlide(1);
              setCurDot(1);
            }}
            className={
              curSlide === 1
                ? classNames(styles.dot, styles.dot_active)
                : styles.dot
            }
          />
          <div
            onClick={() => {
              setCurSlide(2);
              setCurDot(2);
            }}
            className={
              curSlide === 2
                ? classNames(styles.dot, styles.dot_active)
                : styles.dot
            }
          />
          <div
            onClick={() => {
              setCurSlide(3);
              setCurDot(3);
            }}
            className={
              curSlide === 3
                ? classNames(styles.dot, styles.dot_active)
                : styles.dot
            }
          />
        </div>
      </div>
    </>
  );
};

export default Slider;
