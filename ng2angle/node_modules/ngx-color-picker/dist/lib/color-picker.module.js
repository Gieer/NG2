/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TextDirective, SliderDirective } from "./helpers";
import { ColorPickerService } from "./color-picker.service";
import { ColorPickerComponent } from "./color-picker.component";
import { ColorPickerDirective } from "./color-picker.directive";
var ColorPickerModule = (function () {
    function ColorPickerModule() {
    }
    ColorPickerModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    exports: [ColorPickerDirective],
                    providers: [ColorPickerService],
                    declarations: [ColorPickerComponent, ColorPickerDirective, TextDirective, SliderDirective],
                    entryComponents: [ColorPickerComponent]
                },] },
    ];
    /** @nocollapse */
    ColorPickerModule.ctorParameters = function () { return []; };
    return ColorPickerModule;
}());
export { ColorPickerModule };
function ColorPickerModule_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    ColorPickerModule.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    ColorPickerModule.ctorParameters;
}
//# sourceMappingURL=color-picker.module.js.map