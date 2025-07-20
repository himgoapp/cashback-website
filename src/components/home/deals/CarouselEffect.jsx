// CarouselEffect.js
export function CarouselEffect({ swiper, extendParams, on }) {
  extendParams({
    carouselEffect: {
      opacityStep: 0.33,
      scaleStep: 0.2,
      sideSlides: 2,
    },
  });

  on("beforeInit", () => {
    if (swiper.params.effect !== "carousel") return;
    swiper.classNames.push(`${swiper.params.containerModifierClass}carousel`);
    Object.assign(swiper.params, {
      watchSlidesProgress: true,
      centeredSlides: true,
    });
    Object.assign(swiper.originalParams, {
      watchSlidesProgress: true,
      centeredSlides: true,
    });
  });

  on("progress", () => {
    if (swiper.params.effect !== "carousel") return;
    const { scaleStep, opacityStep, sideSlides } = swiper.params.carouselEffect;
    const side = Math.max(Math.min(sideSlides, 3), 1);
    const modifyMultiplier = { 1: 2, 2: 1, 3: 0.2 }[side];
    const translateModifier = { 1: 50, 2: 50, 3: 67 }[side];
    const zIndexMax = swiper.slides.length;

    swiper.slides.forEach((slideEl) => {
      const progress = slideEl.progress;
      const abs = Math.abs(progress);
      let modify = abs > 1 ? (abs - 1) * 0.3 * modifyMultiplier + 1 : 1;
      const translate = `${
        progress * modify * translateModifier * (swiper.rtlTranslate ? -1 : 1)
      }%`;
      const scale = 1 - abs * scaleStep;
      const zIndex = zIndexMax - Math.abs(Math.round(progress));
      slideEl.style.transform = `translateX(${translate}) scale(${scale})`;
      slideEl.style.zIndex = zIndex;
      slideEl.style.opacity = abs > side + 1 ? 0 : 1;

      const opacityEls = slideEl.querySelectorAll(
        ".swiper-carousel-animate-opacity"
      );
      opacityEls.forEach((el) => {
        el.style.opacity = 1 - abs * opacityStep;
      });
    });
  });

  on("setTransition", (swiper, duration) => {
    if (swiper.params.effect !== "carousel") return;
    swiper.slides.forEach((slideEl) => {
      slideEl.style.transitionDuration = `${duration}ms`;
      slideEl
        .querySelectorAll(".swiper-carousel-animate-opacity")
        .forEach((el) => {
          el.style.transitionDuration = `${duration}ms`;
        });
    });
  });

  on("resize", () => {
    if (swiper.virtual?.enabled) {
      requestAnimationFrame(() => {
        if (swiper.destroyed) return;
        swiper.updateSlides();
        swiper.updateProgress();
      });
    }
  });
}
