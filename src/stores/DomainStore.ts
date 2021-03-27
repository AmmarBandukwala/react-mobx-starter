import { makeAutoObservable } from "mobx";

export default class DomainStore {

    constructor() {   
        makeAutoObservable(this);
    }
}