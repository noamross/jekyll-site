/* Add plugins etc here. Remember to credit the authors ;) */
$(document).ready(function() {
  var scrollTop, scrollBottom, op;
  $(window).scroll(function() {
      menu();
  });
  function menu() {
    scrollTop = $(this).scrollTop();
    scrollBottom = $(document).height() - $(window).height();
    op = scrollBottom - scrollTop;
    if (scrollTop > (scrollBottom - 100)){
      $('#menu').removeClass('menu-top');
      $('#menu').addClass('menu-bottom');
      $('#menu').css({
        'opacity' : 1-(op/100)
      });
    } else {
      $('#menu').removeClass('menu-bottom');
      $('#menu').addClass('menu-top');
      $('#menu').css({
        'opacity' : 1-(scrollTop/100)
      });
    }  
  }

// <![CDATA[
/*------------------------------------------------------------------------------
Filename:       jsUtilities Library
Author:         Aaron Gustafson (aaron at easy-designs dot net)
                unless otherwise noted
Creation Date:  4 June 2005
Version:        2.1
Homepage:       http://www.easy-designs.net/code/jsUtilities/
License:        Creative Commons Attribution-ShareAlike 2.0 License
                http://creativecommons.org/licenses/by-sa/2.0/
Note:           If you change or improve on this script, please let us know by 
                emailing the author (above) with a link to your demo page.
------------------------------------------------------------------------------*/
// ---------------------------------------------------------------------
//                      array.push (if unsupported)
// ---------------------------------------------------------------------
if(Array.prototype.push == null) { Array.prototype.push = function(item) { this[this.length] = item; return this.length; }; };
// ---------------------------------------------------------------------
//                      array.shift (if unsupported)
// ---------------------------------------------------------------------
if (Array.prototype.shift == null) { Array.prototype.shift = function() { var response = this[0]; for (var i=0; i < this.length-1; i++) { this[i] = this[i + 1]; }; this.length--; return response; }; };
// ---------------------------------------------------------------------
//                  function.apply (if unsupported)
//           Courtesy of Aaron Boodman - http://youngpup.net
// ---------------------------------------------------------------------
if (!Function.prototype.apply) { Function.prototype.apply = function(oScope, args) { var sarg = []; var rtrn, call; if (!oScope) oScope = window; if (!args) args = []; for (var i = 0; i < args.length; i++) { sarg[i] = "args["+i+"]";}; call = "oScope.__applyTemp__(" + sarg.join(",") + ");"; oScope.__applyTemp__ = this; rtrn = eval(call); oScope.__applyTemp__ = null; return rtrn;};}; 
// ---------------------------------------------------------------------
//                               inArray()
//                           [Port from PHP]
//               Hunts for a value in the specified array
// ---------------------------------------------------------------------
function inArray(needle) { for (var i=0; i < this.length; i++) { if (this[i] === needle) { return i; } } return false; } Array.prototype.inArray = inArray;
// ---------------------------------------------------------------------
//                               isArray()
//                           [Port from PHP]
//                  verifies if something is an array
// ---------------------------------------------------------------------
function isArray() { return (typeof(this.length)=="undefined") ? false : true; }; Array.prototype.isArray = isArray;
// ---------------------------------------------------------------------
//                               ksort()
//                           [Port from PHP]
//                     sorts an array by key names
// ---------------------------------------------------------------------
function ksort() { var sArr = []; var tArr = []; var n = 0; for (i in this) tArr[n++] = i+"|"+this[i]; tArr = tArr.sort(); for (var i=0; i<tArr.length; i++) { var x = tArr[i].split("|"); sArr[x[0]] = x[1]; } return sArr; } Array.prototype.ksort = ksort;
// ---------------------------------------------------------------------
//                             addClass()
//                 appends the specified class to the object
// ---------------------------------------------------------------------
function addClass(theClass) { if (this.className != '') { this.className += ' ' + theClass; } else { this.className = theClass; } } Object.prototype.addClass = addClass;
// ---------------------------------------------------------------------
//                           removeClass()
//                 removes the specified class to the object
// ---------------------------------------------------------------------
function removeClass(theClass) { var oldClass = this.className; var regExp = new RegExp('\\s?'+theClass+'\\b'); if (oldClass.indexOf(theClass) != -1) { this.className = oldClass.replace(regExp,''); } } Object.prototype.removeClass = removeClass;
// ---------------------------------------------------------------------
//                      lastChildContainingText()
//  finds the last block-level text-containing element within an object
// ---------------------------------------------------------------------
function lastChildContainingText() { var testChild = this.lastChild; var contentCntnr = ['p','li','dd']; while (testChild.nodeType != 1) { testChild = testChild.previousSibling; }  var tag = testChild.tagName.toLowerCase(); var tagInArr = inArray.apply(contentCntnr, [tag]); if (!tagInArr && tagInArr!==0) { testChild = lastChildContainingText.apply(testChild); } return testChild; } Object.prototype.lastChildContainingText = lastChildContainingText;

// ]]>

// <![CDATA[
/*------------------------------------------------------------------------------
Function:       footnoteLinks()
Author:         Aaron Gustafson (aaron at easy-designs dot net)
Creation Date:  8 May 2005
Version:        1.3
Homepage:       http://www.easy-designs.net/code/footnoteLinks/
License:        Creative Commons Attribution-ShareAlike 2.0 License
                http://creativecommons.org/licenses/by-sa/2.0/
Note:           If you change or improve on this script, please let us know by 
                emailing the author (above) with a link to your demo page.
------------------------------------------------------------------------------*/
function footnoteLinks(containerID,targetID) { if (!document.getElementById || !document.getElementsByTagName || !document.createElement) return false; if (!document.getElementById(containerID) || !document.getElementById(targetID)) return false; var container = document.getElementById(containerID); var target = document.getElementById(targetID); var h2 = document.createElement('h2'); addClass.apply(h2,['printOnly']); var h2_txt = document.createTextNode('Links'); h2.appendChild(h2_txt); var coll = container.getElementsByTagName('*'); var ol = document.createElement('ol'); addClass.apply(ol,['printOnly']); var myArr = []; var thisLink; var num = 1; for (var i=0; i<coll.length; i++) { var thisClass = coll[i].className; if ( (coll[i].getAttribute('href') || coll[i].getAttribute('cite')) && (thisClass == '' || thisClass.indexOf('ignore') == -1)) { thisLink = coll[i].getAttribute('href') ? coll[i].href : coll[i].cite; var note = document.createElement('sup'); addClass.apply(note,['printOnly']); var note_txt; var j = inArray.apply(myArr,[thisLink]); if ( j || j===0 ) { note_txt = document.createTextNode(j+1);} else { var li = document.createElement('li'); var li_txt = document.createTextNode(thisLink); li.appendChild(li_txt); ol.appendChild(li); myArr.push(thisLink); note_txt = document.createTextNode(num); num++;} note.appendChild(note_txt); if (coll[i].tagName.toLowerCase() == 'blockquote') { var lastChild = lastChildContainingText.apply(coll[i]); lastChild.appendChild(note);} else { coll[i].parentNode.insertBefore(note, coll[i].nextSibling);} } } target.appendChild(h2); target.appendChild(ol); addClass.apply(document.getElementsByTagName('html')[0],['noted']); return true;}


window.onload = function() {
  footnoteLinks('content','content');
}


