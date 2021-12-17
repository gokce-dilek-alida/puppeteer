/*! jQuery UI - v1.8.21 - 2012-06-05
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.core.css, jquery.ui.accordion.css, jquery.ui.autocomplete.css, jquery.ui.button.css, jquery.ui.datepicker.css, jquery.ui.dialog.css, jquery.ui.progressbar.css, jquery.ui.resizable.css, jquery.ui.selectable.css, jquery.ui.slider.css, jquery.ui.tabs.css, jquery.ui.theme.css
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */

/* Layout helpers
----------------------------------*/
.ui-helper-hidden { display: none; }
.ui-helper-hidden-accessible { position: absolute !important; clip: rect(1px 1px 1px 1px); clip: rect(1px,1px,1px,1px); }
.ui-helper-reset { margin: 0; padding: 0; border: 0; outline: 0; line-height: 1.3; text-decoration: none; font-size: 100%; list-style: none; }
.ui-helper-clearfix:before, .ui-helper-clearfix:after { content: ""; display: table; }
.ui-helper-clearfix:after { clear: both; }
.ui-helper-clearfix { zoom: 1; }
.ui-helper-zfix { width: 100%; height: 100%; top: 0; left: 0; position: absolute; opacity: 0; filter:Alpha(Opacity=0); }


/* Interaction Cues
----------------------------------*/
.ui-state-disabled { cursor: default !important; }


/* Icons
----------------------------------*/

/* states and images */
.ui-icon { display: block; text-indent: -99999px; overflow: hidden; background-repeat: no-repeat; }


/* Misc visuals
----------------------------------*/

/* Overlays */
.ui-widget-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }

/* IE/Win - Fix animation bug - #4615 */
.ui-accordion { width: 100%; }
.ui-accordion .ui-accordion-header { cursor: pointer; position: relative; margin-top: 1px; zoom: 1; }
.ui-accordion .ui-accordion-li-fix { display: inline; }
.ui-accordion .ui-accordion-header-active { border-bottom: 0 !important; }
.ui-accordion .ui-accordion-header a { display: block; font-size: 1em; padding: .5em .5em .5em .7em; }
.ui-accordion-icons .ui-accordion-header a { padding-left: 2.2em; }
.ui-accordion .ui-accordion-header .ui-icon { position: absolute; left: .5em; top: 50%; margin-top: -8px; }
.ui-accordion .ui-accordion-content { padding: 1em 2.2em; border-top: 0; margin-top: -2px; position: relative; top: 1px; margin-bottom: 2px; overflow: auto; display: none; zoom: 1; }
.ui-accordion .ui-accordion-content-active { display: block; }

.ui-autocomplete { position: absolute; cursor: default; }	

/* workarounds */
* html .ui-autocomplete { width:1px; } /* without this, the menu expands to 100% in IE6 */

/*
 * jQuery UI Menu 1.8.21
 *
 * Copyright 2010, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Menu#theming
 */
.ui-menu {
	list-style:none;
	padding: 2px;
	margin: 0;
	display:block;
	float: left;
}
.ui-menu .ui-menu {
	margin-top: -3px;
}
.ui-menu .ui-menu-item {
	margin:0;
	padding: 0;
	zoom: 1;
	float: left;
	clear: left;
	width: 100%;
}
.ui-menu .ui-menu-item a {
	text-decoration:none;
	display:block;
	padding:.2em .4em;
	line-height:1.5;
	zoom:1;
}
.ui-menu .ui-menu-item a.ui-state-hover,
.ui-menu .ui-menu-item a.ui-state-active {
	font-weight: normal;
	margin: -1px;
}

.ui-button { display: inline-block; position: relative; padding: 0; margin-right: .1em; text-decoration: none !important; cursor: pointer; text-align: center; zoom: 1; overflow: visible; } /* the overflow property removes extra width in IE */
.ui-button-icon-only { width: 2.2em; } /* to make room for the icon, a width needs to be set here */
button.ui-button-icon-only { width: 2.4em; } /* button elements seem to need a little more width */
.ui-button-icons-only { width: 3.4em; } 
button.ui-button-icons-only { width: 3.7em; } 

/*button text element */
.ui-button .ui-button-text { display: block; line-height: 1.4;  }
.ui-button-text-only .ui-button-text { padding: .4em 1em; }
.ui-button-icon-only .ui-button-text, .ui-button-icons-only .ui-button-text { padding: .4em; text-indent: -9999999px; }
.ui-button-text-icon-primary .ui-button-text, .ui-button-text-icons .ui-button-text { padding: .4em 1em .4em 2.1em; }
.ui-button-text-icon-secondary .ui-button-text, .ui-button-text-icons .ui-button-text { padding: .4em 2.1em .4em 1em; }
.ui-button-text-icons .ui-button-text { padding-left: 2.1em; padding-right: 2.1em; }
/* no icon support for input elements, provide padding by default */
input.ui-button { padding: .4em 1em; }

/*button icon element(s) */
.ui-button-icon-only .ui-icon, .ui-button-text-icon-primary .ui-icon, .ui-button-text-icon-secondary .ui-icon, .ui-button-text-icons .ui-icon, .ui-button-icons-only .ui-icon { position: absolute; top: 50%; margin-top: -8px; }
.ui-button-icon-only .ui-icon { left: 50%; margin-left: -8px; }
.ui-button-text-icon-primary .ui-button-icon-primary, .ui-button-text-icons .ui-button-icon-primary, .ui-button-icons-only .ui-button-icon-primary { left: .5em; }
.ui-button-text-icon-secondary .ui-button-icon-secondary, .ui-button-text-icons .ui-button-icon-secondary, .ui-button-icons-only .ui-button-icon-secondary { right: .5em; }
.ui-button-text-icons .ui-button-icon-secondary, .ui-button-icons-only .ui-button-icon-secondary { right: .5em; }

/*button sets*/
.ui-buttonset { margin-right: 7px; }
.ui-buttonset .ui-button { margin-left: 0; margin-right: -.3em; }

/* workarounds */
button.ui-button::-moz-focus-inner { border: 0; padding: 0; } /* reset extra padding in Firefox */

.ui-datepicker { width: 17em; padding: .2em .2em 0; display: none; }
.ui-datepicker .ui-datepicker-header { position:relative; padding:.2em 0; }
.ui-datepicker .ui-datepicker-prev, .ui-datepicker .ui-datepicker-next { position:absolute; top: 2px; width: 1.8em; height: 1.8em; }
.ui-datepicker .ui-datepicker-prev-hover, .ui-datepicker .ui-datepicker-next-hover { top: 1px; }
.ui-datepicker .ui-datepicker-prev { left:2px; }
.ui-datepicker .ui-datepicker-next { right:2px; }
.ui-datepicker .ui-datepicker-prev-hover { left:1px; }
.ui-datepicker .ui-datepicker-next-hover { right:1px; }
.ui-datepicker .ui-datepicker-prev span, .ui-datepicker .ui-datepicker-next span { display: block; position: absolute; left: 50%; margin-left: -8px; top: 50%; margin-top: -8px;  }
.ui-datepicker .ui-datepicker-title { margin: 0 2.3em; line-height: 1.8em; text-align: center; }
.ui-datepicker .ui-datepicker-title select { font-size:1em; margin:1px 0; }
.ui-datepicker select.ui-datepicker-month-year {width: 100%;}
.ui-datepicker select.ui-datepicker-month, 
.ui-datepicker select.ui-datepicker-year { width: 49%;}
.ui-datepicker table {width: 100%; font-size: .9em; border-collapse: collapse; margin:0 0 .4em; }
.ui-datepicker th { padding: .7em .3em; text-align: center; font-weight: bold; border: 0;  }
.ui-datepicker td { border: 0; padding: 1px; }
.ui-datepicker td span, .ui-datepicker td a { display: block; padding: .2em; text-align: right; text-decoration: none; }
.ui-datepicker .ui-datepicker-buttonpane { background-image: none; margin: .7em 0 0 0; padding:0 .2em; border-left: 0; border-right: 0; border-bottom: 0; }
.ui-datepicker .ui-datepicker-buttonpane button { float: right; margin: .5em .2em .4em; cursor: pointer; padding: .2em .6em .3em .6em; width:auto; overflow:visible; }
.ui-datepicker .ui-datepicker-buttonpane button.ui-datepicker-current { float:left; }

/* with multiple calendars */
.ui-datepicker.ui-datepicker-multi { width:auto; }
.ui-datepicker-multi .ui-datepicker-group { float:left; }
.ui-datepicker-multi .ui-datepicker-group table { width:95%; margin:0 auto .4em; }
.ui-datepicker-multi-2 .ui-datepicker-group { width:50%; }
.ui-datepicker-multi-3 .ui-datepicker-group { width:33.3%; }
.ui-datepicker-multi-4 .ui-datepicker-group { width:25%; }
.ui-datepicker-multi .ui-datepicker-group-last .ui-datepicker-header { border-left-width:0; }
.ui-datepicker-multi .ui-datepicker-group-middle .ui-datepicker-header { border-left-width:0; }
.ui-datepicker-multi .ui-datepicker-buttonpane { clear:left; }
.ui-datepicker-row-break { clear:both; width:100%; font-size:0em; }

/* RTL support */
.ui-datepicker-rtl { direction: rtl; }
.ui-datepicker-rtl .ui-datepicker-prev { right: 2px; left: auto; }
.ui-datepicker-rtl .ui-datepicker-next { left: 2px; right: auto; }
.ui-datepicker-rtl .ui-datepicker-prev:hover { right: 1px; left: auto; }
.ui-datepicker-rtl .ui-datepicker-next:hover { left: 1px; right: auto; }
.ui-datepicker-rtl .ui-datepicker-buttonpane { clear:right; }
.ui-datepicker-rtl .ui-datepicker-buttonpane button { float: left; }
.ui-datepicker-rtl .ui-datepicker-buttonpane button.ui-datepicker-current { float:right; }
.ui-datepicker-rtl .ui-datepicker-group { float:right; }
.ui-datepicker-rtl .ui-datepicker-group-last .ui-datepicker-header { border-right-width:0; border-left-width:1px; }
.ui-datepicker-rtl .ui-datepicker-group-middle .ui-datepicker-header { border-right-width:0; border-left-width:1px; }

/* IE6 IFRAME FIX (taken from datepicker 1.5.3 */
.ui-datepicker-cover {
    display: none; /*sorry for IE5*/
    display/**/: block; /*sorry for IE5*/
    position: absolute; /*must have*/
    z-index: -1; /*must have*/
    filter: mask(); /*must have*/
    top: -4px; /*must have*/
    left: -4px; /*must have*/
    width: 200px; /*must have*/
    height: 200px; /*must have*/
}
.ui-dialog { position: absolute; padding: .2em; width: 300px; overflow: hidden; }
.ui-dialog .ui-dialog-titlebar { padding: .4em 1em; position: relative;  }
.ui-dialog .ui-dialog-title { float: left; margin: .1em 16px .1em 0; } 
.ui-dialog .ui-dialog-titlebar-close { position: absolute; right: .3em; top: 50%; width: 19px; margin: -10px 0 0 0; padding: 1px; height: 18px; }
.ui-dialog .ui-dialog-titlebar-close span { display: block; margin: 1px; }
.ui-dialog .ui-dialog-titlebar-close:hover, .ui-dialog .ui-dialog-titlebar-close:focus { padding: 0; }
.ui-dialog .ui-dialog-content { position: relative; border: 0; padding: .5em 1em; background: none; overflow: auto; zoom: 1; }
.ui-dialog .ui-dialog-buttonpane { text-align: left; border-width: 1px 0 0 0; background-image: none; margin: .5em 0 0 0; padding: .3em 1em .5em .4em; }
.ui-dialog .ui-dialog-buttonpane .ui-dialog-buttonset { float: right; }
.ui-dialog .ui-dialog-buttonpane button { margin: .5em .4em .5em 0; cursor: pointer; }
.ui-dialog .ui-resizable-se { width: 14px; height: 14px; right: 3px; bottom: 3px; }
.ui-draggable .ui-dialog-titlebar { cursor: move; }

.ui-progressbar { height:2em; text-align: left; overflow: hidden; }
.ui-progressbar .ui-progressbar-value {margin: -1px; height:100%; }
.ui-resizable { position: relative;}
.ui-resizable-handle { position: absolute;font-size: 0.1px; display: block; }
.ui-resizable-disabled .ui-resizable-handle, .ui-resizable-autohide .ui-resizable-handle { display: none; }
.ui-resizable-n { cursor: n-resize; height: 7px; width: 100%; top: -5px; left: 0; }
.ui-resizable-s { cursor: s-resize; height: 7px; width: 100%; bottom: -5px; left: 0; }
.ui-resizable-e { cursor: e-resize; width: 7px; right: -5px; top: 0; height: 100%; }
.ui-resizable-w { cursor: w-resize; width: 7px; left: -5px; top: 0; height: 100%; }
.ui-resizable-se { cursor: se-resize; width: 12px; height: 12px; right: 1px; bottom: 1px; }
.ui-resizable-sw { cursor: sw-resize; width: 9px; height: 9px; left: -5px; bottom: -5px; }
.ui-resizable-nw { cursor: nw-resize; width: 9px; height: 9px; left: -5px; top: -5px; }
.ui-resizable-ne { cursor: ne-resize; width: 9px; height: 9px; right: -5px; top: -5px;}
.ui-selectable-helper { position: absolute; z-index: 100; border:1px dotted black; }

.ui-slider { position: relative; text-align: left; }
.ui-slider .ui-slider-handle { position: absolute; z-index: 2; width: 1.2em; height: 1.2em; cursor: default; }
.ui-slider .ui-slider-range { position: absolute; z-index: 1; font-size: .7em; display: block; border: 0; background-position: 0 0; }

.ui-slider-horizontal { height: .8em; }
.ui-slider-horizontal .ui-slider-handle { top: -.3em; margin-left: -.6em; }
.ui-slider-horizontal .ui-slider-range { top: 0; height: 100%; }
.ui-slider-horizontal .ui-slider-range-min { left: 0; }
.ui-slider-horizontal .ui-slider-range-max { right: 0; }

.ui-slider-vertical { width: .8em; height: 100px; }
.ui-slider-vertical .ui-slider-handle { left: -.3em; margin-left: 0; margin-bottom: -.6em; }
.ui-slider-vertical .ui-slider-range { left: 0; width: 100%; }
.ui-slider-vertical .ui-slider-range-min { bottom: 0; }
.ui-slider-vertical .ui-slider-range-max { top: 0; }
.ui-tabs { position: relative; padding: .2em; zoom: 1; } /* position: relative prevents IE scroll bug (element with position: relative inside container with overflow: auto appear as "fixed") */
.ui-tabs .ui-tabs-nav { margin: 0; padding: .2em .2em 0; }
.ui-tabs .ui-tabs-nav li { list-style: none; float: left; position: relative; top: 1px; margin: 0 .2em 1px 0; border-bottom: 0 !important; padding: 0; white-space: nowrap; }
.ui-tabs .ui-tabs-nav li a { float: left; padding: .5em 1em; text-decoration: none; }
.ui-tabs .ui-tabs-nav li.ui-tabs-selected { margin-bottom: 0; padding-bottom: 1px; }
.ui-tabs .ui-tabs-nav li.ui-tabs-selected a, .ui-tabs .ui-tabs-nav li.ui-state-disabled a, .ui-tabs .ui-tabs-nav li.ui-state-processing a { cursor: text; }
.ui-tabs .ui-tabs-nav li a, .ui-tabs.ui-tabs-collapsible .ui-tabs-nav li.ui-tabs-selected a { cursor: pointer; } /* first selector in group seems obsolete, but required to overcome bug in Opera applying cursor: text overall if defined elsewhere... */
.ui-tabs .ui-tabs-panel { display: block; border-width: 0; padding: 1em 1.4em; background: none; }
.ui-tabs .ui-tabs-hide { display: none !important; }

