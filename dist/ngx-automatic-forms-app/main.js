(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./projects/ngx-automatic-forms/src/lib/common/components/ngaf-field.component.ts":
/*!****************************************************************************************!*\
  !*** ./projects/ngx-automatic-forms/src/lib/common/components/ngaf-field.component.ts ***!
  \****************************************************************************************/
/*! exports provided: NgAFFieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgAFFieldComponent", function() { return NgAFFieldComponent; });
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");


var NgAFFieldComponent = /** @class */ (function () {
    function NgAFFieldComponent() {
    }
    NgAFFieldComponent.prototype.ngOnInit = function () {
        if (!Object(util__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(this.field.validators) && this.field.validators.length > 0) {
            this.formControlObject.setValidators(this.getValidators(this.field));
        }
    };
    NgAFFieldComponent.prototype.hasValidatorType = function (type) {
        return this.field.validators.filter(function (validator) { return validator.type === type; }).length > 0;
    };
    NgAFFieldComponent.prototype.getValidatorTypeValue = function (type) {
        return this.field.validators.filter(function (validator) { return validator.type === type; })[0].value;
    };
    NgAFFieldComponent.prototype.getValidators = function (field) {
        var validators = null;
        field.validators.forEach(function (validator) {
            switch (validator.type) {
                case ('required'):
                    if (validators === null) {
                        validators = _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required;
                    }
                    else {
                        validators = _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([validators, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
                    }
                    break;
                case ('max'):
                    if (validators === null) {
                        validators = _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(validator.value);
                    }
                    else {
                        validators = _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([validators, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(validator.value)]);
                    }
                    break;
                case ('min'):
                    if (validators === null) {
                        validators = _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(validator.value);
                    }
                    else {
                        validators = _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([validators, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(validator.value)]);
                    }
                    break;
                case ('maxLength'):
                    if (validators === null) {
                        validators = _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(validator.value);
                    }
                    else {
                        validators = _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([validators, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(validator.value)]);
                    }
                    break;
                case ('minLength'):
                    if (validators === null) {
                        validators = _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(validator.value);
                    }
                    else {
                        validators = _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([validators, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(validator.value)]);
                    }
                    break;
                case ('email'):
                    if (validators === null) {
                        validators = _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email;
                    }
                    else {
                        validators = _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([validators, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]);
                    }
                    break;
                case ('pattern'):
                    if (validators === null) {
                        validators = _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(validator.value);
                    }
                    else {
                        validators = _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([validators, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(validator.value)]);
                    }
                    break;
            }
        });
        return validators;
    };
    NgAFFieldComponent.prototype.changedSelectValue = function (event) {
        this.formControlObject.setValue(event.value);
    };
    /**
     * Validates field, if invalid sets default value.
     *
     * @param form
     * @param control
     * @param defaultValue
     */
    NgAFFieldComponent.prototype.checkValidation = function () {
        if (!this.formControlObject.valid) {
            this.formControlObject.setValue(this.field.value ? this.field.value : null);
        }
    };
    return NgAFFieldComponent;
}());



/***/ }),

/***/ "./projects/ngx-automatic-forms/src/lib/common/components/ngaf-form-field.component.html":
/*!***********************************************************************************************!*\
  !*** ./projects/ngx-automatic-forms/src/lib/common/components/ngaf-form-field.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template ngafDynamicField></ng-template>\r\n\r\n"

/***/ }),

/***/ "./projects/ngx-automatic-forms/src/lib/common/components/ngaf-form-field.component.ts":
/*!*********************************************************************************************!*\
  !*** ./projects/ngx-automatic-forms/src/lib/common/components/ngaf-form-field.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: NgAFFormFieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgAFFormFieldComponent", function() { return NgAFFormFieldComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_ngaf_forms_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/ngaf-forms.service */ "./projects/ngx-automatic-forms/src/lib/common/services/ngaf-forms.service.ts");
