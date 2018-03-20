import { EventEmitter, ElementRef } from '@angular/core';
export declare function detectIE(): number | false;
export declare class TextDirective {
    rg: number;
    text: any;
    newValue: EventEmitter<any>;
    inputChange(event: any): void;
}
export declare class SliderDirective {
    private elRef;
    private listenerMove;
    private listenerStop;
    rgX: number;
    rgY: number;
    slider: string;
    dragEnd: EventEmitter<{}>;
    dragStart: EventEmitter<{}>;
    newValue: EventEmitter<any>;
    mouseDown(event: any): void;
    touchStart(event: any): void;
    constructor(elRef: ElementRef);
    private move(event);
    private start(event);
    private stop();
    private getX(event);
    private getY(event);
    private setCursor(event);
}
export declare class SliderPosition {
    h: number;
    s: number;
    v: number;
    a: number;
    constructor(h: number, s: number, v: number, a: number);
}
export declare class SliderDimension {
    h: number;
    s: number;
    v: number;
    a: number;
    constructor(h: number, s: number, v: number, a: number);
}