/* Component containers
----------------------------------*/
.ui-widget { font-family: Verdana,Arial,sans-serif/*{ffDefault}*/; font-size: 1.1em/*{fsDefault}*/; }
.ui-widget .ui-widget { font-size: 1em; }
.ui-widget input, .ui-widget select, .ui-widget textarea, .ui-widget button { font-family: Verdana,Arial,sans-serif/*{ffDefault}*/; font-size: 1em; }
.ui-widget-content { border: 1px solid #aaaaaa/*{borderColorContent}*/; background: #ffffff/*{bgColorContent}*/ url(images/ui-bg_flat_75_ffffff_40x100.png)/*{bgImgUrlContent}*/ 50%/*{bgContentXPos}*/ 50%/*{bgContentYPos}*/ repeat-x/*{bgContentRepeat}*/; color: #222222/*{fcContent}*/; }
.ui-widget-content a { color: #222222/*{fcContent}*/; }
.ui-widget-header { border: 1px solid #aaaaaa/*{borderColorHeader}*/; background: #cccccc/*{bgColorHeader}*/ url(images/ui-bg_highlight-soft_75_cccccc_1x100.png)/*{bgImgUrlHeader}*/ 50%/*{bgHeaderXPos}*/ 50%/*{bgHeaderYPos}*/ repeat-x/*{bgHeaderRepeat}*/; color: #222222/*{fcHeader}*/; font-weight: bold; }
.ui-widget-header a { color: #222222/*{fcHeader}*/; }

/* Interaction states
----------------------------------*/
.ui-state-default, .ui-widget-content .ui-state-default, .ui-widget-header .ui-state-default { border: 1px solid #d3d3d3/*{borderColorDefault}*/; background: #e6e6e6/*{bgColorDefault}*/ url(images/ui-bg_glass_75_e6e6e6_1x400.png)/*{bgImgUrlDefault}*/ 50%/*{bgDefaultXPos}*/ 50%/*{bgDefaultYPos}*/ repeat-x/*{bgDefaultRepeat}*/; font-weight: normal/*{fwDefault}*/; color: #555555/*{fcDefault}*/; }
.ui-state-default a, .ui-state-default a:link, .ui-state-default a:visited { color: #555555/*{fcDefault}*/; text-decoration: none; }
.ui-state-hover, .ui-widget-content .ui-state-hover, .ui-widget-header .ui-state-hover, .ui-state-focus, .ui-widget-content .ui-state-focus, .ui-widget-header .ui-state-focus { border: 1px solid #999999/*{borderColorHover}*/; background: #dadada/*{bgColorHover}*/ url(images/ui-bg_glass_75_dadada_1x400.png)/*{bgImgUrlHover}*/ 50%/*{bgHoverXPos}*/ 50%/*{bgHoverYPos}*/ repeat-x/*{bgHoverRepeat}*/; font-weight: normal/*{fwDefault}*/; color: #212121/*{fcHover}*/; }
.ui-state-hover a, .ui-state-hover a:hover { color: #212121/*{fcHover}*/; text-decoration: none; }
.ui-state-active, .ui-widget-content .ui-state-active, .ui-widget-header .ui-state-active { border: 1px solid #aaaaaa/*{borderColorActive}*/; background: #ffffff/*{bgColorActive}*/ url(images/ui-bg_glass_65_ffffff_1x400.png)/*{bgImgUrlActive}*/ 50%/*{bgActiveXPos}*/ 50%/*{bgActiveYPos}*/ repeat-x/*{bgActiveRepeat}*/; font-weight: normal/*{fwDefault}*/; color: #212121/*{fcActive}*/; }
.ui-state-active a, .ui-state-active a:link, .ui-state-active a:visited { color: #212121/*{fcActive}*/; text-decoration: none; }
.ui-widget :active { outline: none; }

/* Interaction Cues
----------------------------------*/
.ui-state-highlight, .ui-widget-content .ui-state-highlight, .ui-widget-header .ui-state-highlight  {border: 1px solid #fcefa1/*{borderColorHighlight}*/; background: #fbf9ee/*{bgColorHighlight}*/ url(images/ui-bg_glass_55_fbf9ee_1x400.png)/*{bgImgUrlHighlight}*/ 50%/*{bgHighlightXPos}*/ 50%/*{bgHighlightYPos}*/ repeat-x/*{bgHighlightRepeat}*/; color: #363636/*{fcHighlight}*/; }
.ui-state-highlight a, .ui-widget-content .ui-state-highlight a,.ui-widget-header .ui-state-highlight a { color: #363636/*{fcHighlight}*/; }
.ui-state-error, .ui-widget-content .ui-state-error, .ui-widget-header .ui-state-error {border: 1px solid #cd0a0a/*{borderColorError}*/; background: #fef1ec/*{bgColorError}*/ url(images/ui-bg_glass_95_fef1ec_1x400.png)/*{bgImgUrlError}*/ 50%/*{bgErrorXPos}*/ 50%/*{bgErrorYPos}*/ repeat-x/*{bgErrorRepeat}*/; color: #cd0a0a/*{fcError}*/; }
.ui-state-error a, .ui-widget-content .ui-state-error a, .ui-widget-header .ui-state-error a { color: #cd0a0a/*{fcError}*/; }
.ui-state-error-text, .ui-widget-content .ui-state-error-text, .ui-widget-header .ui-state-error-text { color: #cd0a0a/*{fcError}*/; }
.ui-priority-primary, .ui-widget-content .ui-priority-primary, .ui-widget-header .ui-priority-primary { font-weight: bold; }
.ui-priority-secondary, .ui-widget-content .ui-priority-secondary,  .ui-widget-header .ui-priority-secondary { opacity: .7; filter:Alpha(Opacity=70); font-weight: normal; }
.ui-state-disabled, .ui-widget-content .ui-state-disabled, .ui-widget-header .ui-state-disabled { opacity: .35; filter:Alpha(Opacity=35); background-image: none; }

/* Icons
----------------------------------*/

/* states and images */
.ui-icon { width: 16px; height: 16px; background-image: url(images/ui-icons_222222_256x240.png)/*{iconsContent}*/; }
.ui-widget-content .ui-icon {background-image: url(images/ui-icons_222222_256x240.png)/*{iconsContent}*/; }
.ui-widget-header .ui-icon {background-image: url(images/ui-icons_222222_256x240.png)/*{iconsHeader}*/; }
.ui-state-default .ui-icon { background-image: url(images/ui-icons_888888_256x240.png)/*{iconsDefault}*/; }
.ui-state-hover .ui-icon, .ui-state-focus .ui-icon {background-image: url(images/ui-icons_454545_256x240.png)/*{iconsHover}*/; }
.ui-state-active .ui-icon {background-image: url(images/ui-icons_454545_256x240.png)/*{iconsActive}*/; }
.ui-state-highlight .ui-icon {background-image: url(images/ui-icons_2e83ff_256x240.png)/*{iconsHighlight}*/; }
.ui-state-error .ui-icon, .ui-state-error-text .ui-icon {background-image: url(images/ui-icons_cd0a0a_256x240.png)/*{iconsError}*/; }

/* positioning */
.ui-icon-carat-1-n { background-position: 0 0; }
.ui-icon-carat-1-ne { background-position: -16px 0; }
.ui-icon-carat-1-e { background-position: -32px 0; }
.ui-icon-carat-1-se { background-position: -48px 0; }
.ui-icon-carat-1-s { background-position: -64px 0; }
.ui-icon-carat-1-sw { background-position: -80px 0; }
.ui-icon-carat-1-w { background-position: -96px 0; }
.ui-icon-carat-1-nw { background-position: -112px 0; }
.ui-icon-carat-2-n-s { background-position: -128px 0; }
.ui-icon-carat-2-e-w { background-position: -144px 0; }
.ui-icon-triangle-1-n { background-position: 0 -16px; }
.ui-icon-triangle-1-ne { background-position: -16px -16px; }
.ui-icon-triangle-1-e { background-position: -32px -16px; }
.ui-icon-triangle-1-se { background-position: -48px -16px; }
.ui-icon-triangle-1-s { background-position: -64px -16px; }
.ui-icon-triangle-1-sw { background-position: -80px -16px; }
.ui-icon-triangle-1-w { background-position: -96px -16px; }
.ui-icon-triangle-1-nw { background-position: -112px -16px; }
.ui-icon-triangle-2-n-s { background-position: -128px -16px; }
.ui-icon-triangle-2-e-w { background-position: -144px -16px; }
.ui-icon-arrow-1-n { background-position: 0 -32px; }
.ui-icon-arrow-1-ne { background-position: -16px -32px; }
.ui-icon-arrow-1-e { background-position: -32px -32px; }
.ui-icon-arrow-1-se { background-position: -48px -32px; }
.ui-icon-arrow-1-s { background-position: -64px -32px; }
.ui-icon-arrow-1-sw { background-position: -80px -32px; }
.ui-icon-arrow-1-w { background-position: -96px -32px; }
.ui-icon-arrow-1-nw { background-position: -112px -32px; }
.ui-icon-arrow-2-n-s { background-position: -128px -32px; }
.ui-icon-arrow-2-ne-sw { background-position: -144px -32px; }
.ui-icon-arrow-2-e-w { background-position: -160px -32px; }
.ui-icon-arrow-2-se-nw { background-position: -176px -32px; }
.ui-icon-arrowstop-1-n { background-position: -192px -32px; }
.ui-icon-arrowstop-1-e { background-position: -208px -32px; }
.ui-icon-arrowstop-1-s { background-position: -224px -32px; }
.ui-icon-arrowstop-1-w { background-position: -240px -32px; }
.ui-icon-arrowthick-1-n { background-position: 0 -48px; }
.ui-icon-arrowthick-1-ne { background-position: -16px -48px; }
.ui-icon-arrowthick-1-e { background-position: -32px -48px; }
.ui-icon-arrowthick-1-se { background-position: -48px -48px; }
.ui-icon-arrowthick-1-s { background-position: -64px -48px; }
.ui-icon-arrowthick-1-sw { background-position: -80px -48px; }
.ui-icon-arrowthick-1-w { background-position: -96px -48px; }
.ui-icon-arrowthick-1-nw { background-position: -112px -48px; }
.ui-icon-arrowthick-2-n-s { background-position: -128px -48px; }
.ui-icon-arrowthick-2-ne-sw { background-position: -144px -48px; }
.ui-icon-arrowthick-2-e-w { background-position: -160px -48px; }
.ui-icon-arrowthick-2-se-nw { background-position: -176px -48px; }
.ui-icon-arrowthickstop-1-n { background-position: -192px -48px; }
.ui-icon-arrowthickstop-1-e { background-position: -208px -48px; }
.ui-icon-arrowthickstop-1-s { background-position: -224px -48px; }
.ui-icon-arrowthickstop-1-w { background-position: -240px -48px; }
.ui-icon-arrowreturnthick-1-w { background-position: 0 -64px; }
.ui-icon-arrowreturnthick-1-n { background-position: -16px -64px; }
.ui-icon-arrowreturnthick-1-e { background-position: -32px -64px; }
.ui-icon-arrowreturnthick-1-s { background-position: -48px -64px; }
.ui-icon-arrowreturn-1-w { background-position: -64px -64px; }
.ui-icon-arrowreturn-1-n { background-position: -80px -64px; }
.ui-icon-arrowreturn-1-e { background-position: -96px -64px; }
.ui-icon-arrowreturn-1-s { background-position: -112px -64px; }
.ui-icon-arrowrefresh-1-w { background-position: -128px -64px; }
.ui-icon-arrowrefresh-1-n { background-position: -144px -64px; }
.ui-icon-arrowrefresh-1-e { background-position: -160px -64px; }
.ui-icon-arrowrefresh-1-s { background-position: -176px -64px; }
.ui-icon-arrow-4 { background-position: 0 -80px; }
.ui-icon-arrow-4-diag { background-position: -16px -80px; }
.ui-icon-extlink { background-position: -32px -80px; }
.ui-icon-newwin { background-position: -48px -80px; }
.ui-icon-refresh { background-position: -64px -80px; }
.ui-icon-shuffle { background-position: -80px -80px; }
.ui-icon-transfer-e-w { background-position: -96px -80px; }
.ui-icon-transferthick-e-w { background-position: -112px -80px; }
.ui-icon-folder-collapsed { background-position: 0 -96px; }
.ui-icon-folder-open { background-position: -16px -96px; }
.ui-icon-document { background-position: -32px -96px; }
.ui-icon-document-b { background-position: -48px -96px; }
.ui-icon-note { background-position: -64px -96px; }
.ui-icon-mail-closed { background-position: -80px -96px; }
.ui-icon-mail-open { background-position: -96px -96px; }
.ui-icon-suitcase { background-position: -112px -96px; }
.ui-icon-comment { background-position: -128px -96px; }
.ui-icon-person { background-position: -144px -96px; }
.ui-icon-print { background-position: -160px -96px; }
.ui-icon-trash { background-position: -176px -96px; }
.ui-icon-locked { background-position: -192px -96px; }
.ui-icon-unlocked { background-position: -208px -96px; }
.ui-icon-bookmark { background-position: -224px -96px; }
.ui-icon-tag { background-position: -240px -96px; }
.ui-icon-home { background-position: 0 -112px; }
.ui-icon-flag { background-position: -16px -112px; }
.ui-icon-calendar { background-position: -32px -112px; }
.ui-icon-cart { background-position: -48px -112px; }
.ui-icon-pencil { background-position: -64px -112px; }
.ui-icon-clock { background-position: -80px -112px; }
.ui-icon-disk { background-position: -96px -112px; }
.ui-icon-calculator { background-position: -112px -112px; }
.ui-icon-zoomin { background-position: -128px -112px; }
.ui-icon-zoomout { background-position: -144px -112px; }
.ui-icon-search { background-position: -160px -112px; }
.ui-icon-wrench { background-position: -176px -112px; }
.ui-icon-gear { background-position: -192px -112px; }
.ui-icon-heart { background-position: -208px -112px; }
.ui-icon-star { background-position: -224px -112px; }
.ui-icon-link { background-position: -240px -112px; }
.ui-icon-cancel { background-position: 0 -128px; }
.ui-icon-plus { background-position: -16px -128px; }
.ui-icon-plusthick { background-position: -32px -128px; }
.ui-icon-minus { background-position: -48px -128px; }
.ui-icon-minusthick { background-position: -64px -128px; }
.ui-icon-close { background-position: -80px -128px; }
.ui-icon-closethick { background-position: -96px -128px; }
.ui-icon-key { background-position: -112px -128px; }
.ui-icon-lightbulb { background-position: -128px -128px; }
.ui-icon-scissors { background-position: -144px -128px; }
.ui-icon-clipboard { background-position: -160px -128px; }
.ui-icon-copy { background-position: -176px -128px; }
.ui-icon-contact { background-position: -192px -128px; }
.ui-icon-image { background-position: -208px -128px; }
.ui-icon-video { background-position: -224px -128px; }
.ui-icon-script { background-position: -240px -128px; }
.ui-icon-alert { background-position: 0 -144px; }
.ui-icon-info { background-position: -16px -144px; }
.ui-icon-notice { background-position: -32px -144px; }
.ui-icon-help { background-position: -48px -144px; }
.ui-icon-check { background-position: -64px -144px; }
.ui-icon-bullet { background-position: -80px -144px; }
.ui-icon-radio-off { background-position: -96px -144px; }
.ui-icon-radio-on { background-position: -112px -144px; }
.ui-icon-pin-w { background-position: -128px -144px; }
.ui-icon-pin-s { background-position: -144px -144px; }
.ui-icon-play { background-position: 0 -160px; }
.ui-icon-pause { background-position: -16px -160px; }
.ui-icon-seek-next { background-position: -32px -160px; }
.ui-icon-seek-prev { background-position: -48px -160px; }
.ui-icon-seek-end { background-position: -64px -160px; }
.ui-icon-seek-start { background-position: -80px -160px; }
/* ui-icon-seek-first is deprecated, use ui-icon-seek-start instead */
.ui-icon-seek-first { background-position: -80px -160px; }
.ui-icon-stop { background-position: -96px -160px; }
.ui-icon-eject { background-position: -112px -160px; }
.ui-icon-volume-off { background-position: -128px -160px; }
.ui-icon-volume-on { background-position: -144px -160px; }
.ui-icon-power { background-position: 0 -176px; }
.ui-icon-signal-diag { background-position: -16px -176px; }
.ui-icon-signal { background-position: -32px -176px; }
.ui-icon-battery-0 { background-position: -48px -176px; }
.ui-icon-battery-1 { background-position: -64px -176px; }
.ui-icon-battery-2 { background-position: -80px -176px; }
.ui-icon-battery-3 { background-position: -96px -176px; }
.ui-icon-circle-plus { background-position: 0 -192px; }
.ui-icon-circle-minus { background-position: -16px -192px; }
.ui-icon-circle-close { background-position: -32px -192px; }
.ui-icon-circle-triangle-e { background-position: -48px -192px; }
.ui-icon-circle-triangle-s { background-position: -64px -192px; }
.ui-icon-circle-triangle-w { background-position: -80px -192px; }
.ui-icon-circle-triangle-n { background-position: -96px -192px; }
.ui-icon-circle-arrow-e { background-position: -112px -192px; }
.ui-icon-circle-arrow-s { background-position: -128px -192px; }
.ui-icon-circle-arrow-w { background-position: -144px -192px; }
.ui-icon-circle-arrow-n { background-position: -160px -192px; }
.ui-icon-circle-zoomin { background-position: -176px -192px; }
.ui-icon-circle-zoomout { background-position: -192px -192px; }
.ui-icon-circle-check { background-position: -208px -192px; }
.ui-icon-circlesmall-plus { background-position: 0 -208px; }
.ui-icon-circlesmall-minus { background-position: -16px -208px; }
.ui-icon-circlesmall-close { background-position: -32px -208px; }
.ui-icon-squaresmall-plus { background-position: -48px -208px; }
.ui-icon-squaresmall-minus { background-position: -64px -208px; }
.ui-icon-squaresmall-close { background-position: -80px -208px; }
.ui-icon-grip-dotted-vertical { background-position: 0 -224px; }
.ui-icon-grip-dotted-horizontal { background-position: -16px -224px; }
.ui-icon-grip-solid-vertical { background-position: -32px -224px; }
.ui-icon-grip-solid-horizontal { background-position: -48px -224px; }
.ui-icon-gripsmall-diagonal-se { background-position: -64px -224px; }
.ui-icon-grip-diagonal-se { background-position: -80px -224px; }


/* Misc visuals
----------------------------------*/

/* Corner radius */
.ui-corner-all, .ui-corner-top, .ui-corner-left, .ui-corner-tl { -moz-border-radius-topleft: 4px/*{cornerRadius}*/; -webkit-border-top-left-radius: 4px/*{cornerRadius}*/; -khtml-border-top-left-radius: 4px/*{cornerRadius}*/; border-top-left-radius: 4px/*{cornerRadius}*/; }
.ui-corner-all, .ui-corner-top, .ui-corner-right, .ui-corner-tr { -moz-border-radius-topright: 4px/*{cornerRadius}*/; -webkit-border-top-right-radius: 4px/*{cornerRadius}*/; -khtml-border-top-right-radius: 4px/*{cornerRadius}*/; border-top-right-radius: 4px/*{cornerRadius}*/; }
.ui-corner-all, .ui-corner-bottom, .ui-corner-left, .ui-corner-bl { -moz-border-radius-bottomleft: 4px/*{cornerRadius}*/; -webkit-border-bottom-left-radius: 4px/*{cornerRadius}*/; -khtml-border-bottom-left-radius: 4px/*{cornerRadius}*/; border-bottom-left-radius: 4px/*{cornerRadius}*/; }
.ui-corner-all, .ui-corner-bottom, .ui-corner-right, .ui-corner-br { -moz-border-radius-bottomright: 4px/*{cornerRadius}*/; -webkit-border-bottom-right-radius: 4px/*{cornerRadius}*/; -khtml-border-bottom-right-radius: 4px/*{cornerRadius}*/; border-bottom-right-radius: 4px/*{cornerRadius}*/; }

/* Overlays */
.ui-widget-overlay { background: #aaaaaa/*{bgColorOverlay}*/ url(images/ui-bg_flat_0_aaaaaa_40x100.png)/*{bgImgUrlOverlay}*/ 50%/*{bgOverlayXPos}*/ 50%/*{bgOverlayYPos}*/ repeat-x/*{bgOverlayRepeat}*/; opacity: .3;filter:Alpha(Opacity=30)/*{opacityOverlay}*/; }
.ui-widget-shadow { margin: -8px/*{offsetTopShadow}*/ 0 0 -8px/*{offsetLeftShadow}*/; padding: 8px/*{thicknessShadow}*/; background: #aaaaaa/*{bgColorShadow}*/ url(images/ui-bg_flat_0_aaaaaa_40x100.png)/*{bgImgUrlShadow}*/ 50%/*{bgShadowXPos}*/ 50%/*{bgShadowYPos}*/ repeat-x/*{bgShadowRepeat}*/; opacity: .3;filter:Alpha(Opacity=30)/*{opacityShadow}*/; -moz-border-radius: 8px/*{cornerRadiusShadow}*/; -khtml-border-radius: 8px/*{cornerRadiusShadow}*/; -webkit-border-radius: 8px/*{cornerRadiusShadow}*/; border-radius: 8px/*{cornerRadiusShadow}*/; }
html {
    font-size: 100%;
}

body
{
    font: 1rem Helvetica,Arial,sans-serif;
    margin: 0;
}

#vclogo
{
    background-position: -190px -100px; /* vc */
    width: 177px;
    height: 34px;
}

#wrapper
{
    margin: 0;
    padding: 0;
    text-align: center;
}

#banner, #page
{
    padding: 0;
    margin: 0;
}

#page
{
    width: 987px;
    margin: 0 auto;
    text-align: left;
}

[dir='rtl'] #page
{
    text-align: right;
}

#banner
{
    height: 70px;
    width: 987px;
    text-align: center;
}

#headerImage
{
    display: none;
}

#headerImage img
{
    display: block;
}

.question
{
    width: 927px;
    padding-bottom: 30px;
}

#pagecontent
{
    margin: 0;
    border: 0;
}

#questionContent
{
    width: 927px;
    padding: 40px 30px 0 30px;
    display:none;
}

/*#page h1 .dropcap*/
/*{*/
/*display: none;*/
/*}*/

.error
{
    -webkit-border-radius: 10px;
    -khtml-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    border-style: solid;
    border-color: #520007;
    color: white;
    padding: 3px 5px 3px 5px;
    border-width: 1px;
    font-style: italic;
    background-color: #A0000D;
    margin-bottom: 10px;
    width: 820px;
    font-size: 0.8rem;
}

.errorimage
{
    width: 15px;
    margin-right: 7px;
    font-size: 0.8rem;
}

.errortext
{
    width: 798px;
    font-size: 0.8rem;
}


/* answer buttons - common */

.questionheader
{
    word-wrap: break-word;
    position: relative;
    font-size: 1rem;
}

.questionheader p, .questionheader h1, .questionheader h2
{
    padding: 0;
    line-height: normal;
    margin: 0 0 10px 0;
}

.questionheader img
{
    max-width: 927px;
}

.questionbody
{
    font-size: 0.9rem;
    line-height: normal;
}

.questionimage
{
    position: relative;
}

.questionImageFloatLeft
{
    position: relative;
    max-width: 100%;
    word-wrap: break-word;
}

.questionImageFloatLeft ul,.questionImageFloatLeft ol
{
    overflow:hidden;
}

.questionImageBottom
{
    margin-top: 10px;
}

/*.questiontext {	*/
/*}*/

.instructions
{
    font-family: Arial;
    font-size: 1rem;
}

.answer
{
    margin-top: 5px;
}

/*.truncate-text*/
/*{*/
/*max-height: 400px;*/
/*overflow: hidden;*/
/*}*/


.questionRequiredStar
{
    font-family: Arial;
    font-size: 1rem;
    color: #333333;
    display: inline-block;
    position: relative;
    width: 20px;
    margin-left: -30px;
    text-align: right;
	vertical-align: bottom;
    overflow: visible;

    display: none;

}

.questionRequiredStarAlignment {
    margin-left: -30px;
    float: left;
}

[dir='rtl'] .questionRequiredStarAlignment {
    margin-right: -15px;
    float: right;
}

#questionRequiredText
{
    margin-bottom: 30px;
}

#questionRequiredText
{
    display: inline-block;
    font-style: italic;
	line-height: 1rem;
    font-size: 0.85rem;
}

#questionRequiredText .questionRequiredStar
{
    margin-left: 0;
    text-align: right;
	width: 1rem;
	font-style: normal;
}

.requiredStarAccessible {
	position: absolute;
	display: inline-block;
	width: 1px;
	margin-left: -1px;
	opacity: 0;
}

.questionErrorMsg
{
	font-size: 0.8rem;
    clear: both;
    color: #000000;
    font-style: italic;
    height: 10px;
    margin-bottom: 15px;

}

.visioncritical-questiontext {
	font-size: 1rem;
}

#logoImage
{
    float: right;
    margin-top: 0px;
    position: relative;
}



/*nav panel*/
#controls
{
	width: 927px;
    clear: both;
}

#controls #nav {
    text-align: center;
}

#controls #nav a
{
    color: black;
    text-decoration: none;
    background-repeat: no-repeat;
    font-family: Arial, sans-serif;
    font-size: 0.9rem;
    font-weight: bold;
    display: inline-block;
    padding-top: 2px;
    height: 20px;
}

/*Next/Prev Button Container*/
/*- Dynamic size*/

.ButtonContainer
{
    display: inline-block;
    cursor: pointer;
	margin-bottom: 30px;
    min-width: 70px;
}

.ButtonContent
{
    background-repeat: repeat-x;
    display: inline-block;
    float: left;
    padding-right: 2px;
    padding-left: 5px;
    height: 20px;
}

.next .ButtonContent
{
    background-position: 0px -441px;
}

.prev .ButtonContent
{
    background-position: 0px -441px;
    padding-right: 5px;
    padding-left: 2px;
}

.static .ButtonContent
{
    background-position: 0px -441px;
    padding-right: 5px;
    padding-left: 5px;
}

.nextdisabled .ButtonContent
{
    background-position: 0px -485px;
    cursor: default;
}

.nextdisabled .ButtonContent a
{
    color: #BCBABA !important;
    cursor: default;
}

.ButtonContainer .next:hover .ButtonContent a, .ButtonContainer .next:active .ButtonContent a, .ButtonContainer .prev:hover .ButtonContent a, .ButtonContainer .prev:active .ButtonContent a, .ButtonContainer .static:hover .ButtonContent a, .ButtonContainer .static:active .ButtonContent a
{
    text-decoration: underline !important;
    color: black !important;
}

.ButtonContainer .next:hover .ButtonContent, .ButtonContainer .prev:hover .ButtonContent, .ButtonContainer .static:hover .ButtonContent
{
    background-position: 0px -507px;
}

.ButtonContainer .next:active .ButtonContent, .ButtonContainer .prev:active .ButtonContent, .ButtonContainer .static:active .ButtonContent
{
    background-position: 0px -463px;
}

/*Next Button*/
.ButtonLeftContent
{
    width: 1px;
    display: inline-block;
    line-height: 20px;
    float: left;
}

.next .ButtonLeftContent
{
    background-position: -295px 0px;
}

.nextdisabled .ButtonLeftContent
{
    background-position: -295px -50px;
    cursor: default;
}

.ButtonRightContent
{
    width: 28px;
    height: 20px;
    display: inline-block;
}

.next .ButtonRightContent
{
    background-position: -340px 0px;
}

.nextdisabled .ButtonRightContent
{
    background-position: -340px -50px;
    cursor: default;
}

/*Next Hover States*/
.ButtonContainer .next:hover .ButtonLeftContent
{
    background-position: -295px -75px;
}

.ButtonContainer .next:hover .ButtonRightContent
{
    background-position: -340px -75px;
}

/*Next Active States*/
.ButtonContainer .next:active .ButtonLeftContent
{
    background-position: -295px -25px;
}

.ButtonContainer .next:active .ButtonRightContent
{
    background-position: -340px -25px;
}


/*Prev Button*/
.prev .ButtonLeftContent
{
    line-height: 20px;
    float: left;
    width: 28px;
    height: 20px;
    display: inline-block;
}

.prev .ButtonLeftContent
{
    background-position: -218px 0px;
}

.prev .ButtonRightContent
{
    width: 1px;
    height: 20px;
}

.prev .ButtonRightContent
{
    background-position: -289px 0px;
}

/*Prev Hover States*/
.ButtonContainer .prev:hover .ButtonLeftContent
{
    background-position: -218px -75px;
}

.ButtonContainer .prev:hover .ButtonRightContent
{
    background-position: -289px -75px;
}

/*Prev Active States*/
.ButtonContainer .prev:active .ButtonLeftContent
{
    background-position: -218px -25px;
}

.ButtonContainer .prev:active .ButtonRightContent
{
    background-position: -289px -25px;
}

/* Static Button */
.static .ButtonLeftContent
{
    background-position: -295px 0px;
}

.nextdisabled .ButtonLeftContent
{
    background-position: -295px -50px;
    cursor: default;
}

.static .ButtonRightContent
{
    width: 1px;
    height: 20px;
}

.static .ButtonRightContent
{
    background-position: -289px 0px;
}

/* Static Hover States */
.ButtonContainer .static:hover .ButtonLeftContent
{
    background-position: -295px -75px;
}

.ButtonContainer .static:hover .ButtonRightContent
{
    background-position: -340px -75px;
}

/*.ButtonContainer .static:hover .ButtonLeftContent
{
    background-position: -218px -75px;
    color: red;
}

.ButtonContainer .static:hover .ButtonRightContent
{
    background-position: -289px -75px;
    color: red;
}
*/

/* Static Active States */
.ButtonContainer .static:active .ButtonLeftContent
{
    background-position: -295px -25px;
}

.ButtonContainer .static:active .ButtonRightContent
{
    background-position: -289px -25px;
}

#nav .msg
{
    margin-left: 10px;
    color: #666;
    font-style: italic;
    font-size: 0.9rem;
}


/* Footer */

#footer
{
    margin: 20px 10px 0 10px;
}

#footer p, #footer #links
{
    width: 400px;
    font-size: 0.8rem;
}

/* UseFooterLinks feature toggle uses these overrides*/

#footer.use-footer-links {
	margin: 40px 160px 0 0;
	min-height: 40px;
}

[dir='rtl'] #footer.use-footer-links {
	margin-right: 0;
}

#footer.use-footer-links .link {
	position: relative;
	float: left;
	padding-right: 20px;
	white-space: nowrap;
}

[dir='rtl'] #footer.use-footer-links .link {
    float: right;
    padding-right: 2px;
    padding-left: 20px;
}

#footer.use-footer-links .link a {
	font-size: 0.8rem;
    line-height: 20px;
	font-weight: bold;
	text-decoration: none;
	color: inherit;
}

#footer.use-footer-links .link a:hover,#footer.use-footer-links .link a:focus {
	text-decoration: underline;
}

#footer.use-footer-links p
{
	clear: left;
    width: auto;
    font-size: 0.8rem;
	padding: 20px 0 0 0;
    word-wrap: break-word;
}

#logoImage.use-footer-links
{
    margin-top: 40px;
}

[dir='rtl'] #logoImage.use-footer-links {
    float: left;
    left: -3.2%;
}
/* End Feature-Toggled styles*/

/* Test Banner */
/*html, body {*/
/*height: 100%;*/
/*}*/

#wrapper
{
    padding-bottom: 30px; /* Height of the testmode */
}
#maintemplate
{
    min-height: 100%;
    position: relative;
}
#testmode, #testmodecollapsed {
	background-color: #FCE9A0;
    border-color: #FAC91E;
    border-style: solid;
    border-width: 2px;
    bottom: 0;
    font-family: Arial,Helvetica,sans-serif;
    font-size: 12px;
    font-weight: normal;
    height: auto;
    left: 0;
    margin: 0;
    position: fixed;
    right: 0;
    z-index: 500;
    color: #6E3D0C;
}

#testmode #testmodeicon
{
    background-position: -370px -50px; /* testmodeicon */
    background-repeat: no-repeat;
    height: 21px;
    width: 30px;
    margin-top: 3px;
    margin-right: 5px;
    float: left;
}

#testmode #closetestbutton
{
    vertical-align: middle;
    margin: 7px 10px 5px 40px;
    width: 15px;
    height: 16px;
	right: 0px;
    border: 0;
    cursor: pointer;
	position: absolute;
}

.closeicon
{
    background-position: -384px -127px; /* closeX */
    height: 18px;
    width: 18px;
}

#testmode
{
    right: 0;
    left: 0;
    z-index: 500;
	height: auto;
}

#testmodecollapsed
{
    width: 38px;
    left: 0;
    cursor: pointer;
}

#testmode p
{
    padding: 7px 9px 5px 40px;
    margin: 0;
    font-size: 1rem;
    color: #6E3D0C;
    text-align: left;
}

#testmode .test-message {
    float: left;
    margin: 8px 10px 0px 10px;
    font-size: 1rem;
}

#rightbutton img
{
    border: 0;
}

#lefttext
{
    float: left;
}

#expandarea
{
    height: 30px;
}


/*Unsubscribe page */


#unsubscribeMessage
{
    padding-top: 10px;
    font-family: Arial;
    font-size: 1rem;
}

.fltleft
{
    float: left;
}

.fltright
{
    float: right;
}

.fltclear
{
    clear: both;
    display: block;
    visibility: hidden;
    overflow: hidden;
    height: 0;
}

/* jquery ui theme styles */
.ui-resizable
{
    position: relative;
}
.ui-resizable-handle
{
    position: absolute;
    font-size: 0.1px;
    z-index: 99999;
    display: block;
}
.ui-resizable-disabled .ui-resizable-handle, .ui-resizable-autohide .ui-resizable-handle
{
    display: none;
}
.ui-resizable-n
{
    cursor: n-resize;
    height: 7px;
    width: 100%;
    top: -5px;
    left: 0px;
}
.ui-resizable-s
{
    cursor: s-resize;
    height: 7px;
    width: 100%;
    bottom: -5px;
    left: 0px;
}
.ui-resizable-e
{
    cursor: e-resize;
    width: 7px;
    right: -5px;
    top: 0px;
    height: 100%;
}
.ui-resizable-w
{
    cursor: w-resize;
    width: 7px;
    left: -5px;
    top: 0px;
    height: 100%;
}
.ui-resizable-se
{
    cursor: se-resize;
    width: 12px;
    height: 12px;
    right: 1px;
    bottom: 1px;
}
.ui-resizable-sw
{
    cursor: sw-resize;
    width: 9px;
    height: 9px;
    left: -5px;
    bottom: -5px;
}
.ui-resizable-nw
{
    cursor: nw-resize;
    width: 9px;
    height: 9px;
    left: -5px;
    top: -5px;
}
.ui-resizable-ne
{
    cursor: ne-resize;
    width: 9px;
    height: 9px;
    right: -5px;
    top: -5px;
}
.ui-icon-gripsmall-diagonal-se
{
    background-position: -388px 0; /* windowCornerGrip */
}

.imageleft
{
    float: left;
    margin-right: 10px;
}

.imageright
{
    float: right;
    margin-left: 10px;
}

.imagecenter
{
    display: block;
    margin-left: auto;
    margin-right: auto;
}

.tooltip
{
    padding: 8px 10px;
    background-color: white;
    border: 1px solid black;
    max-width: 150px;
}

.questionImageContainer {
	position: relative;
	display: inline-block;
	margin-bottom: 10px;
	line-height: 0;
}

.floatLeft {
	float: left;
	margin-right: 10px;
}

.floatRight {
	float: right;
	margin-left: 10px;
}

.gridColumnLabels
{
    position: absolute !important;
    top: -9999px;
    background-color: #D8D8D8; /* IE 7 */
}

.view-switcher
{
    float: left;
}

.view-switcher .view-button
{
    padding: 3px 5px;
    border: 2px solid #FAC91E;
    margin: 3px 0px 0px 7px;
    min-width: 15px;
    padding: 3px 5px;
    text-align: center;
    float: left;
    color: #6E3D0C;
    cursor: pointer;
    cursor: hand;
    font-weight: bold;
}

.view-button-disabled
{
    padding: 3px 5px;
    border: 2px solid #FAC91E;
    margin: 3px 5px 0px 7px;
    min-width: 15px;
    padding: 3px 5px;
    text-align: center;
    float: left;
    color: #999999;
    cursor: pointer;
    cursor: hand;
    font-weight: bold;
}

.view-switcher .view-button:hover
{
    background-color: #FAC91E;
}

/*theme switcher raw css styles*/

.theme-switcher-container {
	float: left;
	position: relative;
}

.theme-switcher-container .theme-dropdown-container {
	text-align: left;
	border: 2px solid #FAC91E;
	margin: 3px 0px 0px 7px;
	color: #6E3D0C;
	cursor: pointer;
	font-weight: bold;
	padding: 3px 5px;
	position: relative;
}

.theme-switcher-container .theme-dropdown-container .theme-dropdown-default-option
{
	color: #333333;
	height: 14px;
	/*min-width: 120px;
	max-width: 250px;*/
	width: 240px;
	cursor:pointer;
	position: relative;
}

.theme-switcher-container .theme-dropdown-container .theme-dropdown-default-option .theme-dropdown-default-text
{
	position: absolute;
	width: 100%;
	overflow: hidden;
	box-sizing: border-box;
	padding-right: 18px;
	text-overflow: ellipsis;
	white-space: nowrap;
	color: #6E3D0C;
}

.theme-switcher-container .theme-dropdown-container .theme-dropdown-default-option .theme-dropdown-arrow
{
	position: absolute;
	right: 0px;
	width:18px;
	height:18px;
	background-image: url("./images/down-arrow.png");
	background-repeat:no-repeat;
	top: -2px;
}

.theme-switcher-container .theme-dropdown-options {
	list-style-type: none;
	max-width: 400px;
	min-width: 250px;
	padding: 0px;
	position: absolute;
	box-shadow: 1px 1px 2px 1px;
	overflow-y: auto;
	overflow-x: hidden;
	z-index: 300;
	max-height: 300px;
	background-color: #FFF;
	border-top: 1px #7E7E7E solid;
	text-align: left;
	margin: 0px;
}

.theme-switcher-container .theme-dropdown-options .theme-dropdown-option {
	background-color: #fff;
	padding: 5px;
	padding-top: 10px;
	cursor: pointer;
	border-left: 1px #7E7E7E solid;
	border-right: 1px #7E7E7E solid;
	overflow: hidden;
	width: inherit;
	white-space: nowrap;
	text-overflow: ellipsis;
}

.theme-switcher-container .theme-dropdown-options .theme-dropdown-option-selected{
	background-color: #eee;
}

.theme-switcher-container .theme-dropdown-options li:hover{
	background-color: #fed14d;
}

/*community switcher raw css styles*/

.community-switcher-container {
	float: left;
	position: relative;
}

.community-switcher-container .community-dropdown-container {
	text-align: left;
	border: 2px solid #FAC91E;
	margin: 3px 0px 0px 7px;
	color: #6E3D0C;
	cursor: pointer;
	font-weight: bold;
	padding: 3px 5px;
	position: relative;
}

.community-switcher-container .community-dropdown-container .community-dropdown-default-option
{
	color: #333333;
	height: 14px;
	/*min-width: 120px;
	max-width: 250px;*/
	width: 240px;
	cursor:pointer;
	position: relative;
}

.community-switcher-container .community-dropdown-container .community-dropdown-default-option .community-dropdown-default-text
{
	position: absolute;
	width: 100%;
	overflow: hidden;
	box-sizing: border-box;
	padding-right: 18px;
	text-overflow: ellipsis;
	white-space: nowrap;
	color: #6E3D0C;
}

.community-switcher-container .community-dropdown-container .community-dropdown-default-option .community-dropdown-arrow
{
	position: absolute;
	right: 0px;
	width:18px;
	height:18px;
	background-image: url("./images/down-arrow.png");
	background-repeat:no-repeat;
	top: -2px;
}

.community-switcher-container .community-dropdown-options {
	list-style-type: none;
	max-width: 400px;
	min-width: 250px;
	padding: 0px;
	position: absolute;
	box-shadow: 1px 1px 2px 1px;
	overflow-y: auto;
	overflow-x: hidden;
	z-index: 300;
	max-height: 300px;
	background-color: #FFF;
	border-top: 1px #7E7E7E solid;
	text-align: left;
	margin: 0px;
}

.community-switcher-container .community-dropdown-options .community-dropdown-option {
	background-color: #fff;
	padding: 5px;
	padding-top: 10px;
	cursor: pointer;
	border-left: 1px #7E7E7E solid;
	border-right: 1px #7E7E7E solid;
	overflow: hidden;
	width: inherit;
	white-space: nowrap;
	text-overflow: ellipsis;
}

.community-switcher-container .community-dropdown-options .community-dropdown-option-selected{
	background-color: #eee;
}

.community-switcher-container .community-dropdown-options li:hover{
	background-color: #fed14d;
}

.questionheader {
	font-size: 1rem;
}

.questionheader p.vci_small, p.vci_small{
	font-size: 0.9rem;
}

.questionheader li h1, .questionheader li h2, .questionheader li p {
    display: inline;
}

#questionContent .questionheader h1{
	font-size: 2em;
	font-weight: inherit;
}

#questionContent .questionheader h2{
    font-weight: inherit;
	font-size : 1.5em;
}


.allocationTemplate
{
    width: 958px;
}

.allocationContainer-frame > div.allocationContainer
{
    /*padding: 10px !important;*/
}

.allocationContainer
{
    position: relative;
    width: 958px;
}
.allocationAllDiv
{
    margin: 5px auto;
    padding: 16px 10px;
    height: 100%;
    float: left;
}

.allocationViewModel
{
    position: relative;
    min-height: 1.5em;
    width: 958px;
}

.allocationHtmlDiv
{
    padding: 10px 5px 0px 0px;
    width: 150px;
    text-align: right;
}

.allocationSliderBgDiv
{
    background-color: #D9D9D9;
    z-index: -1;
    margin-top: -6px;
    height: 5px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
}

.allocationSliderDiv
{
    padding: 12px 20px 0px 30px;
    width: 600px;
    vertical-align: middle;
}
.allocationTextAreaDiv
{
    padding: 4px;
    width: 45px;
    height: 20px;
}

[dir='rtl'] .allocationTextAreaDiv {
    margin-left: 15px;
}

.allocationTextArea
{
    width: 100%;
    text-align: right;
    font-size: 1em;
	line-height: 1.5em;
	border: 1px solid #999999;
	padding: 4px 4px;
}

.allocationUnitDiv
{
    width: auto !important;
    min-width: 30px;
    width: 30px;
}

.allocationUnitLeftDiv
{
    padding: 10px 4px 0px 0px;
    text-align: right;
}

.allocationUnitRightDiv
{
    padding: 8px 0px 0px 10px;
    text-align: left;
}

.allocationLegendTop
{
    padding: 0px 0px 5px 5px;
}

.allocationLegendBottom
{
    padding: 5px 0px 0px 5px;
}

[dir='rtl'] .allocationLegendTop, .allocationLegendBottom  {
    text-align: left;
}
.allocationLegendLeft
{
    float: left;
    width: 255px;
    margin-left: 180px;
}

.allocationLegendMiddle
{
    float: left;
    width: 295px;
    margin-left: 40px;
}

.allocationLegendRight
{
    float: left;
    width: 100px;
}

.allocationAmountMessage
{
    padding: 14px 40px 4px 4px;
    clear: both;
    text-align: right;
}

[dir='rtl'] .allocationAmountMessage {
    padding: 14px 40px 8px 4px;
}

.ui-slider-horizontal
{
    height: 5px;
}

.ui-slider-horizontal .ui-slider-range
{
    height: 5px;
}

.ui-widget-content
{
    background: none;
    background-color: #A5A5A5;
}

.ui-slider .ui-slider-range
{
    background: #444;
}

.ui-slider .ui-slider-handle
{
    height: 30px;
    width: 30px;
    position: absolute;
    margin-left: -15px;
}

.ui-slider-handle:hover
{
    cursor: pointer;
}

.ui-slider-horizontal .handleAll
{
    border: none;
    height: 30px;
    width: 30px;
    position: absolute;
    top: -13px;
    z-index: 2;
}

.ui-slider-horizontal .handleBlue
{
    background: #444;
    border-radius: 50%;
}

@font-face{font-family:'ORCALO';src:url("../../../Framework/Mobile/Css/fonts/ORCALO.eot");src:local("O"),url("../../../Framework/Mobile/Css/fonts/ORCALO.ttf") format("truetype"),url("../../../Framework/Mobile/Css/fonts/ORCALO.svg#ORCALO") format("svg");font-weight:normal;font-style:normal}@font-face{font-family:'Helvetica W02 Light';src:url("../../../Framework/Common/Css/fonts/HelveticaLight/HelveticaLight.woff") format("woff");font-weight:normal;font-style:normal}@font-face{font-family:'HandOfSeanPro';src:url("../../../Framework/Common/Css/fonts/HandOfSeanPro/HandOfSeanPro.woff2") format("woff2"),url("../../../Framework/Common/Css/fonts/HandOfSeanPro/HandOfSeanPro.woff") format("woff");font-weight:normal;font-style:normal}@font-face{font-family:'Montserrat';font-style:normal;font-weight:400;src:local("Montserrat Regular"),local("Montserrat-Regular"),url("../../../Framework/Common/Css/fonts/Montserrat/montserrat.woff2") format("woff2"),url("../../../Framework/Common/Css/fonts/Montserrat/montserrat.woff") format("woff")}@font-face{font-family:'Montserrat';font-style:normal;font-weight:700;src:local("Montserrat Bold"),local("Montserrat-Bold"),url("../../../Framework/Common/Css/fonts/Montserrat/montserrat700.woff2") format("woff2"),url("../../../Framework/Common/Css/fonts/Montserrat/montserrat700.woff") format("woff")}@font-face{font-family:'Open Sans';font-style:normal;font-weight:400;src:local("Open Sans Regular"),local("OpenSans-Regular"),url("../../../Framework/Common/Css/fonts/OpenSans/openSans.woff2") format("woff2"),url("../../../Framework/Common/Css/fonts/OpenSans/openSans.woff") format("woff")}@font-face{font-family:'Open Sans';font-style:normal;font-weight:600;src:local("Open Sans SemiBold"),local("OpenSans-SemiBold"),url("../../../Framework/Common/Css/fonts/OpenSans/openSans600.woff2") format("woff2"),url("../../../Framework/Common/Css/fonts/OpenSans/openSans600.woff") format("woff")}@font-face{font-family:'Raleway';font-style:normal;font-weight:400;src:local("Raleway"),local("Raleway-Regular"),url("../../../Framework/Common/Css/fonts/Raleway/raleway.woff2") format("woff2"),url("../../../Framework/Common/Css/fonts/Raleway/raleway.woff") format("woff")}@font-face{font-family:'Raleway';font-style:normal;font-weight:500;src:local("Raleway Medium"),local("Raleway-Medium"),url("../../../Framework/Common/Css/fonts/Raleway/raleway500.woff2") format("woff2"),url("../../../Framework/Common/Css/fonts/Raleway/raleway500.woff") format("woff")}@font-face{font-family:'Raleway';font-style:normal;font-weight:700;src:local("Raleway Bold"),local("Raleway-Bold"),url("../../../Framework/Common/Css/fonts/Raleway/raleway700.woff2") format("woff2"),url("../../../Framework/Common/Css/fonts/Raleway/raleway700.woff") format("woff")}@font-face{font-family:'Roboto';font-style:normal;font-weight:400;src:local("Roboto"),local("Roboto-Regular"),url("../../../Framework/Common/Css/fonts/Roboto/roboto.woff2") format("woff2"),url("../../../Framework/Common/Css/fonts/Roboto/roboto.woff") format("woff")}@font-face{font-family:'Roboto';font-style:normal;font-weight:700;src:local("Roboto Bold"),local("Roboto-Bold"),url("../../../Framework/Common/Css/fonts/Roboto/roboto700.woff2") format("woff2"),url("../../../Framework/Common/Css/fonts/Roboto/roboto700.woff") format("woff")}@font-face{font-family:'iconic';src:url("fonts/iconic.eot");src:url("fonts/iconic.eot?#iefix") format("embedded-opentype"),url("fonts/iconic.svg#iconic") format("svg"),url("fonts/iconic.woff") format("woff"),url("fonts/iconic.ttf") format("truetype");font-weight:normal;font-style:normal}[data-icon]:before{font-family:'iconic';content:attr(data-icon);speak:none}.vci-dialog{position:fixed;background:white;padding:0px;border:1px solid #999;font-family:"Helvetica W02 Light",Helvetica,Arial,sans-serif;border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-left-radius:0px;border-bottom-right-radius:0px;outline-color:transparent;outline-style:none;z-index:1001}.vci-dialog .ui-dialog-titlebar{border-bottom:1px solid #cacaca;height:40px;line-height:40px;white-space:nowrap;padding:0 10px;position:relative;border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-left-radius:0px;border-bottom-right-radius:0px}.vci-dialog .ui-dialog-content{padding:10px 10px 0 10px !important}.vci-dialog .ui-widget-header{background-color:#6b87af;background:#6b87af;color:white;font-size:1.3rem;border:0px;font-weight:normal}.vci-dialog .small .ui-dialog-title{font-size:1.3rem;margin:0px}.vci-dialog .ui-widget-content{overflow:visible;background-color:white}.vci-dialog .ui-dialog-titlebar .ui-button{border:0px;background:#6b87af;width:18px;height:18px;padding:0px;overflow:visible;box-sizing:border-box;position:absolute;top:50%;font-size:1.3rem;line-height:1.3rem}.vci-dialog .ui-dialog-titlebar .ui-button .ui-icon{width:18px;height:18px}.vci-dialog .ui-dialog-titlebar .ui-button .ui-icon{margin:0px !important;position:absolute;background-image:none;left:0px;top:0px}.vci-dialog .ui-dialog-titlebar .ui-button .ui-button{font-family:'ORCALO';speak:none;font-weight:normal;font-variant:normal;color:#666666;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;font-size:1.3rem;color:white;width:18px;height:18px;line-height:18px;position:absolute;padding:0px;margin:0px;vertical-align:middle;text-indent:0px;font-style:normal;left:0px;top:0px}.vci-dialog .ui-dialog-content{font-size:1rem}.vci-dialog .ui-dialog-buttonpane{margin:0 10px !important;padding:10px 0 10px 0 !important;position:relative}.vci-dialog .ui-dialog-buttonpane .ui-widget{font-size:1rem}.vci-dialog .ui-dialog-buttonpane .ui-button{margin:0 0 0 10px;height:30px;cursor:pointer;background:linear-gradient(#ffffff,#eeeeee);border-radius:4px;outline-color:transparent;outline-style:none;font-family:"Helvetica W02 Light",Helvetica,Arial,sans-serif;padding:0 6px;min-width:85px;min-height:12px;white-space:nowrap}.vci-dialog .ui-dialog-buttonpane .ui-button-text-only{border-color:#bbb}.vci-dialog .ui-dialog-buttonpane .ui-button-text-only:hover{border-color:#6b87af}.vci-dialog .ui-dialog-buttonpane .ui-button-text-only:active{border-color:#6b87af;background:linear-gradient(#6b87af,#6b87af);color:white}.vci-dialog .ui-widget-content{border:0px}.ui-widget-overlay{background:#fff;z-index:1000}.ui-widget-overlay:on{opacity:0.5}

@font-face{font-family:'ORCALO';src:url("../../../Framework/Mobile/Css/fonts/ORCALO.eot");src:local("O"),url("../../../Framework/Mobile/Css/fonts/ORCALO.ttf") format("truetype"),url("../../../Framework/Mobile/Css/fonts/ORCALO.svg#ORCALO") format("svg");font-weight:normal;font-style:normal}@font-face{font-family:'Helvetica W02 Light';src:url("../../../Framework/Common/Css/fonts/HelveticaLight/HelveticaLight.woff") format("woff");font-weight:normal;font-style:normal}@font-face{font-family:'HandOfSeanPro';src:url("../../../Framework/Common/Css/fonts/HandOfSeanPro/HandOfSeanPro.woff2") format("woff2"),url("../../../Framework/Common/Css/fonts/HandOfSeanPro/HandOfSeanPro.woff") format("woff");font-weight:normal;font-style:normal}@font-face{font-family:'Montserrat';font-style:normal;font-weight:400;src:local("Montserrat Regular"),local("Montserrat-Regular"),url("../../../Framework/Common/Css/fonts/Montserrat/montserrat.woff2") format("woff2"),url("../../../Framework/Common/Css/fonts/Montserrat/montserrat.woff") format("woff")}@font-face{font-family:'Montserrat';font-style:normal;font-weight:700;src:local("Montserrat Bold"),local("Montserrat-Bold"),url("../../../Framework/Common/Css/fonts/Montserrat/montserrat700.woff2") format("woff2"),url("../../../Framework/Common/Css/fonts/Montserrat/montserrat700.woff") format("woff")}@font-face{font-family:'Open Sans';font-style:normal;font-weight:400;src:local("Open Sans Regular"),local("OpenSans-Regular"),url("../../../Framework/Common/Css/fonts/OpenSans/openSans.woff2") format("woff2"),url("../../../Framework/Common/Css/fonts/OpenSans/openSans.woff") format("woff")}@font-face{font-family:'Open Sans';font-style:normal;font-weight:600;src:local("Open Sans SemiBold"),local("OpenSans-SemiBold"),url("../../../Framework/Common/Css/fonts/OpenSans/openSans600.woff2") format("woff2"),url("../../../Framework/Common/Css/fonts/OpenSans/openSans600.woff") format("woff")}@font-face{font-family:'Raleway';font-style:normal;font-weight:400;src:local("Raleway"),local("Raleway-Regular"),url("../../../Framework/Common/Css/fonts/Raleway/raleway.woff2") format("woff2"),url("../../../Framework/Common/Css/fonts/Raleway/raleway.woff") format("woff")}@font-face{font-family:'Raleway';font-style:normal;font-weight:500;src:local("Raleway Medium"),local("Raleway-Medium"),url("../../../Framework/Common/Css/fonts/Raleway/raleway500.woff2") format("woff2"),url("../../../Framework/Common/Css/fonts/Raleway/raleway500.woff") format("woff")}@font-face{font-family:'Raleway';font-style:normal;font-weight:700;src:local("Raleway Bold"),local("Raleway-Bold"),url("../../../Framework/Common/Css/fonts/Raleway/raleway700.woff2") format("woff2"),url("../../../Framework/Common/Css/fonts/Raleway/raleway700.woff") format("woff")}@font-face{font-family:'Roboto';font-style:normal;font-weight:400;src:local("Roboto"),local("Roboto-Regular"),url("../../../Framework/Common/Css/fonts/Roboto/roboto.woff2") format("woff2"),url("../../../Framework/Common/Css/fonts/Roboto/roboto.woff") format("woff")}@font-face{font-family:'Roboto';font-style:normal;font-weight:700;src:local("Roboto Bold"),local("Roboto-Bold"),url("../../../Framework/Common/Css/fonts/Roboto/roboto700.woff2") format("woff2"),url("../../../Framework/Common/Css/fonts/Roboto/roboto700.woff") format("woff")}@font-face{font-family:'iconic';src:url("fonts/iconic.eot");src:url("fonts/iconic.eot?#iefix") format("embedded-opentype"),url("fonts/iconic.svg#iconic") format("svg"),url("fonts/iconic.woff") format("woff"),url("fonts/iconic.ttf") format("truetype");font-weight:normal;font-style:normal}[data-icon]:before{font-family:'iconic';content:attr(data-icon);speak:none}.vci-button{padding:0 6px;min-width:85px;min-height:12px;overflow:visible;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;font-size:1rem;font-family:"Helvetica W02 Light",Helvetica,Arial,sans-serif;text-rendering:optimizeLegibility;display:inline-block;text-align:center;vertical-align:middle;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;height:40px;min-width:85px;white-space:nowrap;border:1px solid #bbb;color:#333;background:#fdfdfd;background-image:none;text-transform:none;margin:3px 6px}.vci-button:hover{border-color:#7e7e7e;cursor:pointer}.vci-button:disabled{background:#eee;color:#999;border-color:#d8d8d8;box-shadow:none}

.imagePlaceholder{background:#eeeeee}.imagePlaceholder img{visibility:hidden}[aria-busy="true"]{visibility:hidden}

.ui-tooltip{box-sizing:border-box;z-index:999;position:absolute;top:0;left:0;max-width:500px;word-wrap:break-word;word-break:break-word;padding:10px;text-align:left;font-weight:normal;font-size:0.9rem;color:#FFF;background:#28313a;border:1px solid #bbb;border-radius:3px;opacity:.95;pointer-events:none}@media (max-width: 500px){.ui-tooltip{max-width:300px}}.ui-tooltip.tight{padding:0 5px}

body.lb-disable-scrolling{overflow:hidden}.overlay-expand{position:absolute;top:0;bottom:0;left:0;right:0;height:100%;width:100%;opacity:0;transition:.3s ease;background-color:rgba(0,0,0,0.3)}.overlay-expand .icon-expand{font-family:'ORCALO';font-size:20px;speak:none;-webkit-font-smoothing:antialiased;position:absolute;color:#ffffff;top:8px;right:8px;text-shadow:1px 1px 2px #333333;text-decoration:none;line-height:20px;height:20px;width:20px;cursor:pointer}.overlay-expand .icon-expand:before{content:"\e6a9"}.overlay-expand .icon-expand:hover{color:#5E779A}[dir='rtl'] .overlay-expand .icon-expand{left:8px;right:auto}.overlay-expand:hover,.overlay-expand:focus{opacity:1}.lightboxOverlay{position:absolute;top:0;left:0;z-index:9999;background-color:rgba(0,0,0,0.6);display:none}.lightbox{position:absolute;left:0;width:100%;z-index:10000;text-align:center;line-height:0;font-weight:normal}.lightbox .lb-container{padding:10px;box-shadow:0 0 6px 0 rgba(0,0,0,0.2);background:white}.lightbox .lb-container .lb-image{display:block;position:relative;height:auto;max-width:inherit;max-height:none;border-radius:3px}.lightbox .lb-container .lb-closeContainer{width:60px;height:60px;position:absolute;top:0;right:0;overflow:hidden;background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjM4OEFGM0YxRjkyMTFFNzhGN0ZDNTlEREJGNjg3N0EiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjM4OEFGNDAxRjkyMTFFNzhGN0ZDNTlEREJGNjg3N0EiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2Mzg4QUYzRDFGOTIxMUU3OEY3RkM1OUREQkY2ODc3QSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2Mzg4QUYzRTFGOTIxMUU3OEY3RkM1OUREQkY2ODc3QSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PngBU6sAAAFFSURBVHja5NTLDcIwEARQZ6qgCiqgC+40iOiCCiiAM3cKMD6AhFASbGf/jrRKYq9n9aQoU875nlJ6ltqnAS6UOpXalbqNAr6WOo6Cxvs+DBpfz0Og8fMeHo2ZtdBoLKyHRWNlLyQaf/bDoVHREwqNyr4waDT0hkCjsd89Gh1nXKPRec4tGhvOukRj43l3aBBkuEKDKMcNGoRZLtAgzjOPBkOmaTSYcs2iwZhtEg3mfHNoCMwwhYbQHDNoCM4ygYbwPHU0FGaqoqH0Zamhoff70EFrglXQ2mBxtAWwKNoKWAxtCSyCtgZmR1sEs6KtgtnQlsEsaOtgcrQHMCnaC5gM7QlMgvYG3oz2CN6E9gruRnsGd6G9g5vREcBN6CjganQkcBU6GvgvOiJ4FR0VvIiODJ5FTznnNMB1KHUp9RgF/EGfXwIMAIcRf6SShE99AAAAAElFTkSuQmCC");background-repeat:no-repeat}.lightbox .lb-container .lb-close{width:35px;height:35px;position:absolute;right:0;font-family:'ORCALO';cursor:pointer;outline:none}.lightbox .lb-container .lb-close::before{content:"\e617";font-size:18px;line-height:35px;color:#979797}.lightbox .lb-container .lb-caption{display:none;text-align:center;font-size:1rem;padding-top:10px;line-height:normal}.lightbox .lb-outerContainer{position:relative;*zoom:1;width:250px;height:250px;margin:0 auto;border-radius:4px}.lightbox .lb-outerContainer:after{content:"";display:table;vertical-align:middle;clear:both}[dir='rtl'].lightbox .lb-container{float:right}[dir='rtl'].lightbox .lb-container .lb-closeContainer{left:0;right:auto;transform:rotateY(180deg)}

.progressbar-container{margin:0 auto;width:220px;height:30px}.progressbar-container .progressbar{position:relative;height:8px;top:-10px;left:0;right:0;bottom:0;border:1px solid #d6d6d6;border-radius:8px;background:#f7f7f7}.progressbar-container .progressbar .bar{position:absolute;height:8px;border-radius:8px;border-top-right-radius:0;border-bottom-right-radius:0;background:#333}[dir='rtl'] .progressbar-container .progressbar .bar{right:0;border-radius:0 8px 8px 0}

table.ss_grid_container{position:relative;table-layout:fixed;overflow:visible;width:740px;border-collapse:collapse}table.ss_grid_container.ss_with_offscale_1{width:812px}table.ss_grid_container.ss_with_offscale_2{width:884px}table.ss_grid_container.ss_with_offscale_3,table.ss_grid_container.ss_with_offscale_4,table.ss_grid_container.ss_with_offscale_5{width:927px}table.ss_grid_container td{padding:10px 0 25px 0}table.ss_grid_container td.ss_offscale{padding-right:10px;padding-left:20px}table.ss_grid_container td.ss_offscale .ss_thumb_offscale{margin:auto}table.ss_grid_container td.ss_slider_thumb{padding-left:0}table.ss_grid_container td.ss_slider_thumb .ss_thumb_home{margin:auto}table.ss_grid_container .ss_thumb_home,table.ss_grid_container .ss_thumb_offscale,table.ss_grid_container .ss_thumb{background-color:#ddd;border-radius:50%;display:inline-block;vertical-align:baseline;zoom:1;*display:inline;*vertical-align:auto;height:30px;width:30px;cursor:pointer}table.ss_grid_container .ss_thumb{background-color:#444;z-index:3}[dir='rtl'] table.ss_grid_container{text-align:left}[dir='rtl'] table.ss_grid_container th{direction:rtl}table.ss_grid_container th.ss_label_off_scale{text-align:center;padding-left:10px}table.ss_grid_container th.ss_header_label{overflow:visible;padding:0;width:50px;vertical-align:bottom;word-wrap:break-word;text-align:center;font-weight:normal}table.ss_grid_container th.ss_header_label.ss_first_label{text-align:left;padding-left:0;padding-right:5px}table.ss_grid_container th.ss_header_label.ss_last_label{text-align:right;padding-left:5px;padding-right:0}table.ss_grid_container th.ss_header_label.ss_label_2{width:232.5px}table.ss_grid_container th.ss_header_label.ss_label_2.ss_first_label,table.ss_grid_container th.ss_header_label.ss_label_2.ss_last_label{padding-right:5px}table.ss_grid_container th.ss_header_label.ss_label_3{width:227.5px}table.ss_grid_container th.ss_header_label.ss_label_3.ss_first_label,table.ss_grid_container th.ss_header_label.ss_label_3.ss_last_label{width:118.75px;max-width:118.75px}table.ss_grid_container th.ss_header_label.ss_label_4{width:148.333px}table.ss_grid_container th.ss_header_label.ss_label_4.ss_first_label,table.ss_grid_container th.ss_header_label.ss_label_4.ss_last_label{width:79.167px;max-width:79.167px}table.ss_grid_container th.ss_header_label.ss_label_5{width:108.75px}table.ss_grid_container th.ss_header_label.ss_label_5.ss_first_label,table.ss_grid_container th.ss_header_label.ss_label_5.ss_last_label{width:59.375px;max-width:59.375px}table.ss_grid_container tr.ss_row_slider td.ss_slider_inner{min-width:471px;padding:10px 0 25px 0}table.ss_grid_container tr.ss_row_slider td.ss_slider_inner .ss_slider{z-index:1}table.ss_grid_container tr.ss_row_slider td.ss_slider_inner .ss_ticks{position:relative;padding-left:200px}table.ss_grid_container tr.ss_row_slider td.ss_slider_inner .ss_ticks span{position:absolute;margin-top:4px;height:12px;top:-14px;border-left:1px solid #d2d2d2;z-index:0}table.ss_grid_container tr.ss_row_slider td.ss_slider_inner .ss_ticks span ins{display:block;text-decoration:none;color:#333;margin-top:21px;padding:2px 0 0 0;margin-left:-50%}table.ss_grid_container tr.ss_row_slider td.ss_slider_inner .ss_ticks span.ss_end_tick,table.ss_grid_container tr.ss_row_slider td.ss_slider_inner .ss_ticks span.ss_mid_tick{margin-top:0;height:25px}table.ss_grid_container tr.ss_row_slider td.ss_slider_inner .ss_ticks span.ss_end_tick ins,table.ss_grid_container tr.ss_row_slider td.ss_slider_inner .ss_ticks span.ss_mid_tick ins{margin-top:25px}table.ss_grid_container tr.ss_row_slider td.ss_slider_inner .ss_ticks span.ss_last_tick{margin-left:-1px}.ss_scale_slider .ui-widget-content .ui-state-default{border:none;height:30px;width:30px}.ss_scale_slider .ui-slider-horizontal{height:10px;background-color:#ddd;margin:9px 0;border-radius:6px;border-width:0;cursor:pointer}.ss_scale_slider .ui-slider-horizontal .ui-slider-handle{top:-10px;margin-left:-15px;outline:none;cursor:pointer}

.ns_numeric_slider{height:60px;width:670px}.ns_numeric_slider .ns_slider_outer{*zoom:1}.ns_numeric_slider .ns_slider_outer:before,.ns_numeric_slider .ns_slider_outer:after{content:" ";display:table}.ns_numeric_slider .ns_slider_outer:after{clear:both}.ns_numeric_slider .ns_thumb_wrapper{padding:0 0 20px 0;margin-right:30px;width:30px;height:30px;float:left}.ns_numeric_slider .ns_thumb_wrapper .ns_thumb_home,.ns_numeric_slider .ns_thumb_wrapper .ns_thumb{background-color:#ddd;border-radius:50%;display:inline-block;vertical-align:baseline;zoom:1;*display:inline;*vertical-align:auto;height:30px;width:30px;cursor:pointer}.ns_numeric_slider .ns_thumb_wrapper .ns_thumb{background-color:#444;z-index:3}.ns_numeric_slider .ns_slider_middle{float:left;width:580px}.ns_numeric_slider .ns_slider_inner{float:left;position:relative;width:475px;display:inline-block;vertical-align:baseline;zoom:1;*display:inline;*vertical-align:auto}.ns_numeric_slider .ns_slider_inner .ns_slider{z-index:1}.ns_numeric_slider .ns_slider_inner .ns_ticks{position:relative}.ns_numeric_slider .ns_slider_inner .ns_ticks span{position:absolute;margin-top:4px;height:12px;top:-14px;border-left:1px solid #d2d2d2;z-index:0}[dir='rtl'] .ns_numeric_slider .ns_slider_inner .ns_ticks span{text-align:left}.ns_numeric_slider .ns_slider_inner .ns_ticks span ins{display:block;text-decoration:none;color:#333;margin-top:21px;padding:2px 0 0 0;margin-left:-50%}.ns_numeric_slider .ns_slider_inner .ns_ticks span.ns_end_tick{margin-top:0;height:25px}.ns_numeric_slider .ns_slider_inner .ns_ticks span.ns_end_tick ins{margin-top:25px}.ns_numeric_slider .ns_slider_inner .ns_ticks span.ns_last_tick{margin-left:-1px}.ns_numeric_slider .ns_value{margin:3px 0 3px 0;border:1px solid #999999;float:left;height:30px;width:90px;font-size:1em;padding:4px 4px;text-align:right;box-sizing:border-box}.ns_numeric_slider .ns_error{font-style:italic;font-size:0.8rem;color:#f00;display:inline-block;vertical-align:baseline;zoom:1;*display:inline;*vertical-align:auto;padding:10px 0 0 7px}.ns_numeric_slider .ui-widget-content .ui-state-default{border:none;height:30px;width:30px}.ns_numeric_slider .ui-slider-horizontal{height:10px;background-color:#ddd;margin:9px 0;border-radius:6px;border-width:0;cursor:pointer}.ns_numeric_slider .ui-slider-horizontal .ui-slider-handle{top:-10px;margin-left:-15px;cursor:pointer;outline:none}

table.ssg_grid_container{position:relative;table-layout:fixed;overflow:visible;width:927px;border-collapse:collapse;margin-bottom:10px}table.ssg_grid_container td{border:1px solid #eceeee;padding:10px 10px 25px 10px}table.ssg_grid_container td.ssg_offscale{width:38px;padding-right:10px;padding-left:20px}table.ssg_grid_container td.ssg_offscale .ssg_thumb_offscale{margin:auto}table.ssg_grid_container td.ssg_slider_thumb{padding-left:20px;width:30px;border-left:none}table.ssg_grid_container td.ssg_slider_thumb .ssg_thumb_home{margin:auto}table.ssg_grid_container td.ssg_answer{border-right:none}table.ssg_grid_container .ssg_thumb_home,table.ssg_grid_container .ssg_thumb_offscale,table.ssg_grid_container .ssg_thumb{background-color:#ddd;border-radius:50%;display:inline-block;vertical-align:baseline;zoom:1;*display:inline;*vertical-align:auto;height:30px;width:30px;cursor:pointer}table.ssg_grid_container .ssg_thumb{background-color:#444;z-index:3}table.ssg_grid_container th{word-wrap:break-word;padding-top:20px}table.ssg_grid_container th.ssg_label_off_scale{text-align:center;padding-left:10px}table.ssg_grid_container th.ssg_answer{border:1px solid #eceeee;padding:10px 10px 25px 10px;border-right:none;font-weight:normal}table.ssg_grid_container th.ssg_header_label{overflow:visible;padding:0 5px 5px;width:58px;vertical-align:bottom;word-wrap:break-word;text-align:center;font-weight:normal}table.ssg_grid_container th.ssg_header_label.ssg_first_label{text-align:left;padding-left:15px;padding-right:0}table.ssg_grid_container th.ssg_header_label.ssg_last_label{text-align:right;padding-left:0;padding-right:15px}table.ssg_grid_container th.ssg_header_label.ssg_label_2{width:225px}table.ssg_grid_container th.ssg_header_label.ssg_label_3{width:160px}table.ssg_grid_container th.ssg_header_label.ssg_label_3.ssg_first_label,table.ssg_grid_container th.ssg_header_label.ssg_label_3.ssg_last_label{width:140px;max-width:140px}table.ssg_grid_container th.ssg_header_label.ssg_label_4{width:120px}table.ssg_grid_container th.ssg_header_label.ssg_label_4.ssg_first_label,table.ssg_grid_container th.ssg_header_label.ssg_label_4.ssg_last_label{width:100x;max-width:100x}table.ssg_grid_container th.ssg_header_label.ssg_label_5{width:110px}table.ssg_grid_container th.ssg_header_label.ssg_label_5.ssg_first_label,table.ssg_grid_container th.ssg_header_label.ssg_label_5.ssg_last_label{width:90px;max-width:90px}table.ssg_grid_container tr.ssg_grid_header.ssg_first_header th{padding-top:0}table.ssg_grid_container tr.ssg_grid_header th.ssg_empty_answer{width:160px}table.ssg_grid_container tr.ssg_grid_header th.ssg_empty_thumb{width:58px}table.ssg_grid_container tr.ssg_row_slider td.ssg_slider_inner{min-width:471px;padding:10px 15px 25px}table.ssg_grid_container tr.ssg_row_slider td.ssg_slider_inner .ssg_slider{z-index:1}table.ssg_grid_container tr.ssg_row_slider td.ssg_slider_inner .ssg_ticks{position:relative;padding-left:200px}table.ssg_grid_container tr.ssg_row_slider td.ssg_slider_inner .ssg_ticks span{position:absolute;margin-top:4px;height:12px;top:-14px;border-left:1px solid #d2d2d2;z-index:0}table.ssg_grid_container tr.ssg_row_slider td.ssg_slider_inner .ssg_ticks span ins{display:block;text-decoration:none;color:#333;margin-top:21px;padding:2px 0 0 0;margin-left:-50%}table.ssg_grid_container tr.ssg_row_slider td.ssg_slider_inner .ssg_ticks span.ssg_end_tick,table.ssg_grid_container tr.ssg_row_slider td.ssg_slider_inner .ssg_ticks span.ssg_mid_tick{margin-top:0;height:25px}table.ssg_grid_container tr.ssg_row_slider td.ssg_slider_inner .ssg_ticks span.ssg_end_tick ins,table.ssg_grid_container tr.ssg_row_slider td.ssg_slider_inner .ssg_ticks span.ssg_mid_tick ins{margin-top:25px}table.ssg_grid_container tr.ssg_row_slider td.ssg_slider_inner .ssg_ticks span.ssg_last_tick{margin-left:-1px}[dir='rtl'] table.ssg_grid_container{text-align:left}[dir='rtl'] table.ssg_grid_container th{direction:rtl}[dir='rtl'] table.ssg_grid_container th.ssg_answer{border:1px solid #eceeee;border-left:none;text-align:right}[dir='rtl'] table.ssg_grid_container td{border:1px solid #eceeee}[dir='rtl'] table.ssg_grid_container td.ssg_slider_thumb{border-right:none}[dir='rtl'] table.ssg_grid_container td.ssg_answer{border-left:none}.ssg_scale_slider .ui-widget-content .ui-state-default{border:none;height:30px;width:30px}.ssg_scale_slider .ui-slider-horizontal{height:10px;background-color:#ddd;margin:9px 0;border-radius:6px;border-width:0;cursor:pointer}.ssg_scale_slider .ui-slider-horizontal .ui-slider-handle{top:-10px;margin-left:-15px;outline:none;cursor:pointer}

div.dropdown-container{position:static}[dir='rtl'] div.dropdown-container{position:relative}div.dropdown-container p{margin:0}div.dropdown-container ul.single-choice-dropdown{list-style-type:none;max-width:600px;min-width:250px;padding:0px;margin-top:-1px;-webkit-box-shadow:1px 1px 2px 1px rgba(0,0,0,0.4);box-shadow:1px 1px 2px 1px rgba(0,0,0,0.4);position:absolute;overflow-y:auto;overflow-x:hidden;display:none;z-index:200;max-height:300px;background-color:#ccc}div.dropdown-container .dropdown-option{background-color:#fff;padding:5px;padding-right:60px;padding-top:10px;cursor:pointer;border-left:1px #7E7E7E solid;border-right:1px #7E7E7E solid;overflow:hidden;width:inherit;word-break:break-word;word-wrap:break-word}[dir='rtl'] div.dropdown-container .dropdown-option{padding:10px 5px 5px 60px}div.dropdown-container .dropdown-default-text{width:90%;overflow:hidden;text-overflow:ellipsis;float:left;padding-top:2px;white-space:nowrap}[dir='rtl'] div.dropdown-container .dropdown-default-text{float:right}div.dropdown-container .dropdown-arrow{width:18px;height:18px;float:right;color:#444;font-family:'ORCALO';line-height:18px;font-size:14px}div.dropdown-container .dropdown-arrow:before{content:"\e612"}[dir='rtl'] div.dropdown-container .dropdown-arrow{float:left}div.dropdown-container .dropdown-option:first-child{border-top:1px #7E7E7E solid;font-style:italic}div.dropdown-container .dropdown-option:last-child{border-bottom:1px #7E7E7E solid}div.dropdown-container .dropdown-option:hover{background:#eee}div.dropdown-container .dropdown-default-option{color:#333333;padding:6px;height:20px;border:1px #7E7E7E solid;border-radius:4px;-webkit-border-radius:4px;-moz-border-radius:4px;cursor:pointer;text-overflow:ellipsis;background:#ffffff}div.dropdown-container .dropdown-option-selected{background-color:#eee}div.dropdown-container .placeholder-text{font-style:italic}

.nps-container{margin-top:10px}.nps-container .nps-answer-container{width:670px}.nps-container .nps-answer-container .nps-answer{display:inline-flex;width:48px;height:48px;border:1px solid #999999;box-sizing:border-box;border-radius:4px;margin:0px 5px;line-height:150%;align-items:center;justify-content:center;background:#fdfdfd}.nps-container .nps-answer-container .nps-answer.first{margin-left:0px}.nps-container .nps-answer-container .nps-answer.last{margin-right:0px}[dir='rtl'] .nps-container .nps-answer-container .nps-answer{margin:0px 5px}[dir='rtl'] .nps-container .nps-answer-container .nps-answer.first{margin-right:0px}[dir='rtl'] .nps-container .nps-answer-container .nps-answer.last{margin-left:0px}.nps-container .nps-answer-container .nps-answer:hover{border-color:#7e7e7e;cursor:pointer}.nps-container .nps-answer-container .nps-answer.nps-selected{background:#595A5A;color:#FFFFFF;font-weight:500}.nps-container .nps-answer-container .nps-label-container{display:flex;justify-content:space-between;color:#595A5A;margin-top:12px;word-wrap:break-word}.nps-container .nps-openend-container{margin-top:40px;width:670px}.nps-container .nps-openend-container .nps-followup-question-label p{margin-bottom:24px;word-wrap:break-word}.nps-container .nps-openend-container p.answer{padding-bottom:10px}.nps-container .nps-openend-container input,.nps-container .nps-openend-container textarea{width:670px;min-height:29px;box-sizing:border-box;background:none;outline:none;resize:none;overflow-y:auto;overflow-x:hidden;line-height:1.5em;font-size:1em;float:left}.nps-container .nps-openend-container textarea{margin:0;padding:0.5em 1em;border:1px solid #8d8d8d;float:left;resize:none}.nps-container .nps-openend-container textarea:focus{border:1px solid #4475bd}.nps-container .nps-openend-container input{padding:0;border:none;border-bottom:1px solid #8d8d8d}.nps-container .nps-openend-container input:focus{border:none;border-bottom:1px solid #4475bd}.nps-container .nps-openend-container textarea:-moz-placeholder,.nps-container .nps-openend-container textarea::-moz-placeholder,.nps-container .nps-openend-container textarea:-ms-input-placeholder,.nps-container .nps-openend-container textarea::-webkit-input-placeholder{color:#9b9b9b}.nps-container .nps-openend-container .textareaplaceholder{margin-bottom:5px}.nps-container .nps-openend-container .textareaplaceholder .textanswermessage{width:100%;font-size:0.8rem;font-style:italic;color:#333333;line-height:normal;text-align:right;display:inline-block}[dir='rtl'] .nps-container .nps-openend-container .textareaplaceholder .textanswermessage{text-align:left}.nps-container .nps-openend-container .textAnswerErrorText{float:left;margin:10px 0 0 7px;line-height:normal;color:#333333;font-size:0.8rem;font-style:italic}.nps-container p{margin:0px}

.maxdiff-wrapper{text-align:center;margin-top:10px;word-break:break-word;-ms-word-break:break-all}.maxdiff-wrapper .maxdiff-header-container{display:flex}.maxdiff-wrapper .maxdiff-content-container{display:flex;justify-content:center;align-items:center}.maxdiff-wrapper .maxdiff-progress-hint-container{padding-top:50px;width:600px;margin:0 163px;display:flex;justify-content:center;align-items:flex-start;flex-direction:column}.maxdiff-wrapper .maxdiff-progress-hint-container .maxdiff-progress-bar{margin-top:12px;background-color:#d6d6d6;border-radius:8px;width:600px}.maxdiff-wrapper .maxdiff-progress-hint-container .maxdiff-progress-bar .selected{background-color:#444;border-radius:8px;height:5px}.maxdiff-wrapper .maxdiff-progress-hint-container #maxdiff-hint{margin-top:8px}.maxdiff-wrapper .maxdiffset-container{overflow:hidden;width:600px;height:inherit}.maxdiff-wrapper .maxdiff-button-label{width:70px;display:flex;justify-content:center;align-items:center}.maxdiff-wrapper .maxdiff-attribute{width:460px;padding:0 16px}.maxdiff-wrapper .maxdiff-nav{width:163px;height:60px;display:flex;align-items:center}.maxdiff-wrapper .prev{justify-content:flex-start}.maxdiff-wrapper .next{justify-content:flex-end}.maxdiff-wrapper .nav-button-left{background-color:#fff;border:2px solid #595959;box-sizing:border-box;border-radius:8px;width:60px;height:60px;background-repeat:no-repeat;background-position:center center;cursor:pointer;font-size:x-large;font-family:'ORCALO';display:flex;justify-content:center;align-items:center;transform:rotate(-90deg)}.maxdiff-wrapper .nav-button-left .vci-font-icon{line-height:56px}.maxdiff-wrapper .nav-button-left .vci-font-icon:before{content:"\e664"}[dir='rtl'] .maxdiff-wrapper .nav-button-left{transform:rotate(90deg)}.maxdiff-wrapper .nav-button-right{background-color:#fff;border:2px solid #595959;box-sizing:border-box;border-radius:8px;width:60px;height:60px;background-repeat:no-repeat;background-position:center center;cursor:pointer;font-size:x-large;font-family:'ORCALO';display:flex;justify-content:center;align-items:center;background-color:#595959;border:2px solid #fff;color:#fff;transform:rotate(90deg)}.maxdiff-wrapper .nav-button-right .vci-font-icon{line-height:56px}.maxdiff-wrapper .nav-button-right .vci-font-icon:before{content:"\e664"}[dir='rtl'] .maxdiff-wrapper .nav-button-right{transform:rotate(-90deg)}.maxdiff-wrapper .disabled{background-color:rgba(89,89,89,0.2);pointer-events:none;cursor:default}.maxdiff-wrapper .noevents{pointer-events:none}.maxdiff-wrapper .maxdiff-set{width:600px;float:left;position:relative;display:flex;flex-direction:column;margin-left:100px;border:1px solid #e1e1e1;box-sizing:border-box}[dir='rtl'] .maxdiff-wrapper .maxdiff-set{float:right;margin:auto;margin-right:100px}.maxdiff-wrapper .carousel-sets>div:first-child{margin-left:0}[dir='rtl'] .maxdiff-wrapper .carousel-sets>div:first-child{margin-right:0}.maxdiff-wrapper .maxdiff-set>div:nth-child(odd){background-color:#fafafa}.maxdiff-wrapper .maxdiff-set>div:nth-child(even){background-color:#fff}.maxdiff-wrapper .maxdiff-attribute-container{display:flex;justify-content:center;align-items:center;height:inherit;position:relative;width:100%;padding:16px 0}.maxdiff-wrapper .maxdiff-set>.maxdiff-attribute-container:not(:last-child){border-bottom:1px solid #e1e1e1}.maxdiff-wrapper .maxdiff-header-content{display:flex;justify-content:center;align-items:center;height:inherit;position:relative;width:600px;padding:16px 0}.maxdiff-wrapper .maxdiff-button{width:30px;height:30px;border:1px solid #8d8d8d;background-color:#fff;position:relative;border-radius:50%;cursor:pointer}.maxdiff-wrapper .maxdiff-button .selected-icon{display:none;position:absolute;margin:7px;width:16px;height:16px;border-radius:50%;background:#767676;-webkit-transition:opacity 0.1s;transition:opacity 0.1s}.maxdiff-wrapper .maxdiff-button.selected .selected-icon{display:block}

.conjoint-wrapper{text-align:center;margin-top:10px;word-break:break-word;-ms-word-break:break-all}.conjoint-wrapper .conjoint-header-container{display:flex}.conjoint-wrapper .conjoint-content-container{display:flex;justify-content:center;align-items:center}.conjoint-wrapper .conjoint-progress-hint-container{padding-top:50px;width:600px;margin:0 auto;display:flex;justify-content:center;align-items:flex-start;flex-direction:column}.conjoint-wrapper .conjoint-progress-hint-container .conjoint-progress-bar{margin-top:12px;background-color:#d6d6d6;border-radius:8px;width:600px}.conjoint-wrapper .conjoint-progress-hint-container .conjoint-progress-bar .selected{background-color:#444;border-radius:8px;height:5px}.conjoint-wrapper .conjoint-progress-hint-container #conjoint-hint{margin-top:8px}.conjoint-wrapper .conjointset-container{width:800px;height:inherit}.conjoint-wrapper .conjoint-button-label{width:70px;display:flex;justify-content:center;align-items:center}.conjoint-wrapper .conjoint-attribute{width:460px;padding:0 16px}.conjoint-wrapper .conjoint-nav{height:60px;display:flex;align-items:center;width:60px}.conjoint-wrapper .prev{justify-content:flex-start}.conjoint-wrapper .next{justify-content:flex-end}.conjoint-wrapper .nav-button-left{background-color:#fff;border:2px solid #595959;box-sizing:border-box;border-radius:8px;width:60px;height:60px;background-repeat:no-repeat;background-position:center center;cursor:pointer;font-size:x-large;font-family:'ORCALO';display:flex;justify-content:center;align-items:center;transform:rotate(-90deg)}.conjoint-wrapper .nav-button-left .vci-font-icon{line-height:56px}.conjoint-wrapper .nav-button-left .vci-font-icon:before{content:"\e664"}[dir='rtl'] .conjoint-wrapper .nav-button-left{transform:rotate(90deg)}.conjoint-wrapper .nav-button-right{background-color:#fff;border:2px solid #595959;box-sizing:border-box;border-radius:8px;width:60px;height:60px;background-repeat:no-repeat;background-position:center center;cursor:pointer;font-size:x-large;font-family:'ORCALO';display:flex;justify-content:center;align-items:center;background-color:#595959;border:2px solid #fff;color:#fff;transform:rotate(90deg)}.conjoint-wrapper .nav-button-right .vci-font-icon{line-height:56px}.conjoint-wrapper .nav-button-right .vci-font-icon:before{content:"\e664"}[dir='rtl'] .conjoint-wrapper .nav-button-right{transform:rotate(-90deg)}.conjoint-wrapper .disabled{background-color:rgba(89,89,89,0.2);pointer-events:none;cursor:default}.conjoint-wrapper .noevents{pointer-events:none}.conjoint-wrapper .conjoint-set{width:800px;float:left;position:relative;display:flex;flex-direction:row}[dir='rtl'] .conjoint-wrapper .conjoint-set{float:right}.conjoint-wrapper .conjoint-set div.conjoint-item{flex:1 1 0;padding:0;border-radius:4px;margin:12px;border-color:#E1E1E1;border-width:1px;border-style:solid;background-color:#FAFAFA;display:flex;flex-direction:column}.conjoint-wrapper .conjoint-set div.conjoint-item ul{list-style-type:none;padding:0;flex-grow:1}.conjoint-wrapper .conjoint-set div.conjoint-item ul li.title{margin:30px 10px 8px 10px;font-weight:bold;font-size:15px}.conjoint-wrapper .conjoint-set div.conjoint-item ul li.value{margin-bottom:15px;margin-left:10px;margin-right:10px}.conjoint-wrapper .conjoint-set div.conjoint-item ul li img{max-width:130px;max-height:90px;width:auto;height:auto}.conjoint-wrapper .conjoint-set div.conjoint-item ul .pic{height:90px}.conjoint-wrapper .conjoint-set div.conjoint-item .noneItem{flex-grow:1;display:flex;align-items:center;margin:auto}.conjoint-wrapper .conjoint-set div.conjoint-item div.button-box{margin:20px;flex-grow:0}.conjoint-wrapper .conjoint-set div.conjoint-item a.select-button{display:inline-block;width:100%;background-color:#E0E1E2;line-height:40px;border-radius:4px;font-weight:bold;font-family:Roboto;cursor:pointer}.conjoint-wrapper .conjoint-set div.conjoint-item a.select-button.selected{background-color:#595959;color:white}.conjoint-wrapper .conjoint-attribute-container{display:flex;justify-content:center;align-items:center;height:inherit;position:relative;width:100%;padding:16px 0}.conjoint-wrapper .conjoint-header-content{display:flex;justify-content:center;align-items:center;height:inherit;position:relative;width:800px;padding:16px 0}.conjoint-wrapper .conjoint-button{width:30px;height:30px;border:1px solid #8d8d8d;background-color:#fff;position:relative;border-radius:50%;cursor:pointer}.conjoint-wrapper .conjoint-button .selected-icon{display:none;position:absolute;margin:7px;width:16px;height:16px;border-radius:50%;background:#767676;-webkit-transition:opacity 0.1s;transition:opacity 0.1s}.conjoint-wrapper .conjoint-button.selected .selected-icon{display:block}

.appointment-booking-container .calendly-inline-widget{height:900px}.appointment-booking-container .success-message{background:#E8FFE8;border:1px solid #62BF82;box-sizing:border-box;border-radius:4px;padding:10px}.appointment-booking-container .check-icon{color:#43D968;padding-right:10px}.appointment-booking-container .check-icon:before{content:"selected" !important;font-family:'ORCALO';speak:none;-webkit-font-feature-settings:"liga","dlig";-moz-font-feature-settings:"liga=1, dlig=1";-moz-font-feature-settings:"liga","dlig";-ms-font-feature-settings:"liga","dlig";-o-font-feature-settings:"liga","dlig";font-feature-settings:"liga","dlig";text-rendering:optimizeLegibility;font-weight:normal;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased}

.video-feedback-container .vpm-capture-widget{width:452px;margin:auto}.video-feedback-container .success-message{background:#E8FFE8;border:1px solid #62BF82;box-sizing:border-box;border-radius:4px;padding:10px}.video-feedback-container .check-icon{color:#43D968;padding-right:10px}.video-feedback-container .check-icon:before{content:"selected" !important;font-family:'ORCALO';speak:none;-webkit-font-feature-settings:"liga","dlig";-moz-font-feature-settings:"liga=1, dlig=1";-moz-font-feature-settings:"liga","dlig";-ms-font-feature-settings:"liga","dlig";-o-font-feature-settings:"liga","dlig";font-feature-settings:"liga","dlig";text-rendering:optimizeLegibility;font-weight:normal;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased}.video-feedback-container .content-container{margin:auto;width:450px;height:450px;border:1px solid #DFE0EB}.video-feedback-container .content-container img{width:55%;margin:auto;display:block;padding-top:100px}.video-feedback-container .content-container .error-header{padding:150px 25% 2rem 25%;text-align:center;font-weight:bold;font-size:2rem}.video-feedback-container .content-container .error-message{font-size:1rem;padding:0 25%;text-align:center}

.vc-progress-bar{padding:20px 10px 10px 10px;background-color:#ededed;font-family:Helvetica, Arial, sans-serif;border-top:1px solid #d6d6d6}.vc-progress-bar .ui-progressbar{overflow:visible;background-color:#d8d8d8;height:5px;border-radius:5px;position:relative;margin-top:8px;margin-bottom:8px}.vc-progress-bar .ui-progressbar.has-label{margin-top:28px}.vc-progress-bar .ui-progressbar .ui-progressbar-value{position:absolute;top:0;left:0;overflow:visible;height:5px;border-radius:5px;background:#1456b1;-webkit-transition:width 0.25s ease-in-out;-moz-transition:width 0.25s ease-in-out;-o-transition:width 0.25s ease-in-out;transition:width 0.25s ease-in-out}[dir='rtl'] .vc-progress-bar .ui-progressbar .ui-progressbar-value{left:auto}.vc-progress-bar .ui-progressbar .ui-progressbar-label,.vc-progress-bar .ui-progressbar .ui-progressbar-percent{white-space:nowrap;color:#999;line-height:12px;font-size:12px;text-align:right;padding:0 2.5px;position:absolute;top:-20px}.vc-progress-bar .ui-progressbar .ui-progressbar-label{left:0}[dir='rtl'] .vc-progress-bar .ui-progressbar .ui-progressbar-label{left:auto;right:0}.vc-progress-bar .ui-progressbar .ui-progressbar-percent{right:0;font-weight:bold}[dir='rtl'] .vc-progress-bar .ui-progressbar .ui-progressbar-percent{left:0;right:auto}.vc-progress-bar .ui-progressbar .ui-progressbar-overlay{height:100%;opacity:0.25}.vc-progress-bar .ui-progressbar-indeterminate .ui-progressbar-value{background-image:none}.vc-respondent-upload{margin-top:10px;margin-bottom:10px;position:relative}.vc-respondent-upload .placeholder{background-color:#ededed;position:relative;min-width:300px}.vc-respondent-upload .placeholder .preview-image{max-width:900px;max-height:500px}.vc-respondent-upload .placeholder .upload-btn-container{position:absolute;height:45px}.vc-respondent-upload .placeholder .upload-btn-container .browse-container{overflow:hidden;display:inline-block}.vc-respondent-upload .placeholder .upload-btn-container .browse-container input{font-size:200px;opacity:0;filter:alpha(opacity=0);position:absolute;z-index:1;top:0;left:0;padding:0;margin:0;cursor:pointer;direction:ltr;height:45px !important;display:block !important;overflow:hidden !important}[dir='rtl'] .vc-respondent-upload .placeholder .upload-btn-container .browse-container input{left:auto}.vc-respondent-upload .placeholder .upload-btn-container .delete-container{overflow:hidden;display:inline-block}.vc-respondent-upload .placeholder .upload-btn-container .delete-container .delete{min-width:0px;padding:0px 10px;margin-left:2px;font-size:1.1em;z-index:10}.vc-respondent-upload .status-message{font-style:italic;font-family:Helvetica, Arial, sans-serif;color:#333}.vc-respondent-upload .error-message{color:#B60000;font-weight:bold;font-family:Helvetica, Arial, sans-serif;position:absolute;padding:10px;text-align:center;font-size:14px;width:280px}.vc-respondent-upload .vci-font-icon{font-family:'ORCALO';speak:none;font-weight:normal;font-variant:normal;font-style:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased}.vc-respondent-upload .cancel-button{position:relative;top:-20px;font-size:18px;cursor:pointer}

.survey-page-divider{height:1px;position:relative;top:1px;width:100%;border-top:1px solid #666666;margin:30px 0 30px 0;opacity:0.2}

.grid-container{display:table;position:relative;border-bottom:1px solid #e1e1e1;margin-bottom:10px}.grid-container .grid-head-container{display:table-header-group;position:relative}.grid-container .grid-head-container .grid-header.row-label-placeholder{background:none}.grid-container .grid-head-container .grid-header.row-label-placeholder .header-label{min-width:20px;max-width:150px}.grid-container .grid-head-container .grid-header.marker-placeholder{background:none}.grid-container .grid-head-container .grid-header.marker-placeholder .header-label{width:20px;min-width:20px}.grid-container .grid-head-container .grid-header{display:table-cell;vertical-align:middle;background-color:#ffffff;height:50px;word-wrap:break-word}.grid-container .grid-head-container .grid-header .header-label{padding:10px;text-align:center;min-width:20px;max-width:150px}.grid-container .grid-head-container .grid-header.inline{border-top:1px solid #e1e1e1}.grid-container .grid-head-container .grid-header.alternate{background-color:#fafafa}.grid-container .grid-scroll-container{display:block;max-height:750px;overflow-y:auto;overflow-x:hidden}.grid-container .grid-row{display:table-row;position:relative;height:50px}.grid-container .grid-row .row-label{display:table-cell;height:50px;min-width:20px;max-width:150px;padding:10px;border-top:1px solid #e1e1e1;border-left:1px solid #e1e1e1;vertical-align:middle;background-color:#ffffff}[dir='rtl'] .grid-container .grid-row .row-label{border-left:0px;border-right:1px solid #e1e1e1}.grid-container .grid-row .row-label .row-label-image{max-width:150px;line-height:0;overflow:hidden;position:relative}.grid-container .grid-row .row-label .row-label-text{word-wrap:break-word}.grid-container .grid-row .row-label .row-label-image+.row-label-text{padding-top:10px}.grid-container .grid-row .marker-home{display:table-cell;width:40px;height:50px;border-top:1px solid #e1e1e1;border-left:1px solid #e1e1e1;vertical-align:middle;background-color:#ffffff}[dir='rtl'] .grid-container .grid-row .marker-home{border-left:0px;border-right:1px solid #e1e1e1}.grid-container .grid-row .grid-cell{display:table-cell;position:relative;width:40px;height:50px;vertical-align:middle;background-color:#ffffff;border-top:1px solid #e1e1e1;border-left:1px solid #e1e1e1}[dir='rtl'] .grid-container .grid-row .grid-cell{border-left:0px;border-right:1px solid #e1e1e1}.grid-container .grid-row .grid-cell:last-of-type{border-right:1px solid #e1e1e1}[dir='rtl'] .grid-container .grid-row .grid-cell:last-of-type{border-left:1px solid #e1e1e1}.grid-container .grid-row .grid-cell.selected{background-color:#a4a4a4}.grid-container .grid-row .grid-cell.selected div:-moz-focusring{outline-color:#ffffff}.grid-container .grid-row .alternate{background-color:#fafafa}.grid-container .grid-row .marker{width:30px;height:30px;border:1px solid #e1e1e1;background-color:#ffffff;position:relative;margin:auto}.grid-container .grid-row .marker .selected-icon{pointer-events:none}.grid-container .grid-row .marker.multi .selected-icon{opacity:0;font-family:'ORCALO';margin:3px auto 0 3px;color:#767676;font-size:22px;line-height:26px;-webkit-transition:opacity 0.1s;transition:opacity 0.1s}[dir='rtl'] .grid-container .grid-row .marker.multi .selected-icon{margin:3px 3px 0 auto}.grid-container .grid-row .marker.multi .selected-icon:before{content:'\e610'}.grid-container .grid-row .marker.single,.grid-container .grid-row .marker.multi.exclusive{border-radius:50%}.grid-container .grid-row .marker.single .selected-icon,.grid-container .grid-row .marker.multi.exclusive .selected-icon{opacity:0;position:absolute;margin:7px;width:16px;height:16px;border-radius:50%;background:#767676;-webkit-transition:opacity 0.1s;transition:opacity 0.1s}.grid-container .grid-row .marker.single .selected-icon:before,.grid-container .grid-row .marker.multi.exclusive .selected-icon:before{content:none}.grid-container .grid-row .marker.selected .selected-icon{opacity:1 !important}.grid-container .grid-row.before-repeated-header>div{border-bottom:1px solid #e1e1e1}

.video-js span.ui-btn-inner, .video-js .ui-btn-hidden {
    display: none;
}
.video-js .ui-btn.ui-shadow.ui-btn-corner-all.ui-btn-up-c {
    display: none;
}

.video-js.no-playback .vjs-progress-control.vjs-control {
    visibility: hidden;
}

.video-js.no-duration .vjs-remaining-time {
    display: none;
}
.rankorder-container .row-container .rank-row .row-draggable:before,.rankorder-container .answer-container .rank-answer .answer-box .answer-content .answer-draggable:before,.rankorder-container .drag-helper .drag-draggable:before{content:'\e924'}.rankorder-container{display:flex;flex-flow:row nowrap;flex:0 1 927px;justify-content:space-between;align-items:flex-start;float:left;padding:20px 0;width:100%}.rankorder-container .row-container{display:grid;max-width:500px;grid-template-columns:repeat(2, 1fr);grid-column-gap:0;grid-auto-rows:1fr;justify-content:space-between;margin-right:30px}.rankorder-container .row-container .rank-row{display:flex;position:relative;flex-flow:column nowrap;padding:10px;margin-bottom:10px;margin-right:10px;min-height:18px;border:1px solid #999;background-color:#ffffff;width:208px}.rankorder-container .row-container .rank-row .row-draggable{position:absolute;width:16px;height:16px;line-height:16px;display:inline;font-size:16px;font-family:'ORCALO';text-align:center;color:#e1e1e1}.rankorder-container .row-container .rank-row .row-text{display:inline;margin-left:26px;min-height:18px;word-wrap:break-word}[dir='rtl'] .rankorder-container .row-container .rank-row .row-text{margin-right:26px;margin-left:0}.rankorder-container .row-container .rank-row .row-image{position:relative;margin:auto;margin-top:10px}[dir='rtl'] .rankorder-container .row-container .rank-row{margin-right:0;margin-left:8px}.rankorder-container .row-container .rank-row[aria-disabled="true"]{opacity:0.4;cursor:default;outline:none}[dir='rtl'] .rankorder-container .row-container{margin-right:0;margin-left:30px}.rankorder-container .answer-container{display:flex;flex-flow:column nowrap;flex:0 1 420px;float:right}.rankorder-container .answer-container .rank-answer{display:flex;position:relative;flex-flow:row nowrap;flex:0 1 auto;justify-content:flex-start;align-items:center;margin-bottom:10px}.rankorder-container .answer-container .rank-answer .answer-index{display:inline;width:30px;height:30px;line-height:30px;border-radius:15px;color:#ffffff;background-color:#333;text-align:center;margin-right:10px}[dir='rtl'] .rankorder-container .answer-container .rank-answer .answer-index{margin-right:0;margin-left:10px}.rankorder-container .answer-container .rank-answer .answer-box{display:flex;flex-flow:row nowrap;align-items:stretch;justify-content:space-between;width:378px;height:38px;border:1px solid #d4d4d4;background-color:#ededed}.rankorder-container .answer-container .rank-answer .answer-box .answer-content{display:flex;flex-flow:row nowrap;justify-content:flex-start;align-items:flex-start;height:38px;width:300px;background-color:#ffffff}.rankorder-container .answer-container .rank-answer .answer-box .answer-content .answer-draggable{width:36px;height:38px;line-height:36px;display:inline;font-size:16px;font-family:'ORCALO';text-align:center;color:#e1e1e1}.rankorder-container .answer-container .rank-answer .answer-box .answer-content .answer-text{display:inline;position:relative;width:260px;line-height:1.5em;max-height:3em;min-height:1.5em;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;padding-top:10px}.rankorder-container .answer-container .rank-answer .answer-box .answer-content .answer-image{display:flex;position:relative;justify-content:flex-start;max-width:60px;max-height:40px;margin:9px;overflow:hidden}.rankorder-container .answer-container .rank-answer .answer-box .answer-content+.answer-controls{display:flex}.rankorder-container .answer-container .rank-answer .answer-box .answer-controls{display:none;flex-flow:row nowrap;align-items:flex-start;background-color:#ffffff;padding:0 3px}.rankorder-container .answer-container .rank-answer .answer-box .answer-controls .answer-control{font-family:'ORCALO';color:#999;font-size:16px;padding:0 4px;height:38px;line-height:38px;cursor:pointer}.rankorder-container .answer-container .rank-answer .answer-box .answer-controls .answer-control.up:before{content:'\e614'}.rankorder-container .answer-container .rank-answer .answer-box .answer-controls .answer-control.down:before{content:'\e613'}.rankorder-container .answer-container .rank-answer .answer-box .answer-controls .answer-control.clear:before{content:'\e617'}.rankorder-container .answer-container .rank-answer .answer-box .answer-controls .answer-control:hover{color:#333}.rankorder-container .answer-container .rank-answer .answer-box .answer-controls .answer-control[aria-disabled="true"]{color:#e1e1e1;cursor:default;pointer-events:none;outline:none}.rankorder-container .answer-container .rank-answer .answer-droppable-hover{background-color:#d4d4d4}.rankorder-container.no-text .answer-container .rank-answer .answer-box .answer-content .answer-text{display:none}.rankorder-container.no-text .answer-container .rank-answer .answer-box .answer-content .answer-image{margin:9px 0;justify-content:flex-start}.rankorder-container.has-images .drag-helper{height:88px;width:88px}.rankorder-container.has-images .drag-helper .drag-text{max-width:60px}.rankorder-container.has-images .answer-container .rank-answer .answer-box{height:58px}.rankorder-container.has-images .answer-container .rank-answer .answer-box .answer-content{height:58px}.rankorder-container.has-images .answer-container .rank-answer .answer-box .answer-content .answer-text{width:190px}.rankorder-container .drag-helper{display:block;height:18px;width:208px;padding:10px;border:1px solid #999;background-color:#ffffff}.rankorder-container .drag-helper .drag-draggable{width:18px;height:18px;line-height:18px;float:left;display:inline;font-size:18px;font-family:'ORCALO';text-align:center;color:#e1e1e1}[dir='rtl'] .rankorder-container .drag-helper .drag-draggable{float:right;margin-left:5px}.rankorder-container .drag-helper .drag-text{height:1.5em;line-height:1.5em;padding-left:10px;white-space:nowrap;word-wrap:break-word;overflow:hidden;text-overflow:ellipsis;width:180px}[dir='rtl'] .rankorder-container .drag-helper .drag-text{width:175px}.rankorder-container .drag-helper .drag-image{top:10px;position:relative;margin:auto}.rankorder-container .ui-draggable-handle{cursor:move;cursor:-moz-grab;cursor:-webkit-grab;cursor:grab}.rankorder-container .ui-draggable-dragging{cursor:move;cursor:-moz-grabbing;cursor:-webkit-grabbing;cursor:grabbing}

.vc-choice-buttons .button-container{display:inline-block;position:relative;overflow:visible;margin-top:20px}.vc-choice-buttons .button-container .row{display:inline-block}.vc-choice-buttons .button-container .column{display:inline-block;float:left}[dir='rtl'] .vc-choice-buttons .button-container .column{float:right}.vc-choice-buttons .button-container .button{display:inline-block;overflow:hidden;max-width:720px;position:relative;float:left;padding:5px;margin-right:10px;margin-bottom:0;cursor:pointer;background:#ffffff00}[dir='rtl'] .vc-choice-buttons .button-container .button{float:right}.vc-choice-buttons .button-container .button .button-header{min-width:125px;min-height:29px;margin-bottom:10px}.vc-choice-buttons .button-container .button .button-header .toggle{width:30px;height:30px;border:1px solid #8d8d8d;background-color:#ffffff;position:absolute;margin-right:20px}.vc-choice-buttons .button-container .button .button-header .toggle .selected-icon{pointer-events:none}.vc-choice-buttons .button-container .button .button-header .toggle.multi .selected-icon{opacity:0;font-family:'ORCALO';margin:3px auto 0 3px;color:#8d8d8d;font-size:22px;line-height:26px;-webkit-transition:opacity 0.1s;transition:opacity 0.1s}[dir='rtl'] .vc-choice-buttons .button-container .button .button-header .toggle.multi .selected-icon{margin:3px 3px 0 auto}.vc-choice-buttons .button-container .button .button-header .toggle.multi .selected-icon:before{content:'\e610'}.vc-choice-buttons .button-container .button .button-header .toggle.single,.vc-choice-buttons .button-container .button .button-header .toggle.multi.exclusive{border-radius:50%}.vc-choice-buttons .button-container .button .button-header .toggle.single .selected-icon,.vc-choice-buttons .button-container .button .button-header .toggle.multi.exclusive .selected-icon{opacity:0;position:absolute;margin:7px;width:16px;height:16px;border-radius:50%;background:#8d8d8d;-webkit-transition:opacity 0.1s;transition:opacity 0.1s}.vc-choice-buttons .button-container .button .button-header .toggle.single .selected-icon:before,.vc-choice-buttons .button-container .button .button-header .toggle.multi.exclusive .selected-icon:before{content:none}.vc-choice-buttons .button-container .button .button-header .toggle.selected .selected-icon{opacity:1 !important}[dir='rtl'] .vc-choice-buttons .button-container .button .button-header .toggle{margin-right:0px}.vc-choice-buttons .button-container .button .button-header .label{display:block;margin-left:50px;padding:6px 0;min-height:20px;-ms-word-wrap:break-word;word-wrap:break-word;overflow-wrap:break-word}[dir='rtl'] .vc-choice-buttons .button-container .button .button-header .label{margin-right:50px}.vc-choice-buttons .button-container .button .button-header .text-input{padding-left:49px}[dir='rtl'] .vc-choice-buttons .button-container .button .button-header .text-input{padding-left:0px;padding-right:49px}.vc-choice-buttons .button-container .button .button-header .text-input textarea{padding:0.5em 1em;border:1px solid #8d8d8d}.vc-choice-buttons .button-container .button .button-header .text-input textarea:focus{border:1px solid #4475bd}.vc-choice-buttons .button-container .button .button-header .text-input input[type="text"]{border:none;border-bottom:1px solid #8d8d8d}.vc-choice-buttons .button-container .button .button-header .text-input input[type="text"]:focus{border-bottom:1px solid #4475bd}.vc-choice-buttons .button-container .button .button-header .text-input textarea,.vc-choice-buttons .button-container .button .button-header .text-input input[type="text"]{min-height:29px;box-sizing:border-box;background:none;width:100%;outline:none;resize:none;overflow-y:auto;overflow-x:hidden;line-height:1.5em}.vc-choice-buttons .button-container .button .button-header .text-input textarea:-moz-placeholder,.vc-choice-buttons .button-container .button .button-header .text-input input[type="text"]:-moz-placeholder,.vc-choice-buttons .button-container .button .button-header .text-input textarea::-moz-placeholder,.vc-choice-buttons .button-container .button .button-header .text-input input[type="text"]::-moz-placeholder,.vc-choice-buttons .button-container .button .button-header .text-input textarea::-ms-input-placeholder,.vc-choice-buttons .button-container .button .button-header .text-input input[type="text"]::-ms-input-placeholder,.vc-choice-buttons .button-container .button .button-header .text-input textarea::-webkit-input-placeholder,.vc-choice-buttons .button-container .button .button-header .text-input input[type="text"]::-webkit-input-placeholder,.vc-choice-buttons .button-container .button .button-header .text-input textarea::placeholder,.vc-choice-buttons .button-container .button .button-header .text-input input[type="text"]::placeholder{color:#9b9b9b}.vc-choice-buttons .button-container .button .button-body{box-sizing:border-box;min-width:125px;margin-bottom:10px}.vc-choice-buttons .button-container .button .button-body .image{position:relative;z-index:10;line-height:0;font-size:0}.vc-choice-buttons .button-container .button .button-body .image-container+.text-input{padding-left:0px;padding-top:10px}.vc-choice-buttons .button-container .button .button-body .border-overlay{display:none;position:absolute;border:4px solid #8d8d8d;z-index:20}.vc-choice-buttons .button-container .button .button-body .image-container{position:relative;background-color:#ffffff;overflow:hidden;box-shadow:0 0 5px 0 rgba(0,0,0,0.6)}.vc-choice-buttons .button-container .button .empty{background:#fafafa;box-shadow:none}.vc-choice-buttons .button-container .button.selected .text-input input{border-bottom:4px solid #8d8d8d}

.cardsort-container{position:relative;min-height:440px;width:927px}.cardsort-container .cardsort-cards{display:inline-block;float:left;position:relative;margin:0 20px 0 0;width:403px;height:254px}[dir='rtl'] .cardsort-container .cardsort-cards{float:right;margin:0 0 0 20px;position:static}.cardsort-container .cardsort-cards.sm{width:328px}.cardsort-container .cardsort-cards .card{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:absolute;cursor:pointer;text-align:center;background:white;border:1px solid #999999;width:375px;height:340px}.cardsort-container .cardsort-cards .card .card-label{max-width:275px}.cardsort-container .cardsort-cards .card.sm{width:300px;height:272px}.cardsort-container .cardsort-cards .card.sm .card-label{max-width:205px}.cardsort-container .cardsort-cards .card .card-header .card-count{position:absolute;top:10px;right:5px;text-align:right;color:#6F6F6F;letter-spacing:2px}[dir='rtl'] .cardsort-container .cardsort-cards .card .card-header .card-count{left:5px;right:auto}.cardsort-container .cardsort-cards .card .drag-icon{font-family:'ORCALO';position:absolute;font-size:16px;cursor:pointer;top:12px;left:8px;color:#e1e1e1}[dir='rtl'] .cardsort-container .cardsort-cards .card .drag-icon{right:8px;left:auto}.cardsort-container .cardsort-cards .card .drag-icon::before{content:"\e924"}.cardsort-container .cardsort-cards .card .card-label-container{width:100%;position:absolute;bottom:10px;text-align:center}.cardsort-container .cardsort-cards .card .card-label-container .card-label{word-wrap:break-word;margin:0 auto;line-height:1.6rem;max-height:210px;overflow:hidden}.cardsort-container .cardsort-cards .card .card-label-container .card-label.small{font-size:0.75rem;line-height:1rem}.cardsort-container .cardsort-cards .card .magnify-icon{font-family:'ORCALO';position:absolute;font-size:16px;cursor:pointer}.cardsort-container .cardsort-cards .card .magnify-icon.no-magnify{display:none}.cardsort-container .cardsort-cards .card .magnify-icon::before{content:"\e6a9"}.cardsort-container .cardsort-cards .card .compress-icon,.cardsort-container .cardsort-cards .card .x-icon{display:none}.cardsort-container .cardsort-cards .card .controls{position:relative}.cardsort-container .cardsort-cards .card:last-child:hover{border-color:#5EA3E7}.cardsort-container .cardsort-cards .card.has-image .img-container{position:relative;display:inline-block;width:275px;height:247px;padding-top:28px}.cardsort-container .cardsort-cards .card.has-image .img-container .img-overlay-container{position:relative;display:inline-block}.cardsort-container .cardsort-cards .card.has-image .card-label-container .card-label{max-height:4rem}.cardsort-container .cardsort-cards .card.has-image.sm .img-container{width:205px;height:177px}.cardsort-container .cardsort-cards .card.has-image.sm .img-container .img-overlay-container{position:relative;display:inline-block}.cardsort-container .cardsort-cards .card.no-image .card-label-container{width:auto;position:relative;display:inline-block;bottom:0;vertical-align:middle}.cardsort-container .cardsort-cards .card.no-image .card-label-container .card-label{word-wrap:break-word;margin:0 auto;overflow:hidden;max-width:315px}.cardsort-container .cardsort-cards .card.no-image.sm .card-label{max-width:245px}.cardsort-container .card-drag-helper{min-height:0;max-height:40px;height:auto;cursor:pointer;border:1px solid #d4d4d4;background:white;overflow:hidden}.cardsort-container .card-drag-helper.has-image{max-height:90px;width:90px;height:90px}.cardsort-container .card-drag-helper.has-image .img-container{position:relative;display:inline-block;margin:5px;width:78px;height:78px;border:1px solid #d4d4d4;overflow:hidden}.cardsort-container .card-drag-helper.has-image .img-container .img-overlay-container{position:relative;display:inline-block}.cardsort-container .card-drag-helper.has-image .img-container .img-overlay-container img{position:relative}.cardsort-container .card-drag-helper.no-image{height:40px;width:240px;display:inline-block}.cardsort-container .card-drag-helper.no-image .drag-icon{font-family:'ORCALO';position:absolute;font-size:16px;cursor:pointer;top:12px;left:8px;color:#e1e1e1}[dir='rtl'] .cardsort-container .card-drag-helper.no-image .drag-icon{right:8px;left:auto}.cardsort-container .card-drag-helper.no-image .drag-icon::before{content:"\e924"}.cardsort-container .card-drag-helper.no-image .card-label{height:40px;line-height:40px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.cardsort-container .card-drag-helper.no-image .card-label.small{line-height:40px}.cardsort-container .card-drag-helper .card-label{margin-left:33px}[dir='rtl'] .cardsort-container .card-drag-helper .card-label{margin-left:0px;margin-right:33px}.cardsort-container .card-animation-shim{position:absolute;border:1px solid #d4d4d4;background:white;overflow:hidden;opacity:0.9}.cardsort-container .cardsort-categories{display:inline-block;margin-left:50px}[dir='rtl'] .cardsort-container .cardsort-categories{margin-right:50px}.cardsort-container .cardsort-categories .category-column{float:left;width:255px}[dir='rtl'] .cardsort-container .cardsort-categories .category-column{float:right}.cardsort-container .cardsort-categories .category-column.col1{margin-left:0px;margin-right:30px}[dir='rtl'] .cardsort-container .cardsort-categories .category-column{margin-left:30px;margin-right:0px}.cardsort-container .cardsort-categories.sm{margin-left:10px}[dir='rtl'] .cardsort-container .cardsort-categories.sm{margin-right:9px;margin-left:0px}.cardsort-container .category{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;min-height:103px;margin-bottom:22px;width:380px}.cardsort-container .category .header-text{font-weight:bold;display:inline-block;max-width:340px;vertical-align:middle;cursor:pointer;line-height:18px}.cardsort-container .category.sm{width:255px}.cardsort-container .category.sm .header-text{max-width:215px}.cardsort-container .category .category-column{display:inline-block;float:left}.cardsort-container .category .category-cards-holder{display:inline-block;background-color:#ededed;border:1px solid #d4d4d4;min-height:100px;width:100%;padding-bottom:5px}.cardsort-container .category .category-cards-holder.hovered{background-color:#d4d4d4}.cardsort-container .category .category-cards-holder.overflowing{overflow-x:hidden}.cardsort-container .category .category-header{position:relative;display:flex;align-items:center;width:100%;min-height:50px;color:#333333;word-wrap:break-word}[dir='rtl'] .cardsort-container .category .category-header{justify-content:space-between}.cardsort-container .category .header-plus{font-family:'ORCALO';position:absolute;font-size:16px;cursor:pointer;text-align:center;line-height:30px;font-size:14px;bottom:10px;right:5px;color:white;width:30px;height:30px;-moz-border-radius:15px;-webkit-border-radius:15px;border-radius:15px;background-color:#8C8C8C;vertical-align:middle;box-shadow:0 0 0 2px rgba(255,255,255,0.7)}[dir='rtl'] .cardsort-container .category .header-plus{position:static}.cardsort-container .category .header-plus::before{content:"\e632"}.cardsort-container .category .header-plus:hover{background-color:#CCCCCC}.cardsort-container .category .header-plus:-moz-focusring{outline-color:#333333}.cardsort-container .category .card{border:1px solid #d4d4d4;background:white;position:relative;float:left;margin:5px 0 0 5px;overflow:hidden;width:338px;padding-left:30px}[dir='rtl'] .cardsort-container .category .card{padding-left:0px;padding-right:30px}.cardsort-container .category .card .x-icon{font-family:'ORCALO';position:absolute;font-size:16px;cursor:pointer}.cardsort-container .category .card .x-icon::before{content:"\e617"}.cardsort-container .category .card .card-count{display:none}.cardsort-container .category .card .controls-holder div[role='button']{color:#999999}.cardsort-container .category .card .controls-holder div[role='button']:hover{color:#333333}.cardsort-container .category .card.sm{width:213px}.cardsort-container .category .card.has-image{height:60px}.cardsort-container .category .card.has-image .card-label{height:40px;line-height:40px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.cardsort-container .category .card.has-image .card-label.small{line-height:40px}.cardsort-container .category .card.has-image .drag-icon{font-family:'ORCALO';position:absolute;font-size:16px;cursor:pointer;top:12px;left:8px;color:#e1e1e1}[dir='rtl'] .cardsort-container .category .card.has-image .drag-icon{right:8px;left:auto}.cardsort-container .category .card.has-image .drag-icon::before{content:"\e924"}.cardsort-container .category .card.has-image .card-label-container{display:inline-block;text-align:left;position:relative;float:left;width:auto;bottom:0;top:0}[dir='rtl'] .cardsort-container .category .card.has-image .card-label-container{text-align:right;float:right}.cardsort-container .category .card.has-image .card-label{display:inline-block;width:238px}.cardsort-container .category .card.has-image .img-container{position:relative;display:inline-block;margin:4px;width:60px;height:50px;border:1px solid #d4d4d4;overflow:hidden}.cardsort-container .category .card.has-image .img-container .img-overlay-container{width:60px;height:50px;overflow:hidden;position:relative;display:inline-block}.cardsort-container .category .card.has-image .img-container .img-overlay-container img{position:relative}.cardsort-container .category .card.has-image.sm .card-label{width:106px}.cardsort-container .category .card.has-image .controls-holder{height:60px;position:absolute;top:12px;right:0;width:25px;background:white}[dir='rtl'] .cardsort-container .category .card.has-image .controls-holder{left:0;right:auto}.cardsort-container .category .card.has-image .x-icon{top:0;left:0}[dir='rtl'] .cardsort-container .category .card.has-image .x-icon{margin-left:10px}.cardsort-container .category .card.no-image{height:40px}.cardsort-container .category .card.no-image .card-label{height:40px;line-height:40px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.cardsort-container .category .card.no-image .card-label.small{line-height:40px}.cardsort-container .category .card.no-image .drag-icon{font-family:'ORCALO';position:absolute;font-size:16px;cursor:pointer;top:12px;left:8px;color:#e1e1e1}[dir='rtl'] .cardsort-container .category .card.no-image .drag-icon{right:8px;left:auto}.cardsort-container .category .card.no-image .drag-icon::before{content:"\e924"}.cardsort-container .category .card.no-image .card-label-container{display:inline-block;text-align:left;position:relative;float:left;width:auto;bottom:0;top:0}[dir='rtl'] .cardsort-container .category .card.no-image .card-label-container{text-align:right;float:right;margin-left:8px}.cardsort-container .category .card.no-image .card-label{line-height:40px;display:inline-block;width:298px}.cardsort-container .category .card.no-image .controls-holder{height:40px;position:relative;float:right;width:36px;background:white}[dir='rtl'] .cardsort-container .category .card.no-image .controls-holder{position:static}.cardsort-container .category .card.no-image .x-icon{top:12px;right:10px}[dir='rtl'] .cardsort-container .category .card.no-image .x-icon{right:auto;left:0px;margin-left:10px}.cardsort-container .category .card.no-image.sm .card-label{width:173px}

.openendedtext p.answer{padding-bottom:10px}.openendedtext input,.openendedtext textarea{min-height:29px;box-sizing:border-box;background:none;width:230px;outline:none;resize:none;overflow-y:auto;overflow-x:hidden;line-height:1.5em;font-size:1em;float:left}[dir='rtl'] .openendedtext input,[dir='rtl'] .openendedtext textarea{float:right}[dir='rtl'] .openendedtext .email-input{text-align:right;direction:ltr}.openendedtext textarea{margin:0;padding:0.5em 1em;border:1px solid #8d8d8d}.openendedtext textarea:focus{border:1px solid #4475bd}.openendedtext input{padding:0;border:none;border-bottom:1px solid #8d8d8d}.openendedtext input:focus{border:none;border-bottom:1px solid #4475bd}.openendedtext textarea:-moz-placeholder,.openendedtext textarea::-moz-placeholder,.openendedtext textarea:-ms-input-placeholder,.openendedtext textarea::-webkit-input-placeholder{color:#9b9b9b}.openendedtext .textareaContainer .textareaplaceholder{width:965px}.openendedtext .textareaContainer .textareaplaceholder.novalidation{width:620px;margin-bottom:5px}.openendedtext .textareaContainer .textareaplaceholder.novalidation div{display:inline-block}.openendedtext .textareaContainer .textareaplaceholder .novalidation{width:620px}.openendedtext .textareaContainer .textareaplaceholder .textanswermessage{width:100%;font-size:0.8rem;font-style:italic;color:#333333;line-height:normal;text-align:right}[dir='rtl'] .openendedtext .textareaContainer .textareaplaceholder .textanswermessage{text-align:left}.openendedtext .textareaContainer textarea{float:left}.openendedtext .textareaContainer .textAnswerErrorText{float:left;margin:10px 0 0 7px;line-height:normal;color:#333333;font-size:0.8rem;font-style:italic}[dir='rtl'] .openendedtext .textareaContainer .textAnswerErrorText{margin:10px 7px 0 0;float:right}.openendedtext .textareaContainer .textAnswerErrorText.novalidation{white-space:nowrap}

.carousel{overflow:hidden}.carousel .carousel-sets{position:relative;width:48000px}

#questionContent, .question {
    width: 100%;
    padding: 0;
}

.question {
    margin: 24px 0;
    border: 1px solid #D5D6E0;
    border-radius: 4px;
    box-sizing: border-box;
}

.questionheader, .questionbody {
    padding: 16px 24px;
}

.questionbody {
    display: flex;
    flex-direction: column;
}

.question-underline {
    margin: 0 24px;
    height: 1px;
    border-width: 0;
    background-color: #D5D6E0;
}

.survey-page-divider-no-margin {
    margin: 0;
    border-top: none;
    height: 2px;
    background-color: #D5D6E0;
}
.questionheader p:last-child {
    margin: 0;
}

.questionRequiredStar {
    margin-left: 0;
    text-align: left;
}

.questionRequiredStarAlignment {
    margin-left: 0;
}

[dir='rtl'] .questionRequiredStarAlignment {
    margin-right: 0;
    margin-left: 0;
    padding-left: 0;
    text-align: right;
}
.questionheader img {
    max-width: 905px;
}

.questionheader {
    display: flex;
}

.questionText {
    flex: 1;
}

.openendedtext textarea {
    background: white;
}
.pluginRoot ~ .questionErrorMsg{margin-bottom:0;margin-top:10px;height:0;min-height:16px}.vc-choice-buttons .button-container{margin-top:0}.vc-choice-buttons .button-container .column .button:last-child .button-header,.vc-choice-buttons .button-container .column .button:last-child .button-body{margin-bottom:0}.vc-choice-buttons .button-container .column .button:last-child .button-body{margin-top:10px}.vc-choice-buttons .button-container .row:last-child .button .button-header,.vc-choice-buttons .button-container .row:last-child .button .button-body{margin-bottom:0}.vc-choice-buttons .button-container .row:last-child .button .button-body{margin-top:10px}.grid-container{margin-bottom:0}table.ssg_grid_container{margin-bottom:0}.openendedtext .textareaContainer .textareaplaceholder.novalidation{margin-bottom:0}.nps-container{margin-top:0}.nps-container .nps-openend-container .npsOpenEndLabelContainer{display:flex}.nps-container .nps-openend-container .nps-followup-question-label{flex:1}.maxdiff-wrapper{margin-top:0}.maxdiff-wrapper .maxdiff-header-content{padding-top:0}.rankorder-container{padding:0}.conjoint-wrapper{margin-top:0}.vc-respondent-upload{margin-top:0;margin-bottom:0}.vc-respondent-upload .placeholder,.vc-respondent-upload .vc-progress-bar{margin:0 auto}.survey-page-divider{margin:0}.visioncritical-highlighter{display:flex;justify-content:center}.vjs-big-play-centered.video-js{margin:0 auto}.ns_numeric_slider .ns_error{float:left}[dir='rtl'] .ns_numeric_slider .ns_error{float:right}