/* harmony import */ var _directives_ngaf_dynamic_field_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../directives/ngaf-dynamic-field.directive */ "./projects/ngx-automatic-forms/src/lib/common/directives/ngaf-dynamic-field.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NgAFFormFieldComponent = /** @class */ (function () {
    function NgAFFormFieldComponent(ngafFormsService, componentFactoryResolver) {
        this.ngafFormsService = ngafFormsService;
        this.componentFactoryResolver = componentFactoryResolver;
    }
    NgAFFormFieldComponent.prototype.ngOnInit = function () {
        switch (this.field.type) {
            case ('number'):
                this.defaultValue = 0;
                break;
            case ('text'):
            case ('email'):
            case ('password'):
                this.defaultValue = '';
                break;
            case ('toggle'):
            case ('checkbox'):
                this.defaultValue = false;
                break;
            case ('select'):
                this.defaultValue = null;
                break;
            default:
                break;
        }
        this.formGroup.addControl(this.field.control, new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.field.value ? this.field.value : this.defaultValue));
        var customField = this.ngafFormsService.getCustomFieldMap().get(this.field.type);
        if (customField) {
            this.loadComponent(customField);
        }
        else {
            var nativeField = this.ngafFormsService.getFieldMap().get(this.field.type);
            this.loadComponent(nativeField);
        }
    };
    NgAFFormFieldComponent.prototype.loadComponent = function (field) {
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(field.component);
        var viewContainerRef = this.ngAFDynamicField.viewContainerRef;
        viewContainerRef.clear();
        var componentRef = viewContainerRef.createComponent(componentFactory);
        componentRef.instance.field = this.field;
        componentRef.instance.formControlObject = this.formGroup.controls[this.field.control];
    };
    NgAFFormFieldComponent.prototype.reset = function () {
        this.formGroup.controls[this.field.control].setValue(this.field.value ? this.field.value : this.defaultValue);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NgAFFormFieldComponent.prototype, "field", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"])
    ], NgAFFormFieldComponent.prototype, "formGroup", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_directives_ngaf_dynamic_field_directive__WEBPACK_IMPORTED_MODULE_3__["NgAFDynamicFieldDirective"]),
        __metadata("design:type", Object)
    ], NgAFFormFieldComponent.prototype, "ngAFDynamicField", void 0);
    NgAFFormFieldComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngaf-form-field',
            template: __webpack_require__(/*! ./ngaf-form-field.component.html */ "./projects/ngx-automatic-forms/src/lib/common/components/ngaf-form-field.component.html")
        }),
        __metadata("design:paramtypes", [_services_ngaf_forms_service__WEBPACK_IMPORTED_MODULE_2__["NgAFFormsService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]])
    ], NgAFFormFieldComponent);
    return NgAFFormFieldComponent;
}());



/***/ }),

/***/ "./projects/ngx-automatic-forms/src/lib/common/components/ngaf-form-group.component.html":
/*!***********************************************************************************************!*\
  !*** ./projects/ngx-automatic-forms/src/lib/common/components/ngaf-form-group.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a>{{group.name}}</a>\r\n<div [formGroup]=\"formGroup\">\r\n  <ng-container *ngFor=\"let field of group.fields\">\r\n    <ngaf-form-field [field]=\"field\" [formGroup]=\"formGroup\"></ngaf-form-field>\r\n  </ng-container>\r\n  <div *ngFor=\"let group of group.groups\">\r\n    <ngaf-form-group [group]=\"group\" [form]=\"formGroup\"></ngaf-form-group>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./projects/ngx-automatic-forms/src/lib/common/components/ngaf-form-group.component.ts":
/*!*********************************************************************************************!*\
  !*** ./projects/ngx-automatic-forms/src/lib/common/components/ngaf-form-group.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: NgAFFormGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgAFFormGroupComponent", function() { return NgAFFormGroupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngaf_form_field_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ngaf-form-field.component */ "./projects/ngx-automatic-forms/src/lib/common/components/ngaf-form-field.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * Created by VascoCC on 2/26/2019.
 */



var NgAFFormGroupComponent = /** @class */ (function () {
    function NgAFFormGroupComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.formGroup = this.formBuilder.group({});
    }
    NgAFFormGroupComponent_1 = NgAFFormGroupComponent;
    NgAFFormGroupComponent.prototype.ngOnInit = function () {
        this.form.addControl(this.group.control, this.formGroup);
    };
    NgAFFormGroupComponent.prototype.reset = function () {
        this.fields.forEach(function (field) { return field.reset(); });
        this.groups.forEach(function (group) { return group.reset(); });
    };
    var NgAFFormGroupComponent_1;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NgAFFormGroupComponent.prototype, "group", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"])
    ], NgAFFormGroupComponent.prototype, "form", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(_ngaf_form_field_component__WEBPACK_IMPORTED_MODULE_2__["NgAFFormFieldComponent"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], NgAFFormGroupComponent.prototype, "fields", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(NgAFFormGroupComponent_1),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], NgAFFormGroupComponent.prototype, "groups", void 0);
    NgAFFormGroupComponent = NgAFFormGroupComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngaf-form-group',
            template: __webpack_require__(/*! ./ngaf-form-group.component.html */ "./projects/ngx-automatic-forms/src/lib/common/components/ngaf-form-group.component.html")
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], NgAFFormGroupComponent);
    return NgAFFormGroupComponent;
}());



