import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details-modal',
  templateUrl: './modal-details.component.html',
  styleUrls: ['./modal-details.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class DetailsModalComponent implements OnInit {
  @Input() item: any;
  @Output() closeModal: EventEmitter<void> = new EventEmitter();
  @Output() markAsFavorite: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
    // Addional initialization logic
  }

  // Closes the modal
  close(): void{
    this.closeModal.emit();
  }

  // Toggles the favorite star 
  toggleFavorite(): void {
    this.item.isFavorite = !this.item.isFavorite; // Toggle the favorite status
    this.markAsFavorite.emit(this.item); // Immediately emit the updated item
  } 
}
