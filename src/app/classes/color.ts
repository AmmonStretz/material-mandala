export class Color {

  public static fromHex(hex: string): Color {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? new Color(
      hex,
      parseInt(result[1], 16),
      parseInt(result[2], 16),
      parseInt(result[3], 16)
    ) : null;
  }
  public static fromRGB(r: number, g: number, b: number): Color {
    return new Color(
      '#' + r.toString(16) + g.toString(16) + b.toString(16), r, g, b
    );
  }

  public static calcCenter(colors: Color[]) {
    let c = new Color('', 0, 0, 0);
    colors.forEach(color => {
      c.r += color.r;
      c.g += color.g;
      c.b += color.b;
    });
    return Color.fromRGB(
      c.r / colors.length,
      c.g / colors.length,
      c.b / colors.length
    );
  }

  private constructor(
    public hex: string,
    public r: number,
    public g: number,
    public b: number) { }
}
