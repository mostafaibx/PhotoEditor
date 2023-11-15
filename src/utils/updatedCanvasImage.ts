export const updateCanvasImage = (
  image: HTMLImageElement | null,
  ctx: CanvasRenderingContext2D | null | undefined,
  colors: {
    filter: string;
  }
) => {
  if (image && ctx) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.canvas.width = image.width;
    ctx.canvas.height = image.height;
    ctx.filter = colors.filter;
    ctx.drawImage(image, 0, 0, image.width, image.height);
  }
};
