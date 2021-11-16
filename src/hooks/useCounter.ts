import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";

interface state {
  clicks: number;
  counter: number;
}

export const useCounter = (initialValue: number) => {
  const [counter, setcounter] = useState<state>({
    counter: initialValue,
    clicks: 0,
  });

  const tl = useRef(gsap.timeline());

  const handleClick = (addValue: number) => {
    if (counter.counter >= 10) {
      return;
    }
    setcounter((prev) => ({
      clicks: prev.clicks + 1,
      counter: prev.counter + addValue,
    }));
  };
  const counterAnimated = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (counter.counter < 10) {
      return;
    }
    console.log("%cSe llegoa mas de 10", "color:red");
    //const tl = gsap.timeline();
  }, [counter]);

  //
  useLayoutEffect(() => {
    tl.current
      .to(counterAnimated.current, {
        y: 10,
        duration: 0.2,
        ease: "ease.out",
      })
      .to(counterAnimated.current, {
        y: 0,
        duration: 1,
        ease: "bounce.out",
      });
  }, []);

  return {
    counter,
    counterAnimated,
    handleClick,
  };
};
