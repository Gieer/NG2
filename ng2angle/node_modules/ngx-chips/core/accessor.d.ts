import { ControlValueAccessor } from '@angular/forms';
export declare class TagModelClass {
    [key: string]: any;
}
export declare type TagModel = string | TagModelClass;
export declare function isObject(obj: any): boolean;
export declare class TagInputAccessor implements ControlValueAccessor {
    private _items;
    private _onTouchedCallback;
    private _onChangeCallback;
    /**
     * @name displayBy
     */
    displayBy: string;
    /**
     * @name identifyBy
     */
    identifyBy: string;
    items: TagModel[];
    onTouched(): void;
    writeValue(items: any[]): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    /**
     * @name getItemValue
     * @param item
     */
    getItemValue(item: TagModel): string;
    /**
     * @name getItemDisplay
     * @param item
     */
    getItemDisplay(item: TagModel): string;
    /**
     * @name getItemsWithout
     * @param index
     */
    protected getItemsWithout(index: number): TagModel[];
}
