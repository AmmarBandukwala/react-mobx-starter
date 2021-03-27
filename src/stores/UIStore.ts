import { makeAutoObservable } from "mobx";

export default class UIStore {

    constructor() {   
        makeAutoObservable(this);
    }
}