import { Injectable, Inject  } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';



declare var Prism: any;

@Injectable({
    providedIn: 'root'
})
export class HighlightService {

    highlightAll() {
        Prism.highlightAll();
    }

}