/***/ }),

/***/ "./projects/ngx-automatic-forms/src/lib/common/components/ngaf-form.component.html":
/*!*****************************************************************************************!*\
  !*** ./projects/ngx-automatic-forms/src/lib/common/components/ngaf-form.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"formGroup\" (ngSubmit)=\"submit(formGroup)\" >\r\n  <ng-container *ngFor=\"let field of form.fields\">\r\n    <ngaf-form-field [field]=\"field\" [formGroup]=\"formGroup\"></ngaf-form-field>\r\n  </ng-container>\r\n  <ng-container *ngFor=\"let group of form.groups\">\r\n    <ngaf-form-group [group]=\"group\" [form]=\"formGroup\"></ngaf-form-group>\r\n  </ng-container>\r\n  <button *ngIf=\"form.hasSubmit\" type=\"submit\" [disabled]=\"formGroup.invalid\">SUBMIT</button>\r\n  <button *ngIf=\"form.hasReset\" type=\"button\" (click)=\"reset()\">RESET</button>\r\n</form>\r\n"

/***/ }),

/***/ "./projects/ngx-automatic-forms/src/lib/common/components/ngaf-form.component.ts":
/*!***************************************************************************************!*\
  !*** ./projects/ngx-automatic-forms/src/lib/common/components/ngaf-form.component.ts ***!
  \***************************************************************************************/
/*! exports provided: NgafFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgafFormComponent", function() { return NgafFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngaf_form_group_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ngaf-form-group.component */ "./projects/ngx-automatic-forms/src/lib/common/components/ngaf-form-group.component.ts");
/* harmony import */ var _ngaf_form_field_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ngaf-form-field.component */ "./projects/ngx-automatic-forms/src/lib/common/components/ngaf-form-field.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var NgafFormComponent = /** @class */ (function () {
    function NgafFormComponent(formBuilder, cd) {
        this.cd = cd;
        this.submission = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.formBuilder = formBuilder;
        this.formGroup = this.formBuilder.group({});
    }
    NgafFormComponent.prototype.ngAfterViewInit = function () {
        this.cd.detectChanges();
    };
    NgafFormComponent.prototype.reset = function () {
        this.fields.forEach(function (field) { return field.reset(); });
        this.groups.forEach(function (group) { return group.reset(); });
    };
    NgafFormComponent.prototype.submit = function (formGroup) {
        console.log(formGroup.value);
        this.submission.emit(formGroup.value);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NgafFormComponent.prototype, "form", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NgafFormComponent.prototype, "options", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NgafFormComponent.prototype, "submission", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(_ngaf_form_field_component__WEBPACK_IMPORTED_MODULE_3__["NgAFFormFieldComponent"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], NgafFormComponent.prototype, "fields", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(_ngaf_form_group_component__WEBPACK_IMPORTED_MODULE_2__["NgAFFormGroupComponent"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], NgafFormComponent.prototype, "groups", void 0);
    NgafFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngaf-form',
            template: __webpack_require__(/*! ./ngaf-form.component.html */ "./projects/ngx-automatic-forms/src/lib/common/components/ngaf-form.component.html")
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], NgafFormComponent);
    return NgafFormComponent;
}());



/***/ }),

/***/ "./projects/ngx-automatic-forms/src/lib/common/directives/ngaf-dynamic-field.directive.ts":
/*!************************************************************************************************!*\
  !*** ./projects/ngx-automatic-forms/src/lib/common/directives/ngaf-dynamic-field.directive.ts ***!
  \************************************************************************************************/
