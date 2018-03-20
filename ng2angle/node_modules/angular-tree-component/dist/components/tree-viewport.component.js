import { Component, ElementRef, HostListener } from '@angular/core';
import { TreeVirtualScroll } from '../models/tree-virtual-scroll.model';
import { TREE_EVENTS } from '../constants/events';
var TreeViewportComponent = /** @class */ (function () {
    function TreeViewportComponent(elementRef, virtualScroll) {
        this.elementRef = elementRef;
        this.virtualScroll = virtualScroll;
    }
    TreeViewportComponent.prototype.ngOnInit = function () {
        this.virtualScroll.init();
    };
    TreeViewportComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.setViewport();
            _this.virtualScroll.fireEvent({ eventName: TREE_EVENTS.initialized });
        });
    };
    TreeViewportComponent.prototype.ngOnDestroy = function () {
        this.virtualScroll.clear();
    };
    TreeViewportComponent.prototype.getTotalHeight = function () {
        return this.virtualScroll.isEnabled() && this.virtualScroll.totalHeight + 'px' || 'auto';
    };
    TreeViewportComponent.prototype.onScroll = function () {
        this.setViewport();
    };
    TreeViewportComponent.prototype.setViewport = function () {
        this.virtualScroll.setViewport(this.elementRef.nativeElement);
    };
    TreeViewportComponent.decorators = [
        { type: Component, args: [{
                    selector: 'tree-viewport',
                    styles: [],
                    providers: [TreeVirtualScroll],
                    template: "\n    <ng-container *mobxAutorun=\"{dontDetach: true}\">\n      <div [style.height]=\"getTotalHeight()\">\n        <ng-content></ng-content>\n      </div>\n    </ng-container>\n  "
                },] },
    ];
    /** @nocollapse */
    TreeViewportComponent.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: TreeVirtualScroll, },
    ]; };
    TreeViewportComponent.propDecorators = {
        'onScroll': [{ type: HostListener, args: ['scroll', ['$event'],] },],
    };
    return TreeViewportComponent;
}());
export { TreeViewportComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9jb21wb25lbnRzL3RyZWUtdmlld3BvcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQUUsVUFBQSxFQUErQixZQUFBLEVBQzNDLE1BQU0sZUFBQSxDQUFnQjtBQUN2QixPQUFPLEVBQUUsaUJBQUEsRUFBa0IsTUFBTyxxQ0FBQSxDQUFzQztBQUN4RSxPQUFPLEVBQUUsV0FBQSxFQUFZLE1BQU8scUJBQUEsQ0FBc0I7QUFHbEQ7SUFDRSwrQkFDVSxVQUFzQixFQUN2QixhQUFnQztRQUQvQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3ZCLGtCQUFhLEdBQWIsYUFBYSxDQUFtQjtJQUN6QyxDQUFDO0lBRUQsd0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVELCtDQUFlLEdBQWY7UUFBQSxpQkFLQztRQUpDLFVBQVUsQ0FBQztZQUNULEtBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNuQixLQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUN2RSxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCwyQ0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQsOENBQWMsR0FBZDtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxHQUFHLElBQUksSUFBSSxNQUFNLENBQUM7SUFDM0YsQ0FBQztJQUdELHdDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELDJDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFDSSxnQ0FBVSxHQUEwQjtRQUMzQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLENBQUM7b0JBQ3hCLFFBQVEsRUFBRSxlQUFlO29CQUN6QixNQUFNLEVBQUUsRUFBRTtvQkFDVixTQUFTLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztvQkFDOUIsUUFBUSxFQUFFLHFMQU1UO2lCQUNGLEVBQUcsRUFBRTtLQUNMLENBQUM7SUFDRixrQkFBa0I7SUFDWCxvQ0FBYyxHQUFtRSxjQUFNLE9BQUE7UUFDOUYsRUFBQyxJQUFJLEVBQUUsVUFBVSxHQUFHO1FBQ3BCLEVBQUMsSUFBSSxFQUFFLGlCQUFpQixHQUFHO0tBQzFCLEVBSDZGLENBRzdGLENBQUM7SUFDSyxvQ0FBYyxHQUEyQztRQUNoRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUcsRUFBRSxFQUFFO0tBQ3BFLENBQUM7SUFDRiw0QkFBQztDQXZERCxBQXVEQyxJQUFBO1NBdkRZLHFCQUFxQiIsImZpbGUiOiJ0cmVlLXZpZXdwb3J0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFZpZXdFbmNhcHN1bGF0aW9uLCBIb3N0TGlzdGVuZXIsIEFmdGVyVmlld0luaXQsIE9uSW5pdCwgT25EZXN0cm95XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVHJlZVZpcnR1YWxTY3JvbGwgfSBmcm9tICcuLi9tb2RlbHMvdHJlZS12aXJ0dWFsLXNjcm9sbC5tb2RlbCc7XG5pbXBvcnQgeyBUUkVFX0VWRU5UUyB9IGZyb20gJy4uL2NvbnN0YW50cy9ldmVudHMnO1xuXG5cbmV4cG9ydCBjbGFzcyBUcmVlVmlld3BvcnRDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkluaXQsIE9uRGVzdHJveSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwdWJsaWMgdmlydHVhbFNjcm9sbDogVHJlZVZpcnR1YWxTY3JvbGwpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMudmlydHVhbFNjcm9sbC5pbml0KCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnNldFZpZXdwb3J0KCk7XG4gICAgICB0aGlzLnZpcnR1YWxTY3JvbGwuZmlyZUV2ZW50KHsgZXZlbnROYW1lOiBUUkVFX0VWRU5UUy5pbml0aWFsaXplZCB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMudmlydHVhbFNjcm9sbC5jbGVhcigpO1xuICB9XG5cbiAgZ2V0VG90YWxIZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMudmlydHVhbFNjcm9sbC5pc0VuYWJsZWQoKSAmJiB0aGlzLnZpcnR1YWxTY3JvbGwudG90YWxIZWlnaHQgKyAncHgnIHx8ICdhdXRvJztcbiAgfVxuXG4gIFxuICBvblNjcm9sbCgpIHtcbiAgICB0aGlzLnNldFZpZXdwb3J0KCk7XG4gIH1cblxuICBzZXRWaWV3cG9ydCgpIHtcbiAgICB0aGlzLnZpcnR1YWxTY3JvbGwuc2V0Vmlld3BvcnQodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xuICB9XG5zdGF0aWMgZGVjb3JhdG9yczogRGVjb3JhdG9ySW52b2NhdGlvbltdID0gW1xueyB0eXBlOiBDb21wb25lbnQsIGFyZ3M6IFt7XG4gIHNlbGVjdG9yOiAndHJlZS12aWV3cG9ydCcsXG4gIHN0eWxlczogW10sXG4gIHByb3ZpZGVyczogW1RyZWVWaXJ0dWFsU2Nyb2xsXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGFpbmVyICptb2J4QXV0b3J1bj1cIntkb250RGV0YWNoOiB0cnVlfVwiPlxuICAgICAgPGRpdiBbc3R5bGUuaGVpZ2h0XT1cImdldFRvdGFsSGVpZ2h0KClcIj5cbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgPC9kaXY+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIGBcbn0sIF0gfSxcbl07XG4vKiogQG5vY29sbGFwc2UgKi9cbnN0YXRpYyBjdG9yUGFyYW1ldGVyczogKCkgPT4gKHt0eXBlOiBhbnksIGRlY29yYXRvcnM/OiBEZWNvcmF0b3JJbnZvY2F0aW9uW119fG51bGwpW10gPSAoKSA9PiBbXG57dHlwZTogRWxlbWVudFJlZiwgfSxcbnt0eXBlOiBUcmVlVmlydHVhbFNjcm9sbCwgfSxcbl07XG5zdGF0aWMgcHJvcERlY29yYXRvcnM6IHtba2V5OiBzdHJpbmddOiBEZWNvcmF0b3JJbnZvY2F0aW9uW119ID0ge1xuJ29uU2Nyb2xsJzogW3sgdHlwZTogSG9zdExpc3RlbmVyLCBhcmdzOiBbJ3Njcm9sbCcsIFsnJGV2ZW50J10sIF0gfSxdLFxufTtcbn1cblxuaW50ZXJmYWNlIERlY29yYXRvckludm9jYXRpb24ge1xuICB0eXBlOiBGdW5jdGlvbjtcbiAgYXJncz86IGFueVtdO1xufVxuIl19