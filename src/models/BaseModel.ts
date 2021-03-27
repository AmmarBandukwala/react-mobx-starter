import { makeObservable, observable } from "mobx";

export class BaseModel {

    constructor(obj: Partial<any>) {

        makeObservable(this, {
            isSelected: observable
        })

        this.isSelected = obj.isSelected;
        this.id = obj.id;
        this.title = obj.title;
        this.tooltip = obj.tooltip;
        this.updatedBy = obj.updatedBy;
        this.updatedDate = obj.updatedDate;
        this.createdBy = obj.createdBy;
        this.createdDate = obj.createdDate;
    }

    public isSelected: boolean;
    public id: string;
    public title: string;
    public tooltip: string;
    public updatedBy: string;
    public updatedDate: string;
    public createdBy: string;
    public createdDate: string;

    static newGuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0,
                v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
}