import { DomSanitizer, SafeHtml, SafeResourceUrl, SafeScript, SafeStyle, SafeUrl, SafeValue } from '@angular/platform-browser';
import { SafePipe } from './safe.pipe';
import { Sanitizer, SecurityContext } from '@angular/core';
import { TestBed } from '@angular/core/testing';

class MockSanitizer implements DomSanitizer {
  sanitize(context: SecurityContext, value: SafeValue | string | null): string | null {
    throw new Error('Method not implemented.');
  }
  bypassSecurityTrustStyle(value: string): SafeStyle {
    throw new Error('Method not implemented.');
  }
  bypassSecurityTrustScript(value: string): SafeScript {
    throw new Error('Method not implemented.');
  }
  bypassSecurityTrustUrl(value: string): SafeUrl {
    throw new Error('Method not implemented.');
  }
  bypassSecurityTrustResourceUrl(value: string): SafeResourceUrl {
    throw new Error('Method not implemented.');
  }
  bypassSecurityTrustHtml(value: string){
    return value as SafeHtml;
  }
}

describe('SafePipe', () => {
  it('create an instance', () => {
    const pipe = new SafePipe(new MockSanitizer());
    const result = pipe.transform('Test');
    expect(result).toEqual('SafeHtml');
  });
});
