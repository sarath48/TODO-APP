import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit, OnChanges {
  @Input() task!: string;
  todoArray: string[] = [];
  inProgressArray: string[] = [];
  completedArray: string[] = [];
  constructor() {}

  ngOnChanges() {
    this.todoArray.push(this.task);
  }

  ngOnInit(): void {}

  // moveToProgress(index: any) {
  //   this.inProgressArray.push(this.todoArray[index]);
  //   this.todoArray.splice(index, 1);
  // }
  // moveToTODO(index: any) {
  //   this.todoArray.push(this.inProgressArray[index]);
  //   this.inProgressArray.splice(index, 1);
  // }
  // moveToCompleted(index: any) {
  //   this.completedArray.push(this.inProgressArray[index]);
  //   this.inProgressArray.splice(index, 1);
  // }
  // moveToInProgress(index: any) {
  //   this.inProgressArray.push(this.completedArray[index]);
  //   this.completedArray.splice(index, 1);
  // }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
