export const getElementDocumentOffset = (
  element: HTMLElement
): { left: number; top: number } => {
  const clientRect = element.getBoundingClientRect();
  const scrollingElement =
    document.scrollingElement ?? document.documentElement;
  return {
    left: clientRect.left + scrollingElement.scrollLeft,
    top: clientRect.top + scrollingElement.scrollTop,
  };
};
