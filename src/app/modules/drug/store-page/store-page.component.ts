import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DrugService } from '../drug.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-store-page',
  templateUrl: './store-page.component.html',
  styleUrls: ['./store-page.component.scss']
})
export class StorePageComponent implements OnInit {

  items = [];
  activeModal;
  increaseInput;

  constructor(private router: Router,
              private authService: AuthService,
              private drugService: DrugService) { }

  ngOnInit() {
    this.getDrugs();
  }

  navigateToDrugsForm() {
    this.router.navigate(['/drugs-form'])
  }

  getDrugs() {
    this.drugService.getDrugs({}).subscribe((res) => this.items = res)
  }

  addDrugs(item) {
    this.activeModal = {
      showModal: true,
      title: 'Add new Drugs',
      type: 'increase-amount',
      item
    }
  }

  removeDrugs(item) {
    this.activeModal = {
      showModal: true,
      title: 'Remove drugs',
      type: 'decrease-amount',
      item
    }
  }

  closeModal() {
    this.activeModal = null;
  }

  onSubmit() {
    const actions = [{drug: this.activeModal.item._id, amount: this.increaseInput}];
    if (actions && actions.length) {
      const body = {actions, user: this.authService.userData.userInfo.id, type: this.activeModal.type};
      console.log(body);
      this.drugService.postDrugAction({body}).subscribe(() => {
        this.getDrugs();
      });
      this.closeModal();
      this.increaseInput = undefined;
    }
  }
}
