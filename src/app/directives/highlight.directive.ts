
/*
Highlight directive that can be used to highlight the 
searched keyword

- Daniel Goncalves
*/

// Importing of necessary modules
import { Directive, Input, SimpleChanges, Renderer2, ElementRef, OnChanges } from '@angular/core';

// Directive initilization
@Directive({
  selector: '[appHighlight]'
})

// Exporting the module as an encapsulated module
export class HighlightDirective implements OnChanges {
  @Input() searchedWord: string; // searchText
  @Input() content: string; // HTML content
  @Input() classToApply: string; //class to apply for highlighting
  @Input() setTitle = false; //sets title attribute of HTML

  // Directive constructor
  constructor(private el: ElementRef,
    private renderer: Renderer2) { }

  // Function that detects changes and applies higlighting
  ngOnChanges(changes: SimpleChanges): void {
    if (!this.content) {
      return;
    }

    if (this.setTitle) {
      this.renderer.setProperty(
        this.el.nativeElement,
        'title',
        this.content
      );
    }

    if (!this.searchedWord || !this.searchedWord.length || !this.classToApply) {
      this.renderer.setProperty(this.el.nativeElement, 'innerHTML', this.content);
      return;
    }

    this.renderer.setProperty(
      this.el.nativeElement,
      'innerHTML',
      this.getFormattedText()
    );
  }

  // Function that formats text
  getFormattedText() {
    const re = new RegExp(`(${this.searchedWord})`, 'gi');
    return this.content.replace(re, `<span class="${this.classToApply}">$1</span>`);
  }
  
}