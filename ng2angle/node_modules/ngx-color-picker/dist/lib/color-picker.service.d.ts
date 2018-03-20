import { Cmyk, Rgba, Hsla, Hsva } from './formats';
export declare class ColorPickerService {
    private active;
    constructor();
    setActive(active: any): void;
    hsva2hsla(hsva: Hsva): Hsla;
    hsla2hsva(hsla: Hsla): Hsva;
    hsvaToRgba(hsva: Hsva): Rgba;
    rgbaToCmyk(rgba: Rgba): Cmyk;
    rgbaToHsva(rgba: Rgba): Hsva;
    rgbaToHex(rgba: Rgba, allowHex8?: boolean): string;
    denormalizeRGBA(rgba: Rgba): Rgba;
    stringToHsva(colorString?: string, allowHex8?: boolean): Hsva;
    outputFormat(hsva: Hsva, outputFormat: string, alphaChannel: string): string;
}