/*! exports provided: NgAFDynamicFieldDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgAFDynamicFieldDirective", function() { return NgAFDynamicFieldDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NgAFDynamicFieldDirective = /** @class */ (function () {
    function NgAFDynamicFieldDirective(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    NgAFDynamicFieldDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[ngafDynamicField]',
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]])
    ], NgAFDynamicFieldDirective);
    return NgAFDynamicFieldDirective;
}());



/***/ }),

/***/ "./projects/ngx-automatic-forms/src/lib/common/interfaces/ngaf-field.item.ts":
/*!***********************************************************************************!*\
  !*** ./projects/ngx-automatic-forms/src/lib/common/interfaces/ngaf-field.item.ts ***!
  \***********************************************************************************/
/*! exports provided: NgAFFieldItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgAFFieldItem", function() { return NgAFFieldItem; });
var NgAFFieldItem = /** @class */ (function () {
    function NgAFFieldItem(component) {
        this.component = component;
    }
    return NgAFFieldItem;
}());



/***/ }),

/***/ "./projects/ngx-automatic-forms/src/lib/common/services/ngaf-forms.service.ts":
/*!************************************************************************************!*\
  !*** ./projects/ngx-automatic-forms/src/lib/common/services/ngaf-forms.service.ts ***!
  \************************************************************************************/
/*! exports provided: NgAFFormsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgAFFormsService", function() { return NgAFFormsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NgAFFormsService = /** @class */ (function () {
    function NgAFFormsService() {
        this._fieldMap = new Map();
        this._customFieldMap = new Map();
    }
    NgAFFormsService.prototype.getFieldMap = function () {
        return this._fieldMap;
    };
    NgAFFormsService.prototype.setFieldMap = function (fieldMap) {
        this._fieldMap = fieldMap;
    };
    NgAFFormsService.prototype.getCustomFieldMap = function () {
        return this._customFieldMap;
    };
    NgAFFormsService.prototype.setCustomFields = function (customFieldMap) {
        this._customFieldMap = customFieldMap;
    };
    NgAFFormsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], NgAFFormsService);
    return NgAFFormsService;
}());



/***/ }),

/***/ "./projects/ngx-automatic-forms/src/lib/material/components/ngaf-material-checkbox.component.html":
/*!********************************************************************************************************!*\
  !*** ./projects/ngx-automatic-forms/src/lib/material/components/ngaf-material-checkbox.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "{{field.name}}\r\n<mat-checkbox class=\"example-margin\" [formControl]=\"formControlObject\">{{field.hint}}</mat-checkbox>\r\n"

/***/ }),

/***/ "./projects/ngx-automatic-forms/src/lib/material/components/ngaf-material-checkbox.component.ts":
/*!******************************************************************************************************!*\
  !*** ./projects/ngx-automatic-forms/src/lib/material/components/ngaf-material-checkbox.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: NgAFMaterialCheckBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgAFMaterialCheckBoxComponent", function() { return NgAFMaterialCheckBoxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_components_ngaf_field_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/components/ngaf-field.component */ "./projects/ngx-automatic-forms/src/lib/common/components/ngaf-field.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var NgAFMaterialCheckBoxComponent = /** @class */ (function (_super) {
    __extends(NgAFMaterialCheckBoxComponent, _super);
    function NgAFMaterialCheckBoxComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NgAFMaterialCheckBoxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./ngaf-material-checkbox.component.html */ "./projects/ngx-automatic-forms/src/lib/material/components/ngaf-material-checkbox.component.html")
        })
    ], NgAFMaterialCheckBoxComponent);
    return NgAFMaterialCheckBoxComponent;
}(_common_components_ngaf_field_component__WEBPACK_IMPORTED_MODULE_1__["NgAFFieldComponent"]));



/***/ }),

/***/ "./projects/ngx-automatic-forms/src/lib/material/components/ngaf-material-input.component.html":
/*!*****************************************************************************************************!*\
  !*** ./projects/ngx-automatic-forms/src/lib/material/components/ngaf-material-input.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "{{field.name}}\r\n<mat-form-field class=\"example-full-width\">\r\n  <input matInput type=\"{{field.type}}\" [formControl]=\"formControlObject\" >\r\n  <!-- TODO -->\r\n  <mat-hint *ngIf=\"field.hint\">{{field.hint}}</mat-hint>\r\n  <ng-container *ngFor=\"let validator of field.validators\" ngProjectAs=\"mat-error\">\r\n    <mat-error *ngIf=\"formControlObject.hasError(validator.type) && validator.error\">\r\n      <a [innerHTML]=\"validator.error\"> </a>\r\n    </mat-error>\r\n  </ng-container>\r\n</mat-form-field>\r\n"

/***/ }),

