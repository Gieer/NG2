/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, Input, Output, EventEmitter, HostListener, ElementRef } from "@angular/core";
/**
 * @return {?}
 */
export function detectIE() {
    var /** @type {?} */ ua = '';
    if (typeof navigator !== 'undefined') {
        ua = navigator.userAgent.toLowerCase();
    }
    var /** @type {?} */ msie = ua.indexOf('msie ');
    if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }
    // Other browser
    return false;
}
var TextDirective = (function () {
    function TextDirective() {
        this.newValue = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    TextDirective.prototype.inputChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var /** @type {?} */ value = event.target.value;
        if (this.rg === undefined) {
            this.newValue.emit(value);
        }
        else {
            var /** @type {?} */ numeric = parseFloat(value);
            if (!isNaN(numeric) && numeric >= 0 && numeric <= this.rg) {
                this.newValue.emit({ v: numeric, rg: this.rg });
            }
        }
    };
    TextDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[text]'
                },] },
    ];
    /** @nocollapse */
    TextDirective.ctorParameters = function () { return []; };
    TextDirective.propDecorators = {
        "rg": [{ type: Input },],
        "text": [{ type: Input },],
        "newValue": [{ type: Output },],
        "inputChange": [{ type: HostListener, args: ['input', ['$event'],] },],
    };
    return TextDirective;
}());
export { TextDirective };
function TextDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    TextDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    TextDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    TextDirective.propDecorators;
    /** @type {?} */
    TextDirective.prototype.rg;
    /** @type {?} */
    TextDirective.prototype.text;
    /** @type {?} */
    TextDirective.prototype.newValue;
}
var SliderDirective = (function () {
    function SliderDirective(elRef) {
        var _this = this;
        this.elRef = elRef;
        this.dragEnd = new EventEmitter();
        this.dragStart = new EventEmitter();
        this.newValue = new EventEmitter();
        this.listenerMove = function (event) { return _this.move(event); };
        this.listenerStop = function () { return _this.stop(); };
    }
    /**
     * @param {?} event
     * @return {?}
     */
    SliderDirective.prototype.mouseDown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.start(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SliderDirective.prototype.touchStart = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.start(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SliderDirective.prototype.move = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        this.setCursor(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SliderDirective.prototype.start = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.setCursor(event);
        document.addEventListener('mouseup', this.listenerStop);
        document.addEventListener('touchend', this.listenerStop);
        document.addEventListener('mousemove', this.listenerMove);
        document.addEventListener('touchmove', this.listenerMove);
        this.dragStart.emit();
    };
    /**
     * @return {?}
     */
    SliderDirective.prototype.stop = /**
     * @return {?}
     */
    function () {
        document.removeEventListener('mouseup', this.listenerStop);
        document.removeEventListener('touchend', this.listenerStop);
        document.removeEventListener('mousemove', this.listenerMove);
        document.removeEventListener('touchmove', this.listenerMove);
        this.dragEnd.emit();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SliderDirective.prototype.getX = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var /** @type {?} */ position = this.elRef.nativeElement.getBoundingClientRect();
        var /** @type {?} */ pageX = (event.pageX !== undefined) ? event.pageX : event.touches[0].pageX;
        return pageX - position.left - window.pageXOffset;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SliderDirective.prototype.getY = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var /** @type {?} */ position = this.elRef.nativeElement.getBoundingClientRect();
        var /** @type {?} */ pageY = (event.pageY !== undefined) ? event.pageY : event.touches[0].pageY;
        return pageY - position.top - window.pageYOffset;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SliderDirective.prototype.setCursor = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var /** @type {?} */ width = this.elRef.nativeElement.offsetWidth;
        var /** @type {?} */ height = this.elRef.nativeElement.offsetHeight;
        var /** @type {?} */ x = Math.max(0, Math.min(this.getX(event), width));
        var /** @type {?} */ y = Math.max(0, Math.min(this.getY(event), height));
        if (this.rgX !== undefined && this.rgY !== undefined) {
            this.newValue.emit({ s: x / width, v: (1 - y / height), rgX: this.rgX, rgY: this.rgY });
        }
        else if (this.rgX === undefined && this.rgY !== undefined) {
            this.newValue.emit({ v: y / height, rgY: this.rgY });
        }
        else if (this.rgX !== undefined && this.rgY === undefined) {
            this.newValue.emit({ v: x / width, rgX: this.rgX });
        }
    };
    SliderDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[slider]'
                },] },
    ];
    /** @nocollapse */
    SliderDirective.ctorParameters = function () { return [
        { type: ElementRef, },
    ]; };
    SliderDirective.propDecorators = {
        "rgX": [{ type: Input },],
        "rgY": [{ type: Input },],
        "slider": [{ type: Input },],
        "dragEnd": [{ type: Output },],
        "dragStart": [{ type: Output },],
        "newValue": [{ type: Output },],
        "mouseDown": [{ type: HostListener, args: ['mousedown', ['$event'],] },],
        "touchStart": [{ type: HostListener, args: ['touchstart', ['$event'],] },],
    };
    return SliderDirective;
}());
export { SliderDirective };
function SliderDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    SliderDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    SliderDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    SliderDirective.propDecorators;
    /** @type {?} */
    SliderDirective.prototype.listenerMove;
    /** @type {?} */
    SliderDirective.prototype.listenerStop;
    /** @type {?} */
    SliderDirective.prototype.rgX;
    /** @type {?} */
    SliderDirective.prototype.rgY;
    /** @type {?} */
    SliderDirective.prototype.slider;
    /** @type {?} */
    SliderDirective.prototype.dragEnd;
    /** @type {?} */
    SliderDirective.prototype.dragStart;
    /** @type {?} */
    SliderDirective.prototype.newValue;
    /** @type {?} */
    SliderDirective.prototype.elRef;
}
var SliderPosition = (function () {
    function SliderPosition(h, s, v, a) {
        this.h = h;
        this.s = s;
        this.v = v;
        this.a = a;
    }
    return SliderPosition;
}());
export { SliderPosition };
function SliderPosition_tsickle_Closure_declarations() {
    /** @type {?} */
    SliderPosition.prototype.h;
    /** @type {?} */
    SliderPosition.prototype.s;
    /** @type {?} */
    SliderPosition.prototype.v;
    /** @type {?} */
    SliderPosition.prototype.a;
}
var SliderDimension = (function () {
    function SliderDimension(h, s, v, a) {
        this.h = h;
        this.s = s;
        this.v = v;
        this.a = a;
    }
    return SliderDimension;
}());
export { SliderDimension };
function SliderDimension_tsickle_Closure_declarations() {
    /** @type {?} */
    SliderDimension.prototype.h;
    /** @type {?} */
    SliderDimension.prototype.s;
    /** @type {?} */
    SliderDimension.prototype.v;
    /** @type {?} */
    SliderDimension.prototype.a;
}
//# sourceMappingURL=helpers.js.map