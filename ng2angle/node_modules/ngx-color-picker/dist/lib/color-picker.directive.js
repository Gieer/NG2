/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, Input, Output, EventEmitter, HostListener, ApplicationRef, ElementRef, ViewContainerRef, Injector, ReflectiveInjector, ComponentFactoryResolver } from "@angular/core";
import { ColorPickerService } from "./color-picker.service";
import { ColorPickerComponent } from "./color-picker.component";
var ColorPickerDirective = (function () {
    function ColorPickerDirective(injector, cfr, appRef, vcRef, elRef, service) {
        this.injector = injector;
        this.cfr = cfr;
        this.appRef = appRef;
        this.vcRef = vcRef;
        this.elRef = elRef;
        this.service = service;
        this.dialogCreated = false;
        this.ignoreChanges = false;
        this.cpWidth = '230px';
        this.cpHeight = 'auto';
        this.cpToggle = false;
        this.cpIgnoredElements = [];
        this.cpDisableInput = false;
        this.cpAlphaChannel = 'enabled';
        this.cpOutputFormat = 'hex';
        this.cpFallbackColor = '#fff';
        this.cpDialogDisplay = 'popup';
        this.cpSaveClickOutside = true;
        this.cpUseRootViewContainer = false;
        this.cpPosition = 'right';
        this.cpPositionOffset = '0%';
        this.cpPositionRelativeToArrow = false;
        this.cpOKButton = false;
        this.cpOKButtonText = 'OK';
        this.cpOKButtonClass = 'cp-ok-button-class';
        this.cpCancelButton = false;
        this.cpCancelButtonText = 'Cancel';
        this.cpCancelButtonClass = 'cp-cancel-button-class';
        this.cpPresetLabel = 'Preset colors';
        this.cpMaxPresetColorsLength = 6;
        this.cpPresetEmptyMessage = 'No colors added';
        this.cpPresetEmptyMessageClass = 'preset-empty-message';
        this.cpAddColorButton = false;
        this.cpAddColorButtonText = 'Add color';
        this.cpAddColorButtonClass = 'cp-add-color-button-class';
        this.cpRemoveColorButtonClass = 'cp-remove-color-button-class';
        this.cpInputChange = new EventEmitter(true);
        this.cpToggleChange = new EventEmitter(true);
        this.cpSliderChange = new EventEmitter(true);
        this.cpSliderDragEnd = new EventEmitter(true);
        this.cpSliderDragStart = new EventEmitter(true);
        this.cpPresetColorsChange = new EventEmitter(true);
        this.colorPickerCancel = new EventEmitter(true);
        this.colorPickerSelect = new EventEmitter(true);
        this.colorPickerChange = new EventEmitter(false);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    ColorPickerDirective.prototype.handleClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.inputFocus();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ColorPickerDirective.prototype.handleFocus = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.inputFocus();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ColorPickerDirective.prototype.handleInput = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.inputChange(event.target.value);
    };
    /**
     * @return {?}
     */
    ColorPickerDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.colorPicker = this.colorPicker || this.cpFallbackColor || 'rgba(0, 0, 0, 1)';
    };
    /**
     * @return {?}
     */
    ColorPickerDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.cmpRef !== undefined) {
            this.cmpRef.destroy();
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    ColorPickerDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.cpToggle) {
            if (changes.cpToggle.currentValue) {
                this.openDialog();
            }
            if (!changes.cpToggle.currentValue && this.dialog) {
                this.dialog.closeDialog();
            }
        }
        if (changes.colorPicker) {
            if (this.dialog && !this.ignoreChanges) {
                if (this.cpDialogDisplay === 'inline') {
                    this.dialog.setInitialColor(changes.colorPicker.currentValue);
                }
                this.dialog.setColorFromString(changes.colorPicker.currentValue, false);
            }
            this.ignoreChanges = false;
        }
        if (changes.cpPresetLabel || changes.cpPresetColors) {
            if (this.dialog) {
                this.dialog.setPresetConfig(this.cpPresetLabel, this.cpPresetColors);
            }
        }
    };
    /**
     * @return {?}
     */
    ColorPickerDirective.prototype.openDialog = /**
     * @return {?}
     */
    function () {
        this.colorPicker = this.colorPicker || this.cpFallbackColor || 'rgba(0, 0, 0, 1)';
        if (!this.dialogCreated) {
            var /** @type {?} */ vcRef = this.vcRef;
            this.dialogCreated = true;
            if (this.cpUseRootViewContainer && this.cpDialogDisplay !== 'inline') {
                var /** @type {?} */ classOfRootComponent = this.appRef.componentTypes[0];
                var /** @type {?} */ appInstance = this.injector.get(classOfRootComponent);
                vcRef = appInstance.vcRef || appInstance.viewContainerRef || this.vcRef;
                if (vcRef === this.vcRef) {
                    console.warn('You are using cpUseRootViewContainer, ' +
                        'but the root component is not exposing viewContainerRef!' +
                        'Please expose it by adding \'public vcRef: ViewContainerRef\' to the constructor.');
                }
            }
            var /** @type {?} */ compFactory = this.cfr.resolveComponentFactory(ColorPickerComponent);
            var /** @type {?} */ injector = ReflectiveInjector.fromResolvedProviders([], vcRef.parentInjector);
            this.cmpRef = vcRef.createComponent(compFactory, 0, injector, []);
            this.cmpRef.instance.setupDialog(this, this.elRef, this.colorPicker, this.cpWidth, this.cpHeight, this.cpDialogDisplay, this.cpAlphaChannel, this.cpOutputFormat, this.cpDisableInput, this.cpIgnoredElements, this.cpSaveClickOutside, this.cpUseRootViewContainer, this.cpPosition, this.cpPositionOffset, this.cpPositionRelativeToArrow, this.cpPresetLabel, this.cpPresetColors, this.cpMaxPresetColorsLength, this.cpPresetEmptyMessage, this.cpPresetEmptyMessageClass, this.cpOKButton, this.cpOKButtonClass, this.cpOKButtonText, this.cpCancelButton, this.cpCancelButtonClass, this.cpCancelButtonText, this.cpAddColorButton, this.cpAddColorButtonClass, this.cpAddColorButtonText, this.cpRemoveColorButtonClass);
            this.dialog = this.cmpRef.instance;
            if (this.vcRef !== vcRef) {
                this.cmpRef.changeDetectorRef.detectChanges();
            }
        }
        else if (this.dialog) {
            this.dialog.openDialog(this.colorPicker);
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ColorPickerDirective.prototype.toggle = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.cpToggleChange.emit(value);
    };
    /**
     * @param {?} value
     * @param {?=} ignore
     * @return {?}
     */
    ColorPickerDirective.prototype.colorChanged = /**
     * @param {?} value
     * @param {?=} ignore
     * @return {?}
     */
    function (value, ignore) {
        if (ignore === void 0) { ignore = true; }
        this.ignoreChanges = ignore;
        this.colorPickerChange.emit(value);
    };
    /**
     * @return {?}
     */
    ColorPickerDirective.prototype.colorCanceled = /**
     * @return {?}
     */
    function () {
        this.colorPickerCancel.emit();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ColorPickerDirective.prototype.colorSelected = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.colorPickerSelect.emit(value);
    };
    /**
     * @return {?}
     */
    ColorPickerDirective.prototype.inputFocus = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ element = this.elRef.nativeElement;
        if (this.cpIgnoredElements.filter(function (item) { return item === element; }).length === 0) {
            this.openDialog();
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ColorPickerDirective.prototype.inputChange = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.dialog) {
            this.dialog.setColorFromString(value, true);
        }
        else {
            this.colorPicker = value || this.cpFallbackColor || 'rgba(0, 0, 0, 1)';
            this.colorPickerChange.emit(this.colorPicker);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ColorPickerDirective.prototype.inputChanged = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.cpInputChange.emit(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ColorPickerDirective.prototype.sliderChanged = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.cpSliderChange.emit(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ColorPickerDirective.prototype.sliderDragEnd = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.cpSliderDragEnd.emit(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ColorPickerDirective.prototype.sliderDragStart = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.cpSliderDragStart.emit(event);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ColorPickerDirective.prototype.presetColorsChanged = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.cpPresetColorsChange.emit(value);
    };
    ColorPickerDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[colorPicker]'
                },] },
    ];
    /** @nocollapse */
    ColorPickerDirective.ctorParameters = function () { return [
        { type: Injector, },
        { type: ComponentFactoryResolver, },
        { type: ApplicationRef, },
        { type: ViewContainerRef, },
        { type: ElementRef, },
        { type: ColorPickerService, },
    ]; };
    ColorPickerDirective.propDecorators = {
        "colorPicker": [{ type: Input },],
        "cpWidth": [{ type: Input },],
        "cpHeight": [{ type: Input },],
        "cpToggle": [{ type: Input },],
        "cpIgnoredElements": [{ type: Input },],
        "cpDisableInput": [{ type: Input },],
        "cpAlphaChannel": [{ type: Input },],
        "cpOutputFormat": [{ type: Input },],
        "cpFallbackColor": [{ type: Input },],
        "cpDialogDisplay": [{ type: Input },],
        "cpSaveClickOutside": [{ type: Input },],
        "cpUseRootViewContainer": [{ type: Input },],
        "cpPosition": [{ type: Input },],
        "cpPositionOffset": [{ type: Input },],
        "cpPositionRelativeToArrow": [{ type: Input },],
        "cpOKButton": [{ type: Input },],
        "cpOKButtonText": [{ type: Input },],
        "cpOKButtonClass": [{ type: Input },],
        "cpCancelButton": [{ type: Input },],
        "cpCancelButtonText": [{ type: Input },],
        "cpCancelButtonClass": [{ type: Input },],
        "cpPresetLabel": [{ type: Input },],
        "cpPresetColors": [{ type: Input },],
        "cpMaxPresetColorsLength": [{ type: Input },],
        "cpPresetEmptyMessage": [{ type: Input },],
        "cpPresetEmptyMessageClass": [{ type: Input },],
        "cpAddColorButton": [{ type: Input },],
        "cpAddColorButtonText": [{ type: Input },],
        "cpAddColorButtonClass": [{ type: Input },],
        "cpRemoveColorButtonClass": [{ type: Input },],
        "cpInputChange": [{ type: Output },],
        "cpToggleChange": [{ type: Output },],
        "cpSliderChange": [{ type: Output },],
        "cpSliderDragEnd": [{ type: Output },],
        "cpSliderDragStart": [{ type: Output },],
        "cpPresetColorsChange": [{ type: Output },],
        "colorPickerCancel": [{ type: Output },],
        "colorPickerSelect": [{ type: Output },],
        "colorPickerChange": [{ type: Output },],
        "handleClick": [{ type: HostListener, args: ['click', ['$event'],] },],
        "handleFocus": [{ type: HostListener, args: ['focus', ['$event'],] },],
        "handleInput": [{ type: HostListener, args: ['input', ['$event'],] },],
    };
    return ColorPickerDirective;
}());
export { ColorPickerDirective };
function ColorPickerDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    ColorPickerDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    ColorPickerDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    ColorPickerDirective.propDecorators;
    /** @type {?} */
    ColorPickerDirective.prototype.dialog;
    /** @type {?} */
    ColorPickerDirective.prototype.dialogCreated;
    /** @type {?} */
    ColorPickerDirective.prototype.ignoreChanges;
    /** @type {?} */
    ColorPickerDirective.prototype.cmpRef;
    /** @type {?} */
    ColorPickerDirective.prototype.colorPicker;
    /** @type {?} */
    ColorPickerDirective.prototype.cpWidth;
    /** @type {?} */
    ColorPickerDirective.prototype.cpHeight;
    /** @type {?} */
    ColorPickerDirective.prototype.cpToggle;
    /** @type {?} */
    ColorPickerDirective.prototype.cpIgnoredElements;
    /** @type {?} */
    ColorPickerDirective.prototype.cpDisableInput;
    /** @type {?} */
    ColorPickerDirective.prototype.cpAlphaChannel;
    /** @type {?} */
    ColorPickerDirective.prototype.cpOutputFormat;
    /** @type {?} */
    ColorPickerDirective.prototype.cpFallbackColor;
    /** @type {?} */
    ColorPickerDirective.prototype.cpDialogDisplay;
    /** @type {?} */
    ColorPickerDirective.prototype.cpSaveClickOutside;
    /** @type {?} */
    ColorPickerDirective.prototype.cpUseRootViewContainer;
    /** @type {?} */
    ColorPickerDirective.prototype.cpPosition;
    /** @type {?} */
    ColorPickerDirective.prototype.cpPositionOffset;
    /** @type {?} */
    ColorPickerDirective.prototype.cpPositionRelativeToArrow;
    /** @type {?} */
    ColorPickerDirective.prototype.cpOKButton;
    /** @type {?} */
    ColorPickerDirective.prototype.cpOKButtonText;
    /** @type {?} */
    ColorPickerDirective.prototype.cpOKButtonClass;
    /** @type {?} */
    ColorPickerDirective.prototype.cpCancelButton;
    /** @type {?} */
    ColorPickerDirective.prototype.cpCancelButtonText;
    /** @type {?} */
    ColorPickerDirective.prototype.cpCancelButtonClass;
    /** @type {?} */
    ColorPickerDirective.prototype.cpPresetLabel;
    /** @type {?} */
    ColorPickerDirective.prototype.cpPresetColors;
    /** @type {?} */
    ColorPickerDirective.prototype.cpMaxPresetColorsLength;
    /** @type {?} */
    ColorPickerDirective.prototype.cpPresetEmptyMessage;
    /** @type {?} */
    ColorPickerDirective.prototype.cpPresetEmptyMessageClass;
    /** @type {?} */
    ColorPickerDirective.prototype.cpAddColorButton;
    /** @type {?} */
    ColorPickerDirective.prototype.cpAddColorButtonText;
    /** @type {?} */
    ColorPickerDirective.prototype.cpAddColorButtonClass;
    /** @type {?} */
    ColorPickerDirective.prototype.cpRemoveColorButtonClass;
    /** @type {?} */
    ColorPickerDirective.prototype.cpInputChange;
    /** @type {?} */
    ColorPickerDirective.prototype.cpToggleChange;
    /** @type {?} */
    ColorPickerDirective.prototype.cpSliderChange;
    /** @type {?} */
    ColorPickerDirective.prototype.cpSliderDragEnd;
    /** @type {?} */
    ColorPickerDirective.prototype.cpSliderDragStart;
    /** @type {?} */
    ColorPickerDirective.prototype.cpPresetColorsChange;
    /** @type {?} */
    ColorPickerDirective.prototype.colorPickerCancel;
    /** @type {?} */
    ColorPickerDirective.prototype.colorPickerSelect;
    /** @type {?} */
    ColorPickerDirective.prototype.colorPickerChange;
    /** @type {?} */
    ColorPickerDirective.prototype.injector;
    /** @type {?} */
    ColorPickerDirective.prototype.cfr;
    /** @type {?} */
    ColorPickerDirective.prototype.appRef;
    /** @type {?} */
    ColorPickerDirective.prototype.vcRef;
    /** @type {?} */
    ColorPickerDirective.prototype.elRef;
    /** @type {?} */
    ColorPickerDirective.prototype.service;
}
//# sourceMappingURL=color-picker.directive.js.map