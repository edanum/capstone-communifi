import lottie from "lottie-web";

export function getLoadingAnimation(param,) {
  lottie.loadAnimation({
    container: param.current,
    render: "svg",
    loop: true,
    autoplay: true,
    animationData: require("../public/loading_animation.json"),
  });
}
