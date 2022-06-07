import { makeAutoObservable } from "mobx";

export interface ModalStoreProps {
  messageMean: "pass" | "dinied";
  modalMessage: string;
  navigatemodalMessage?: string;
  navigateModalAddress?: string;

  isOpen: boolean;
  modalIcon?: "ok" | "no";
  color: "Green" | "Red";
}

class ModalStore {
  isOpen: ModalStoreProps["isOpen"] = false;
  modalIcon: ModalStoreProps["modalIcon"];
  color: ModalStoreProps["color"] = "Green";
  modalMessage: ModalStoreProps["modalMessage"] = "";
  navigatemodalMessage: ModalStoreProps["navigatemodalMessage"];
  navigateModalAddress: ModalStoreProps["navigateModalAddress"];

  constructor() {
    makeAutoObservable(this);
  }

  openModal(
    modalMessage: ModalStoreProps["modalMessage"],
    messageMean: ModalStoreProps["messageMean"],
    navigatemodalMessage: ModalStoreProps["navigatemodalMessage"],
    navigateModalAddress: ModalStoreProps["navigateModalAddress"]
  ) {
    this.isOpen = true;
    this.modalMessage = modalMessage;
    this.color = messageMean === "pass" ? "Green" : "Red";
    this.modalIcon = messageMean === "pass" ? "ok" : "no";
    this.navigatemodalMessage = navigatemodalMessage;
    this.navigateModalAddress = navigateModalAddress;
  }

  closeModal() {
    this.isOpen = false;
  }
}

export default ModalStore;