/***/ "./projects/ngx-automatic-forms/src/lib/material/components/ngaf-material-input.component.ts":
/*!***************************************************************************************************!*\
  !*** ./projects/ngx-automatic-forms/src/lib/material/components/ngaf-material-input.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: NgAFMaterialInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgAFMaterialInputComponent", function() { return NgAFMaterialInputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_components_ngaf_field_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/components/ngaf-field.component */ "./projects/ngx-automatic-forms/src/lib/common/components/ngaf-field.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var NgAFMaterialInputComponent = /** @class */ (function (_super) {
    __extends(NgAFMaterialInputComponent, _super);
    function NgAFMaterialInputComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NgAFMaterialInputComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./ngaf-material-input.component.html */ "./projects/ngx-automatic-forms/src/lib/material/components/ngaf-material-input.component.html")
        })
    ], NgAFMaterialInputComponent);
    return NgAFMaterialInputComponent;
}(_common_components_ngaf_field_component__WEBPACK_IMPORTED_MODULE_1__["NgAFFieldComponent"]));



/***/ }),

/***/ "./projects/ngx-automatic-forms/src/lib/material/ngaf-material.module.ts":
/*!*******************************************************************************!*\
  !*** ./projects/ngx-automatic-forms/src/lib/material/ngaf-material.module.ts ***!
  \*******************************************************************************/
/*! exports provided: NgAFMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgAFMaterialModule", function() { return NgAFMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngaf_automatic_forms_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ngaf-automatic-forms.module */ "./projects/ngx-automatic-forms/src/lib/ngaf-automatic-forms.module.ts");
/* harmony import */ var _common_services_ngaf_forms_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/services/ngaf-forms.service */ "./projects/ngx-automatic-forms/src/lib/common/services/ngaf-forms.service.ts");
/* harmony import */ var _common_interfaces_ngaf_field_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/interfaces/ngaf-field.item */ "./projects/ngx-automatic-forms/src/lib/common/interfaces/ngaf-field.item.ts");
/* harmony import */ var _components_ngaf_material_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/ngaf-material-input.component */ "./projects/ngx-automatic-forms/src/lib/material/components/ngaf-material-input.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _components_ngaf_material_checkbox_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/ngaf-material-checkbox.component */ "./projects/ngx-automatic-forms/src/lib/material/components/ngaf-material-checkbox.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var NgAFMaterialModule = /** @class */ (function () {
    function NgAFMaterialModule(ngafFormsService) {
        this.ngafFormsService = ngafFormsService;
        var fieldMap = new Map();
        fieldMap.set('number', new _common_interfaces_ngaf_field_item__WEBPACK_IMPORTED_MODULE_5__["NgAFFieldItem"](_components_ngaf_material_input_component__WEBPACK_IMPORTED_MODULE_6__["NgAFMaterialInputComponent"]));
        fieldMap.set('text', new _common_interfaces_ngaf_field_item__WEBPACK_IMPORTED_MODULE_5__["NgAFFieldItem"](_components_ngaf_material_input_component__WEBPACK_IMPORTED_MODULE_6__["NgAFMaterialInputComponent"]));
        fieldMap.set('email', new _common_interfaces_ngaf_field_item__WEBPACK_IMPORTED_MODULE_5__["NgAFFieldItem"](_components_ngaf_material_input_component__WEBPACK_IMPORTED_MODULE_6__["NgAFMaterialInputComponent"]));
        fieldMap.set('password', new _common_interfaces_ngaf_field_item__WEBPACK_IMPORTED_MODULE_5__["NgAFFieldItem"](_components_ngaf_material_input_component__WEBPACK_IMPORTED_MODULE_6__["NgAFMaterialInputComponent"]));
        fieldMap.set('checkbox', new _common_interfaces_ngaf_field_item__WEBPACK_IMPORTED_MODULE_5__["NgAFFieldItem"](_components_ngaf_material_checkbox_component__WEBPACK_IMPORTED_MODULE_9__["NgAFMaterialCheckBoxComponent"]));
        // fieldMap.set('select', new NgAFFieldItem(NgAFNativeSelectComponent));
        this.ngafFormsService.setFieldMap(fieldMap);
    }
    NgAFMaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _components_ngaf_material_input_component__WEBPACK_IMPORTED_MODULE_6__["NgAFMaterialInputComponent"],
                _components_ngaf_material_checkbox_component__WEBPACK_IMPORTED_MODULE_9__["NgAFMaterialCheckBoxComponent"]
            ],
            entryComponents: [
                _components_ngaf_material_input_component__WEBPACK_IMPORTED_MODULE_6__["NgAFMaterialInputComponent"],
                _components_ngaf_material_checkbox_component__WEBPACK_IMPORTED_MODULE_9__["NgAFMaterialCheckBoxComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _ngaf_automatic_forms_module__WEBPACK_IMPORTED_MODULE_3__["NgAFAutomaticFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"]
            ],
            providers: [
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_8__["ErrorStateMatcher"], useClass: _angular_material__WEBPACK_IMPORTED_MODULE_8__["ShowOnDirtyErrorStateMatcher"] }
            ]
        }),
        __metadata("design:paramtypes", [_common_services_ngaf_forms_service__WEBPACK_IMPORTED_MODULE_4__["NgAFFormsService"]])
    ], NgAFMaterialModule);
    return NgAFMaterialModule;
}());



