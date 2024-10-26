function debounce(func, timeout) {
  let timer;
  timeout = timeout !== undefined ? timeout : 300; // funcが呼び出されるまでの遅延時間
  return () => {
    const context = this;
    const args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(context, args);
    }, timeout);
  };
}

const adjustViewport = () => {
  const triggerWidth = 375;
  const viewport = document.querySelector('meta[name="viewport"]');
  const value =
    window.outerWidth < triggerWidth
      ? `width=${triggerWidth}`
      : "width=device-width, initial-scale=1";
  viewport.setAttribute("content", value);
};

document.addEventListener("DOMContentLoaded", () => {
  adjustViewport(); // ロード時にデバウンスを使用
  const debouncedFunction = debounce(adjustViewport);
  window.addEventListener("resize", debouncedFunction, false); // リサイズイベントでデバウンスを使用
});
