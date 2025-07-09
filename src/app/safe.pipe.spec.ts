import { DomSanitizer } from '@angular/platform-browser';
import { SafePipe } from './safe.pipe';
import { Sanitizer } from '@angular/core';

describe('SafePipe', () => {
  it('create an instance', () => {
    /// Implement test for SafePipe
    const pipe = new SafePipe();
    expect(pipe).toBeTruthy();
  });
});
