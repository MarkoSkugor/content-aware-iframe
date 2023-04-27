import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[iframeAutoResize]',
  exportAs: 'iframeAutoResize',
})
export class IframeAutoResizeDirective implements AfterViewInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const iframeWindow = this.el.nativeElement.contentWindow;

    window.addEventListener('message', (message) => {
      if (
        message.source !== iframeWindow ||
        message.data.type !== 'content-resize'
      ) {
        return; // Skip message in this event listener
      }

      if (message.data.contentRect.height) {
        this.el.nativeElement.style.height = `${message.data.contentRect.height}px`;
      }

      if (message.data.contentRect.width) {
        this.el.nativeElement.style.width = `${message.data.contentRect.width}px`;
      }
    });
  }
}
