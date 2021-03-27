import DomainStore from "./DomainStore";
import UIStore from "./UIStore";

export default class RootStore {

    constructor() {
        this.domainStore = new DomainStore();
        this.uiStore = new UIStore();        
    }

    public domainStore: DomainStore;
    public uiStore: UIStore;
}