/***/ }),

/***/ "./projects/ngx-automatic-forms/src/lib/ngaf-automatic-forms.module.ts":
/*!*****************************************************************************!*\
  !*** ./projects/ngx-automatic-forms/src/lib/ngaf-automatic-forms.module.ts ***!
  \*****************************************************************************/
/*! exports provided: NgAFAutomaticFormsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgAFAutomaticFormsModule", function() { return NgAFAutomaticFormsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_components_ngaf_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/components/ngaf-form.component */ "./projects/ngx-automatic-forms/src/lib/common/components/ngaf-form.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _common_components_ngaf_form_group_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/components/ngaf-form-group.component */ "./projects/ngx-automatic-forms/src/lib/common/components/ngaf-form-group.component.ts");
/* harmony import */ var _common_directives_ngaf_dynamic_field_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/directives/ngaf-dynamic-field.directive */ "./projects/ngx-automatic-forms/src/lib/common/directives/ngaf-dynamic-field.directive.ts");
/* harmony import */ var _common_services_ngaf_forms_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/services/ngaf-forms.service */ "./projects/ngx-automatic-forms/src/lib/common/services/ngaf-forms.service.ts");
/* harmony import */ var _common_components_ngaf_form_field_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/components/ngaf-form-field.component */ "./projects/ngx-automatic-forms/src/lib/common/components/ngaf-form-field.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var NgAFAutomaticFormsModule = /** @class */ (function () {
    function NgAFAutomaticFormsModule() {
    }
    NgAFAutomaticFormsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _common_components_ngaf_form_component__WEBPACK_IMPORTED_MODULE_1__["NgafFormComponent"],
                _common_components_ngaf_form_group_component__WEBPACK_IMPORTED_MODULE_3__["NgAFFormGroupComponent"],
                _common_directives_ngaf_dynamic_field_directive__WEBPACK_IMPORTED_MODULE_4__["NgAFDynamicFieldDirective"],
                _common_components_ngaf_form_field_component__WEBPACK_IMPORTED_MODULE_6__["NgAFFormFieldComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
            ],
            providers: [
                _common_directives_ngaf_dynamic_field_directive__WEBPACK_IMPORTED_MODULE_4__["NgAFDynamicFieldDirective"],
                _common_services_ngaf_forms_service__WEBPACK_IMPORTED_MODULE_5__["NgAFFormsService"]
            ],
            exports: [
                _common_components_ngaf_form_component__WEBPACK_IMPORTED_MODULE_1__["NgafFormComponent"]
            ]
        })
    ], NgAFAutomaticFormsModule);
    return NgAFAutomaticFormsModule;
}());



