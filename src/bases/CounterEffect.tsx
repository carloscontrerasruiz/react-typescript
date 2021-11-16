import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { timeline } from "console";

interface propsType {
  initialValue?: number;
}
interface state {
  clicks: number;
  counter: number;
}
export const CounterEffect = ({ initialValue = 5 }: propsType) => {
  const [counter, setcounter] = useState<state>({
    counter: initialValue,
    clicks: 0,
  });

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
    /*gsap.to("h2", { y: 10, duration: 0.2, ease: "ease.out" }).then(() => {
      gsap.to("h2", { y: 0, duration: 1, ease: "bounce.out" });
    });*/
    // gsap
    //   .to(counterAnimated.current, { y: 10, duration: 0.2, ease: "ease.out" })
    //   .then(() => {
    //     gsap.to(counterAnimated.current, {
    //       y: 0,
    //       duration: 1,
    //       ease: "bounce.out",
    //     });
    //   });
    //Timeline
    const tl = gsap.timeline();
    tl.to(counterAnimated.current, {
      y: 10,
      duration: 0.2,
      ease: "ease.out",
    }).to(counterAnimated.current, {
      y: 0,
      duration: 1,
      ease: "bounce.out",
    });
  }, [counter]);
  return (
    <div>
      <h1>Counter {counter.counter}</h1>
      <h2 ref={counterAnimated}>Clicks: {counter.clicks}</h2>
      <button onClick={() => handleClick(1)}>+1</button>
      <button onClick={() => handleClick(5)}>+5</button>
    </div>
  );
};
