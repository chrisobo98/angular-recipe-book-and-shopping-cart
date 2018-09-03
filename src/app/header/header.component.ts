import { Component, EventEmitter, Output } from '@angular/core';

@Component ({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']

})
export class HeaderComponent {
    // Emitting the event, @Output is attached so the property can be listen to the parent component
    @Output() featureSelected = new EventEmitter<string>();

    // implementing onSelect being used in header.component.html, it is a string so the feauture is string
    onSelect(feature: string) {
        // using the property the property that holds the event emitter as a value to emit a event whenever we click one of the buttons
        this.featureSelected.emit(feature);
    }
  }