/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div class=\"TopBar\">\r\n  <a class=\"App__title\">NgxAutomaticForms</a>\r\n</div>\r\n<div class=\"Content__grid-2\">\r\n  <div class=\"Content__grid-cell\">\r\n    <h3>Json Input:</h3>\r\n    <textarea [value]=\"jsonForm\" (change)=\"onChangeJson($event)\"></textarea>\r\n  </div>\r\n  <div class=\"Content__grid-cell\">\r\n    <h2>{{formObject.name}}</h2>\r\n    <ngaf-form [form]=\"formObject\" (submission)=\"onFormSubmission($event)\"></ngaf-form>\r\n  </div>\r\n  <div class=\"Content__grid-cell\">\r\n    <h3>Form submission result:</h3>\r\n    <textarea [value]=\"jsonResult\" readonly></textarea>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent(cdr) {
        this.cdr = cdr;
        this.options = {};
        this.jsonResult = '';
        this.formObject = {
            name: 'Test Form',
            hasSubmit: true,
            hasReset: true,
            fields: [
                {
                    name: 'Number',
                    control: 'first_field_root',
                    type: 'number',
                    value: 99,
                    hint: 'Between 0 and 100',
                    validators: [
                        {
                            type: 'required',
                            error: 'Do it'
                        },
                        {
                            type: 'max',
                            value: 100,
                            error: 'Must be less than 100'
                        },
                        {
                            type: 'min',
                            value: 0,
                            error: 'Must be more than 0'
                        }
                    ]
                },
                {
                    name: 'Text (required)',
                    control: 'second_field_root',
                    type: 'text',
                    validators: [
                        {
                            type: 'required',
                            error: 'Must provide <strong>this field</strong>'
                        }
                    ]
                },
                {
                    name: 'This is a checkbox',
                    control: 'root_checkbox',
                    hint: 'Check this hint',
                    type: 'checkbox'
                },
                {
                    name: 'Email',
                    control: 'email_field',
                    type: 'email',
                    validators: [
                        {
                            type: 'required',
                            error: 'Must provide <strong>this field</strong>'
                        },
                        {
                            type: 'email',
                            error: 'Must provide a <strong>valid</strong> email address'
                        }
                    ]
                },
                {
                    name: 'Password',
                    control: 'pass_field',
                    type: 'password',
                    validators: [
                        {
                            type: 'required',
                            error: 'Must provide <strong>this field</strong>'
                        },
                        {
                            type: 'pattern',
                            value: '(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,16}',
                            error: 'Must provide a password with at least one number, one uppercase character, one lowercase character, ' +
                                'one special character, with length between 8 and 16 characters'
                        }
                    ]
                }
            ],
            groups: [
                {
                    name: 'Group 1',
                    control: 'group_1',
                    fields: [
                        {
                            name: 'Number (0-100)',
                            control: 'first_field_first_group',
                            type: 'number',
                            validators: [
                                {
                                    type: 'required'
                                },
                                {
                                    type: 'max',
                                    value: 100
                                },
                                {
                                    type: 'min',
                                    value: 0
                                }
                            ]
                        },
                        {
                            name: 'Text (required,  3 - 6)',
                            control: 'second_field_root',
                            type: 'text',
                            validators: [
                                {
                                    type: 'required'
                                },
                                {
                                    type: 'maxLength',
                                    value: 6
                                },
                                {
                                    type: 'minLength',
                                    value: 3
                                }
                            ]
                        }
                    ]
                }
            ]
        };
        this.jsonForm = JSON.stringify(this.formObject, null, 2);
    }
    AppComponent.prototype.onChangeJson = function ($event) {
        this.formObject = JSON.parse($event.target.value);
        this.cdr.detectChanges();
    };
    AppComponent.prototype.onFormSubmission = function ($event) {
        this.jsonResult = JSON.stringify($event, null, 2);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _projects_ngx_automatic_forms_src_lib_ngaf_automatic_forms_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../projects/ngx-automatic-forms/src/lib/ngaf-automatic-forms.module */ "./projects/ngx-automatic-forms/src/lib/ngaf-automatic-forms.module.ts");
/* harmony import */ var _projects_ngx_automatic_forms_src_lib_material_ngaf_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../projects/ngx-automatic-forms/src/lib/material/ngaf-material.module */ "./projects/ngx-automatic-forms/src/lib/material/ngaf-material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _projects_ngx_automatic_forms_src_lib_ngaf_automatic_forms_module__WEBPACK_IMPORTED_MODULE_3__["NgAFAutomaticFormsModule"],
                // NgAFNativeModule
                _projects_ngx_automatic_forms_src_lib_material_ngaf_material_module__WEBPACK_IMPORTED_MODULE_4__["NgAFMaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\VascoCC\GitHub\ngx-automatic-forms\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map