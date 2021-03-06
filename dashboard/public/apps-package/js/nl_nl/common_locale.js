var locale = {lc:{"ar":function(n){
  if (n === 0) {
    return 'zero';
  }
  if (n == 1) {
    return 'one';
  }
  if (n == 2) {
    return 'two';
  }
  if ((n % 100) >= 3 && (n % 100) <= 10 && n == Math.floor(n)) {
    return 'few';
  }
  if ((n % 100) >= 11 && (n % 100) <= 99 && n == Math.floor(n)) {
    return 'many';
  }
  return 'other';
},"en":function(n){return n===1?"one":"other"},"bg":function(n){return n===1?"one":"other"},"bn":function(n){return n===1?"one":"other"},"ca":function(n){return n===1?"one":"other"},"cs":function(n){
  if (n == 1) {
    return 'one';
  }
  if (n == 2 || n == 3 || n == 4) {
    return 'few';
  }
  return 'other';
},"da":function(n){return n===1?"one":"other"},"de":function(n){return n===1?"one":"other"},"el":function(n){return n===1?"one":"other"},"es":function(n){return n===1?"one":"other"},"et":function(n){return n===1?"one":"other"},"eu":function(n){return n===1?"one":"other"},"fa":function(n){return "other"},"fi":function(n){return n===1?"one":"other"},"fil":function(n){return n===0||n==1?"one":"other"},"fr":function(n){return Math.floor(n)===0||Math.floor(n)==1?"one":"other"},"gl":function(n){return n===1?"one":"other"},"he":function(n){return n===1?"one":"other"},"hi":function(n){return n===0||n==1?"one":"other"},"hr":function(n){
  if ((n % 10) == 1 && (n % 100) != 11) {
    return 'one';
  }
  if ((n % 10) >= 2 && (n % 10) <= 4 &&
      ((n % 100) < 12 || (n % 100) > 14) && n == Math.floor(n)) {
    return 'few';
  }
  if ((n % 10) === 0 || ((n % 10) >= 5 && (n % 10) <= 9) ||
      ((n % 100) >= 11 && (n % 100) <= 14) && n == Math.floor(n)) {
    return 'many';
  }
  return 'other';
},"hu":function(n){return "other"},"id":function(n){return "other"},"is":function(n){
    return ((n%10) === 1 && (n%100) !== 11) ? 'one' : 'other';
  },"it":function(n){return n===1?"one":"other"},"ja":function(n){return "other"},"ko":function(n){return "other"},"lt":function(n){
  if ((n % 10) == 1 && ((n % 100) < 11 || (n % 100) > 19)) {
    return 'one';
  }
  if ((n % 10) >= 2 && (n % 10) <= 9 &&
      ((n % 100) < 11 || (n % 100) > 19) && n == Math.floor(n)) {
    return 'few';
  }
  return 'other';
},"lv":function(n){
  if (n === 0) {
    return 'zero';
  }
  if ((n % 10) == 1 && (n % 100) != 11) {
    return 'one';
  }
  return 'other';
},"mk":function(n){return (n%10)==1&&n!=11?"one":"other"},"ms":function(n){return "other"},"mt":function(n){
  if (n == 1) {
    return 'one';
  }
  if (n === 0 || ((n % 100) >= 2 && (n % 100) <= 4 && n == Math.floor(n))) {
    return 'few';
  }
  if ((n % 100) >= 11 && (n % 100) <= 19 && n == Math.floor(n)) {
    return 'many';
  }
  return 'other';
},"nl":function(n){return n===1?"one":"other"},"no":function(n){return n===1?"one":"other"},"pl":function(n){
  if (n == 1) {
    return 'one';
  }
  if ((n % 10) >= 2 && (n % 10) <= 4 &&
      ((n % 100) < 12 || (n % 100) > 14) && n == Math.floor(n)) {
    return 'few';
  }
  if ((n % 10) === 0 || n != 1 && (n % 10) == 1 ||
      ((n % 10) >= 5 && (n % 10) <= 9 || (n % 100) >= 12 && (n % 100) <= 14) &&
      n == Math.floor(n)) {
    return 'many';
  }
  return 'other';
},"pt":function(n){return n===1?"one":"other"},"ro":function(n){
  if (n == 1) {
    return 'one';
  }
  if (n === 0 || n != 1 && (n % 100) >= 1 &&
      (n % 100) <= 19 && n == Math.floor(n)) {
    return 'few';
  }
  return 'other';
},"ru":function(n){
  if ((n % 10) == 1 && (n % 100) != 11) {
    return 'one';
  }
  if ((n % 10) >= 2 && (n % 10) <= 4 &&
      ((n % 100) < 12 || (n % 100) > 14) && n == Math.floor(n)) {
    return 'few';
  }
  if ((n % 10) === 0 || ((n % 10) >= 5 && (n % 10) <= 9) ||
      ((n % 100) >= 11 && (n % 100) <= 14) && n == Math.floor(n)) {
    return 'many';
  }
  return 'other';
},"sk":function(n){
  if (n == 1) {
    return 'one';
  }
  if (n == 2 || n == 3 || n == 4) {
    return 'few';
  }
  return 'other';
},"sl":function(n){
  if ((n % 100) == 1) {
    return 'one';
  }
  if ((n % 100) == 2) {
    return 'two';
  }
  if ((n % 100) == 3 || (n % 100) == 4) {
    return 'few';
  }
  return 'other';
},"sq":function(n){return n===1?"one":"other"},"sr":function(n){
  if ((n % 10) == 1 && (n % 100) != 11) {
    return 'one';
  }
  if ((n % 10) >= 2 && (n % 10) <= 4 &&
      ((n % 100) < 12 || (n % 100) > 14) && n == Math.floor(n)) {
    return 'few';
  }
  if ((n % 10) === 0 || ((n % 10) >= 5 && (n % 10) <= 9) ||
      ((n % 100) >= 11 && (n % 100) <= 14) && n == Math.floor(n)) {
    return 'many';
  }
  return 'other';
},"sv":function(n){return n===1?"one":"other"},"ta":function(n){return n===1?"one":"other"},"th":function(n){return "other"},"tr":function(n){return n===1?"one":"other"},"uk":function(n){
  if ((n % 10) == 1 && (n % 100) != 11) {
    return 'one';
  }
  if ((n % 10) >= 2 && (n % 10) <= 4 &&
      ((n % 100) < 12 || (n % 100) > 14) && n == Math.floor(n)) {
    return 'few';
  }
  if ((n % 10) === 0 || ((n % 10) >= 5 && (n % 10) <= 9) ||
      ((n % 100) >= 11 && (n % 100) <= 14) && n == Math.floor(n)) {
    return 'many';
  }
  return 'other';
},"ur":function(n){return n===1?"one":"other"},"vi":function(n){return "other"},"zh":function(n){return "other"}},
c:function(d,k){if(!d)throw new Error("MessageFormat: Data required for '"+k+"'.")},
n:function(d,k,o){if(isNaN(d[k]))throw new Error("MessageFormat: '"+k+"' isn't a number.");return d[k]-(o||0)},
v:function(d,k){locale.c(d,k);return d[k]},
p:function(d,k,o,l,p){locale.c(d,k);return d[k] in p?p[d[k]]:(k=locale.lc[l](d[k]-o),k in p?p[k]:p.other)},
s:function(d,k,p){locale.c(d,k);return d[k] in p?p[d[k]]:p.other}};
(window.blockly = window.blockly || {}).locale = {
"and":function(d){return "en"},
"booleanTrue":function(d){return "waar"},
"booleanFalse":function(d){return "onwaar"},
"blocks":function(d){return "blokken"},
"blocklyMessage":function(d){return "Blockly"},
"catActions":function(d){return "Acties"},
"catColour":function(d){return "Kleur"},
"catLogic":function(d){return "Logica"},
"catLists":function(d){return "Lijsten"},
"catLoops":function(d){return "Lussen"},
"catMath":function(d){return "Wiskunde"},
"catProcedures":function(d){return "Functies"},
"catText":function(d){return "tekst"},
"catVariables":function(d){return "Variabelen"},
"clearPuzzle":function(d){return "Begin opnieuw"},
"clearPuzzleConfirm":function(d){return "Hiermee breng je de puzzel terug naar zijn beginstaat en verwijder je alle blokken die je toegevoegd of veranderd hebt."},
"clearPuzzleConfirmHeader":function(d){return "Weet je zeker dat je opnieuw wilt beginnen?"},
"codeMode":function(d){return "Code"},
"codeTooltip":function(d){return "Zie gegenereerde JavaScript-code."},
"continue":function(d){return "Verder"},
"designMode":function(d){return "Ontwerp"},
"designModeHeader":function(d){return "Ontwerpmodus"},
"dialogCancel":function(d){return "Annuleren"},
"dialogOK":function(d){return "OK"},
"directionNorthLetter":function(d){return "N"},
"directionSouthLetter":function(d){return "Z"},
"directionEastLetter":function(d){return "O"},
"directionWestLetter":function(d){return "W"},
"dropletBlock_addOperator_description":function(d){return "Twee getallen optellen"},
"dropletBlock_addOperator_signatureOverride":function(d){return "Add operator"},
"dropletBlock_andOperator_description":function(d){return "Geeft waar als resultaat indien beide voorwaarden waar zijn en onwaar indien dit niet het geval is"},
"dropletBlock_andOperator_signatureOverride":function(d){return "EN boolean operator"},
"dropletBlock_arcLeft_description":function(d){return "Verplaats de schildpad tegen de klok in volgens het opgegeven aantal graden en de opgegeven radius"},
"dropletBlock_arcLeft_param0":function(d){return "angle"},
"dropletBlock_arcLeft_param1":function(d){return "straal"},
"dropletBlock_arcRight_description":function(d){return "Verplaats de schildpad met de klok mee volgens het opgegeven aantal graden en de opgegeven radius"},
"dropletBlock_arcRight_param0":function(d){return "angle"},
"dropletBlock_arcRight_param1":function(d){return "straal"},
"dropletBlock_assign_x_description":function(d){return "Variabele opnieuw toewijzen"},
"dropletBlock_assign_x_signatureOverride":function(d){return "Assign a variable"},
"dropletBlock_button_description":function(d){return "Knop maken en element-id toekennen"},
"dropletBlock_button_param0":function(d){return "buttonId"},
"dropletBlock_button_param1":function(d){return "tekst"},
"dropletBlock_callMyFunction_description":function(d){return "Roept een functie aan die geen parameters verwacht"},
"dropletBlock_callMyFunction_signatureOverride":function(d){return "Een functie aanroepen"},
"dropletBlock_callMyFunction_n_description":function(d){return "Roept een functie aan die een of meer parameters verwacht"},
"dropletBlock_callMyFunction_n_signatureOverride":function(d){return "Een functie aanroepen met parameters"},
"dropletBlock_changeScore_description":function(d){return "Verwijder of voeg een punt toe aan de score."},
"dropletBlock_checkbox_description":function(d){return "Checkbox maken en element-id toekennen"},
"dropletBlock_checkbox_param0":function(d){return "checkboxId"},
"dropletBlock_checkbox_param1":function(d){return "checked"},
"dropletBlock_circle_description":function(d){return "Teken een cirkel op het actieve canvas met het middelpunt op de opgegeven coördinaten (x, y) en straal"},
"dropletBlock_circle_param0":function(d){return "centerX"},
"dropletBlock_circle_param1":function(d){return "centerY"},
"dropletBlock_circle_param2":function(d){return "straal"},
"dropletBlock_clearCanvas_description":function(d){return "Wis alle informatie op het actieve canvas"},
"dropletBlock_clearInterval_description":function(d){return "Bestaande timer interval leegmaken door de van setInterval() verkregen waarde mee te geven"},
"dropletBlock_clearInterval_param0":function(d){return "interval"},
"dropletBlock_clearTimeout_description":function(d){return "Wis een bestaande timer door de waarde, die setTimeout() gaf, door te geven"},
"dropletBlock_clearTimeout_param0":function(d){return "timeout"},
"dropletBlock_console.log_description":function(d){return "Toon de tekst of variabele in de console display"},
"dropletBlock_console.log_param0":function(d){return "bericht"},
"dropletBlock_container_description":function(d){return "Maak een 'div'-container met dit element-id, en bepaal eventueel de HTML die erin moet komen"},
"dropletBlock_createCanvas_description":function(d){return "Maak een canvas met dit id, en bepaal eventueel de hoogte en breedte"},
"dropletBlock_createCanvas_param0":function(d){return "canvasId"},
"dropletBlock_createCanvas_param1":function(d){return "breedte"},
"dropletBlock_createCanvas_param2":function(d){return "hoogte"},
"dropletBlock_createRecord_description":function(d){return "Met behulp van de tabel dataopslag van de App Lab, wordt een record met een uniek id gecreëerd in de gegeven tabelnaam en wordt de callbackFunction aangeroepen wanneer deze actie klaar is."},
"dropletBlock_createRecord_param0":function(d){return "tabelNaam"},
"dropletBlock_createRecord_param1":function(d){return "record"},
"dropletBlock_createRecord_param2":function(d){return "functie"},
"dropletBlock_declareAssign_x_array_1_4_description":function(d){return "Maak een variabele en initialiseer hem als array"},
"dropletBlock_declareAssign_x_array_1_4_signatureOverride":function(d){return "Declare a variable assigned to an array"},
"dropletBlock_declareAssign_x_description":function(d){return "Declareert een variabele met de naam die na het woordje 'var' komt en wijst er de waarde aan rechterzijde van de expressie aan toe"},
"dropletBlock_declareAssign_x_signatureOverride":function(d){return "Een variabele declareren"},
"dropletBlock_declareAssign_x_prompt_description":function(d){return "een variabele maken en hier een waarde aan toekennen door een prompt weer te geven"},
"dropletBlock_declareAssign_x_prompt_signatureOverride":function(d){return "Prompt the user for a value and store it"},
"dropletBlock_deleteElement_description":function(d){return "Element met de opgegeven id verwijderen"},
"dropletBlock_deleteElement_param0":function(d){return "id"},
"dropletBlock_deleteRecord_description":function(d){return "Met behulp van de tabel dataopslag van de App Lab, wordt het gegeven record verwijderd uit tableName. Een record is een object dat een unieke identificatie heeft door het id. Wanneer deze actie voltooid is, wordt de callbackFunction aangeroepen."},
"dropletBlock_deleteRecord_param0":function(d){return "tabelNaam"},
"dropletBlock_deleteRecord_param1":function(d){return "record"},
"dropletBlock_deleteRecord_param2":function(d){return "functie"},
"dropletBlock_divideOperator_description":function(d){return "Twee getallen delen"},
"dropletBlock_divideOperator_signatureOverride":function(d){return "Divide operator"},
"dropletBlock_dot_description":function(d){return "Teken een rondje op de plaats waar de schildpad staat met de aangegeven straal"},
"dropletBlock_dot_param0":function(d){return "straal"},
"dropletBlock_drawImage_description":function(d){return "Teken een afbeelding op het actieve canvas met het aangegeven plaatje en met x, y als linkerbovenhoek"},
"dropletBlock_drawImage_param0":function(d){return "id"},
"dropletBlock_drawImage_param1":function(d){return "x"},
"dropletBlock_drawImage_param2":function(d){return "y"},
"dropletBlock_drawImage_param3":function(d){return "breedte"},
"dropletBlock_drawImage_param4":function(d){return "hoogte"},
"dropletBlock_dropdown_description":function(d){return "Maak een dropdown keuzelijst, wijs er een element id aan toe en vul het met een lijst van items"},
"dropletBlock_dropdown_signatureOverride":function(d){return "dropdown(dropdownID, option1, option2, ..., optionX)"},
"dropletBlock_equalityOperator_description":function(d){return "Test op gelijkheid"},
"dropletBlock_equalityOperator_signatureOverride":function(d){return "Equality operator"},
"dropletBlock_forLoop_i_0_4_description":function(d){return "Hiermee wordt een lus gemaakt die bestaat uit het opstarten van een expressie, een voorwaardelijke expressie, een oplopende expressie en een blok met uit te voeren instructies dat uitgevoerd wordt voor iedere iteratie in de lus"},
"dropletBlock_forLoop_i_0_4_signatureOverride":function(d){return "for-lus"},
"dropletBlock_functionParams_n_description":function(d){return "Een set van instructies die één of meer parameters nodig heeft en een taak of berekening uitvoert wanneer de functie is aangeroepen"},
"dropletBlock_functionParams_n_signatureOverride":function(d){return "Definieer een functie met parameters"},
"dropletBlock_functionParams_none_description":function(d){return "Een reeks instructies waarmee een taak of berekening wordt uitgevoerd wanneer de functie wordt aangeroepen"},
"dropletBlock_functionParams_none_signatureOverride":function(d){return "Een functie definiëren"},
"dropletBlock_getAlpha_description":function(d){return "Alpha-waarde ophalen"},
"dropletBlock_getAlpha_param0":function(d){return "imageData"},
"dropletBlock_getAlpha_param1":function(d){return "x"},
"dropletBlock_getAlpha_param2":function(d){return "y"},
"dropletBlock_getAttribute_description":function(d){return "Opgegeven eigenschap ophalen"},
"dropletBlock_getBlue_description":function(d){return "Deze eigenschap haalt de hoeveelheid blauw (variërend van 0 tot en met 255) in de kleur van de pixel op de gegeven x- en y-positie in de afbeelding."},
"dropletBlock_getBlue_param0":function(d){return "imageData"},
"dropletBlock_getBlue_param1":function(d){return "x"},
"dropletBlock_getBlue_param2":function(d){return "y"},
"dropletBlock_getChecked_description":function(d){return "Haal de status van een checkbox of radiobutton op"},
"dropletBlock_getChecked_param0":function(d){return "id"},
"dropletBlock_getDirection_description":function(d){return "Geef de richting van de shildpad (0 graden is omhoog)"},
"dropletBlock_getGreen_description":function(d){return "Deze eigenschap haalt de hoeveelheid groen (variërend van 0 tot en met 255) in de kleur van de pixel op de gegeven x- en y-positie in de afbeelding."},
"dropletBlock_getGreen_param0":function(d){return "imageData"},
"dropletBlock_getGreen_param1":function(d){return "x"},
"dropletBlock_getGreen_param2":function(d){return "y"},
"dropletBlock_getImageData_description":function(d){return "Geef de ImageData voor een rechthoek (x, y, breedte, hoogte) voor het actieve canvas"},
"dropletBlock_getImageData_param0":function(d){return "startX"},
"dropletBlock_getImageData_param1":function(d){return "startY"},
"dropletBlock_getImageData_param2":function(d){return "endX"},
"dropletBlock_getImageData_param3":function(d){return "endY"},
"dropletBlock_getImageURL_description":function(d){return "Geef de URL die is gekoppeld met een afbeelding of een afbeelding upload knop"},
"dropletBlock_getImageURL_param0":function(d){return "imageID"},
"dropletBlock_getKeyValue_description":function(d){return "Dit haalt de waarde op die opgeslagen is bij de gegeven key naam in de key/value data opslag in App Lab. De waarde wordt teruggeven als parameter aan de callbackFunction wanneer het ophalen is voltooid."},
"dropletBlock_getKeyValue_param0":function(d){return "sleutel"},
"dropletBlock_getKeyValue_param1":function(d){return "functie"},
"dropletBlock_getRed_description":function(d){return "Deze eigenschap haalt de hoeveelheid rood (variërend van 0 tot en met 255) in de kleur van de pixel op de gegeven x- en y-positie in de afbeelding."},
"dropletBlock_getRed_param0":function(d){return "imageData"},
"dropletBlock_getRed_param1":function(d){return "x"},
"dropletBlock_getRed_param2":function(d){return "y"},
"dropletBlock_getText_description":function(d){return "Tekst voor het opgegeven element ophalen"},
"dropletBlock_getText_param0":function(d){return "id"},
"dropletBlock_getTime_description":function(d){return "Verkrijg de huidige tijd in milliseconden"},
"dropletBlock_getUserId_description":function(d){return "Deze eigenschap maakt een unieke id voor de huidige gebruiker van deze app"},
"dropletBlock_getX_description":function(d){return "Dit geeft het huidige x-coördinaat in pixels van de schildpad"},
"dropletBlock_getXPosition_description":function(d){return "Verkrijg de x-positie van de het element"},
"dropletBlock_getXPosition_param0":function(d){return "id"},
"dropletBlock_getY_description":function(d){return "Dit geeft het huidige y-coördinaat in pixels van de schildpad"},
"dropletBlock_getYPosition_description":function(d){return "Verkrijg de Y-positie van het element"},
"dropletBlock_getYPosition_param0":function(d){return "id"},
"dropletBlock_greaterThanOperator_description":function(d){return "Twee getallen vergelijken"},
"dropletBlock_greaterThanOperator_signatureOverride":function(d){return "Greater than operator"},
"dropletBlock_hide_description":function(d){return "Hiermee verberg je de schildpad zodat deze niet wordt weergegeven op het scherm"},
"dropletBlock_hideElement_description":function(d){return "Element met het opgegeven id verbergen"},
"dropletBlock_hideElement_param0":function(d){return "id"},
"dropletBlock_ifBlock_description":function(d){return "Dit voert een blok van instructies uit wanneer aan een specifieke voorwaarde is voldaan"},
"dropletBlock_ifBlock_signatureOverride":function(d){return "als-statement"},
"dropletBlock_ifElseBlock_description":function(d){return "Voert een blok statements uit wanneer de aangegeven voorwaarde geldt; anders wordt het blok statements in het 'anders'-blok uitgevoerd"},
"dropletBlock_ifElseBlock_signatureOverride":function(d){return "als/dan-statement"},
"dropletBlock_image_description":function(d){return "Afbeelding maken en element-id toekennen"},
"dropletBlock_image_param0":function(d){return "id"},
"dropletBlock_image_param1":function(d){return "URL"},
"dropletBlock_imageUploadButton_description":function(d){return "Een knop maken voor het uploaden van een afbeelding en hieraan een element-id toekennen"},
"dropletBlock_inequalityOperator_description":function(d){return "Test op ongelijkheid"},
"dropletBlock_inequalityOperator_signatureOverride":function(d){return "Inequality operator"},
"dropletBlock_innerHTML_description":function(d){return "Binnenste HTML-code instellen voor het element met de opgegeven id"},
"dropletBlock_lessThanOperator_description":function(d){return "Twee getallen vergelijken"},
"dropletBlock_lessThanOperator_signatureOverride":function(d){return "Less than operator"},
"dropletBlock_line_description":function(d){return "Tekent een lijn op het actieve canvas van x1, y1 naar x2, y2."},
"dropletBlock_line_param0":function(d){return "x1"},
"dropletBlock_line_param1":function(d){return "y1"},
"dropletBlock_line_param2":function(d){return "x2"},
"dropletBlock_line_param3":function(d){return "y2"},
"dropletBlock_mathAbs_description":function(d){return "Neemt de absolute waarde van x"},
"dropletBlock_mathAbs_signatureOverride":function(d){return "Math.abs(x)"},
"dropletBlock_mathMax_description":function(d){return "Neemt de maximumwaarde van één of meer waarden n1, n2,..., nX"},
"dropletBlock_mathMax_signatureOverride":function(d){return "Math.max(n1, n2, ..., nX)"},
"dropletBlock_mathMin_description":function(d){return "Neemt de minimumwaarde van één of meer waarden n1, n2,..., nX"},
"dropletBlock_mathMin_signatureOverride":function(d){return "Math.min(n1, n2, ..., nX)"},
"dropletBlock_mathRound_description":function(d){return "Afronden op het dichtstbijzijnde gehele getal"},
"dropletBlock_mathRound_signatureOverride":function(d){return "Math.round(x)"},
"dropletBlock_move_description":function(d){return "Hiermee verplaatst u de schildpad vanaf de huidige locatie. Bij de x-positie van de schildpad wordt x toegevoegd en bij de y-positie wordt y toegevoegd"},
"dropletBlock_move_param0":function(d){return "x"},
"dropletBlock_move_param1":function(d){return "y"},
"dropletBlock_moveBackward_description":function(d){return "Hiermee verplaatst je de schildpad een bepaald aantal pixels terug in de huidige richting"},
"dropletBlock_moveBackward_param0":function(d){return "pixels"},
"dropletBlock_moveForward_description":function(d){return "Hiermee verplaatst je de schildpad een bepaald aantal pixels verder in de huidige richting"},
"dropletBlock_moveForward_param0":function(d){return "pixels"},
"dropletBlock_moveTo_description":function(d){return "Hiermee verplaatst je de schildpad naar een specifiek x,y-coördinaat op het scherm"},
"dropletBlock_moveTo_param0":function(d){return "x"},
"dropletBlock_moveTo_param1":function(d){return "y"},
"dropletBlock_multiplyOperator_description":function(d){return "Twee getallen vermenigvuldigen"},
"dropletBlock_multiplyOperator_signatureOverride":function(d){return "Multiply operator"},
"dropletBlock_notOperator_description":function(d){return "Geeft onwaar terug als de expressie evalueert naar waar, en geeft anders waar terug"},
"dropletBlock_notOperator_signatureOverride":function(d){return "EN boolean operator"},
"dropletBlock_onEvent_description":function(d){return "Code uitvoeren in reactie op de opgegeven gebeurtenis."},
"dropletBlock_onEvent_param0":function(d){return "id"},
"dropletBlock_onEvent_param1":function(d){return "gebeurtenis"},
"dropletBlock_onEvent_param2":function(d){return "functie"},
"dropletBlock_orOperator_description":function(d){return "Dit geeft waar terug als de expressie waar is, anders wordt onwaar teruggegeven"},
"dropletBlock_orOperator_signatureOverride":function(d){return "OF boolean operator"},
"dropletBlock_penColor_description":function(d){return "Hiermee stel je de lijnkleur in welke wordt getekend achter de schildpad als deze beweegt"},
"dropletBlock_penColor_param0":function(d){return "kleur"},
"dropletBlock_penColour_description":function(d){return "Hiermee stel je de lijnkleur in welke wordt getekend achter de schildpad als deze beweegt"},
"dropletBlock_penColour_param0":function(d){return "kleur"},
"dropletBlock_penDown_description":function(d){return "Dit zorgt ervoor dat een lijn getrokken wordt achter de schildpad, wanneer deze beweegt"},
"dropletBlock_penUp_description":function(d){return "Dit zorgt ervoor dat er geen lijn getrokken wordt achter de schildpad, wanneer deze beweegt"},
"dropletBlock_penWidth_description":function(d){return "Stel de schildpad in op de opgegeven penbreedte"},
"dropletBlock_penWidth_param0":function(d){return "breedte"},
"dropletBlock_playSound_description":function(d){return "Speel het MP3, OGG of WAV-geluidsbestand af vanaf de opgegeven URL"},
"dropletBlock_playSound_param0":function(d){return "URL"},
"dropletBlock_putImageData_description":function(d){return "Dit stelt de ImageData vast voor een rechthoek op het actieve canvas met x, y als de coördinaten in de linker bovenhoek"},
"dropletBlock_putImageData_param0":function(d){return "imageData"},
"dropletBlock_putImageData_param1":function(d){return "startX"},
"dropletBlock_putImageData_param2":function(d){return "startY"},
"dropletBlock_radioButton_description":function(d){return "Maak een keuzeknop en wijs een element id toe"},
"dropletBlock_radioButton_param0":function(d){return "id"},
"dropletBlock_radioButton_param1":function(d){return "checked"},
"dropletBlock_radioButton_param2":function(d){return "group"},
"dropletBlock_randomNumber_max_description":function(d){return "Dit geeft een willekeurig nummer tussen 0 en de aangegeven maximale waarde"},
"dropletBlock_randomNumber_max_signatureOverride":function(d){return "randomNumber(max)"},
"dropletBlock_randomNumber_min_max_description":function(d){return "Dit geeft een willekeurig nummer tussen de aangegeven minimale en maximale waardes"},
"dropletBlock_randomNumber_min_max_signatureOverride":function(d){return "randomNumber(min, max)"},
"dropletBlock_readRecords_description":function(d){return "Met behulp van tabel gegevensopslag van App Lab, lees de records van de verstrekte tableName die overeenkomen met de zoekTermen. Wanneer dit is voltooid, wordt de callbackFunction aangeroepen en wordt de array van records doorgegeven."},
"dropletBlock_readRecords_param0":function(d){return "tabelNaam"},
"dropletBlock_readRecords_param1":function(d){return "zoekTermen"},
"dropletBlock_readRecords_param2":function(d){return "functie"},
"dropletBlock_rect_description":function(d){return "Hiermee tekent u een rechthoek op de actieve canvas geplaatst op bovenLinksX en bovenLinksY, met grootte breedte en hoogte."},
"dropletBlock_rect_param0":function(d){return "bovenLinksX"},
"dropletBlock_rect_param1":function(d){return "bovenLinksY"},
"dropletBlock_rect_param2":function(d){return "breedte"},
"dropletBlock_rect_param3":function(d){return "hoogte"},
"dropletBlock_return_description":function(d){return "Geef een waarde terug uit een functie"},
"dropletBlock_return_signatureOverride":function(d){return "uitvoer"},
"dropletBlock_setActiveCanvas_description":function(d){return "Stelt het id in van het canvas voor latere commando's (alleen nodig als er meerdere canvaselementen zijn)"},
"dropletBlock_setActiveCanvas_param0":function(d){return "canvasId"},
"dropletBlock_setAlpha_description":function(d){return "Stel in op de opgegeven waarde"},
"dropletBlock_setAlpha_param0":function(d){return "imageData"},
"dropletBlock_setAlpha_param1":function(d){return "x"},
"dropletBlock_setAlpha_param2":function(d){return "y"},
"dropletBlock_setAlpha_param3":function(d){return "alphaValue"},
"dropletBlock_setAttribute_description":function(d){return "Stel in op de opgegeven waarde"},
"dropletBlock_setBackground_description":function(d){return "Hiermee stel je de achtergrondafbeelding in"},
"dropletBlock_setBlue_description":function(d){return "Hiermee kan de hoeveelheid blauw (tussen 0 en 255) in de pixelkleur op een gegeven x en y positie in de gegeven afbeelding aangeven worden als blauwWaarde input."},
"dropletBlock_setBlue_param0":function(d){return "imageData"},
"dropletBlock_setBlue_param1":function(d){return "x"},
"dropletBlock_setBlue_param2":function(d){return "y"},
"dropletBlock_setBlue_param3":function(d){return "blauwWaarde"},
"dropletBlock_setChecked_description":function(d){return "De status van een checkbox of radiobutton instellen"},
"dropletBlock_setChecked_param0":function(d){return "id"},
"dropletBlock_setChecked_param1":function(d){return "checked"},
"dropletBlock_setFillColor_description":function(d){return "De opvulkleur voor het actieve canvas instellen"},
"dropletBlock_setFillColor_param0":function(d){return "kleur"},
"dropletBlock_setGreen_description":function(d){return "Hiermee kan de hoeveelheid groen (tussen 0 en 255) in de pixelkleur op een gegeven x en y positie in de gegeven afbeelding aangeven worden als blauwWaarde input."},
"dropletBlock_setGreen_param0":function(d){return "imageData"},
"dropletBlock_setGreen_param1":function(d){return "x"},
"dropletBlock_setGreen_param2":function(d){return "y"},
"dropletBlock_setGreen_param3":function(d){return "groenWaarde"},
"dropletBlock_setImageURL_description":function(d){return "De URL voor het image element met het opgegeven id instellen"},
"dropletBlock_setImageURL_param0":function(d){return "id"},
"dropletBlock_setImageURL_param1":function(d){return "URL"},
"dropletBlock_setInterval_description":function(d){return "Telkens als het opgegeven aantal milliseconden is verstreken, doorgaan met het uitvoeren van programmacode"},
"dropletBlock_setInterval_param0":function(d){return "callbackFunction"},
"dropletBlock_setInterval_param1":function(d){return "milliseconden"},
"dropletBlock_setKeyValue_description":function(d){return "Dit slaat een key/waarde paar in de key/waarde gegevensopslag van App Lab op, en roept de callbackFunction aan wanneer de actie voltooid is."},
"dropletBlock_setKeyValue_param0":function(d){return "sleutel"},
"dropletBlock_setKeyValue_param1":function(d){return "waarde"},
"dropletBlock_setKeyValue_param2":function(d){return "functie"},
"dropletBlock_setParent_description":function(d){return "Geeft aan dat een element een kind wordt van een ouder element"},
"dropletBlock_setPosition_description":function(d){return "De positie van een element met x, y, breedte en hoogte als coördinaten"},
"dropletBlock_setPosition_param0":function(d){return "id"},
"dropletBlock_setPosition_param1":function(d){return "x"},
"dropletBlock_setPosition_param2":function(d){return "y"},
"dropletBlock_setPosition_param3":function(d){return "breedte"},
"dropletBlock_setPosition_param4":function(d){return "hoogte"},
"dropletBlock_setRed_description":function(d){return "Hiermee kan de hoeveelheid rood (tussen 0 en 255) in de pixelkleur op een gegeven x en y positie in de gegeven afbeelding aangeven worden als blauwWaarde input."},
"dropletBlock_setRed_param0":function(d){return "imageData"},
"dropletBlock_setRed_param1":function(d){return "x"},
"dropletBlock_setRed_param2":function(d){return "y"},
"dropletBlock_setRed_param3":function(d){return "roodWaarde"},
"dropletBlock_setRGB_description":function(d){return "Sets the RGB color values (ranging from 0 to 255) of the pixel located at the given x and y position in the given image data to the input red, green, blue amounts"},
"dropletBlock_setRGB_param0":function(d){return "imageData"},
"dropletBlock_setRGB_param1":function(d){return "x"},
"dropletBlock_setRGB_param2":function(d){return "y"},
"dropletBlock_setRGB_param3":function(d){return "rood"},
"dropletBlock_setRGB_param4":function(d){return "groen"},
"dropletBlock_setRGB_param5":function(d){return "blauw"},
"dropletBlock_setStrokeColor_description":function(d){return "Stel de kleur in voor de lijn op het actieve canvas"},
"dropletBlock_setStrokeColor_param0":function(d){return "kleur"},
"dropletBlock_setSprite_description":function(d){return "Hiermee wordt de acteur afbeelding ingesteld"},
"dropletBlock_setSpriteEmotion_description":function(d){return "Zet het humeur van de acteur"},
"dropletBlock_setSpritePosition_description":function(d){return "Verplaats de speler meteen naar een opgegeven plaats."},
"dropletBlock_setSpriteSpeed_description":function(d){return "Hiermee stel je de snelheid van een speler in"},
"dropletBlock_setStrokeWidth_description":function(d){return "Stel de lijndikte in voor de actieve canvas"},
"dropletBlock_setStrokeWidth_param0":function(d){return "breedte"},
"dropletBlock_setStyle_description":function(d){return "CSS-tekst toevoegen aan een element"},
"dropletBlock_setText_description":function(d){return "Tekst voor het opgegeven element instellen"},
"dropletBlock_setText_param0":function(d){return "id"},
"dropletBlock_setText_param1":function(d){return "tekst"},
"dropletBlock_setTimeout_description":function(d){return "Timer instellen en code uitvoeren wanneer het opgegeven aantal milliseconden is verstreken"},
"dropletBlock_setTimeout_param0":function(d){return "functie"},
"dropletBlock_setTimeout_param1":function(d){return "milliseconden"},
"dropletBlock_show_description":function(d){return "Toont de schildpad op het scherm door hem zichtbaar te maken op zijn huidige locatie"},
"dropletBlock_showElement_description":function(d){return "Element met opgegeven id weergeven"},
"dropletBlock_showElement_param0":function(d){return "id"},
"dropletBlock_speed_description":function(d){return "Uitvoersnelheid van het programma wijzigen in het opgegeven percentage"},
"dropletBlock_speed_param0":function(d){return "waarde"},
"dropletBlock_startWebRequest_description":function(d){return "Gegevens van internet opvragen en code uitvoeren wanneer het verzoek is afgerond"},
"dropletBlock_startWebRequest_param0":function(d){return "URL"},
"dropletBlock_startWebRequest_param1":function(d){return "functie"},
"dropletBlock_subtractOperator_description":function(d){return "Twee getallen aftrekken"},
"dropletBlock_subtractOperator_signatureOverride":function(d){return "Subtract operator"},
"dropletBlock_textInput_description":function(d){return "Invoerveld aanmaken en element-id toekennen"},
"dropletBlock_textInput_param0":function(d){return "inputId"},
"dropletBlock_textInput_param1":function(d){return "tekst"},
"dropletBlock_textLabel_description":function(d){return "Tekstlabel maken, element-id toekennen en binden aan een bijbehorend element"},
"dropletBlock_textLabel_param0":function(d){return "labelId"},
"dropletBlock_textLabel_param1":function(d){return "tekst"},
"dropletBlock_textLabel_param2":function(d){return "forId"},
"dropletBlock_throw_description":function(d){return "Gooit een projectiel vanaf de gekozen speler."},
"dropletBlock_turnLeft_description":function(d){return "Schildpad tegen de klok in draaien volgens het opgegeven aantal graden"},
"dropletBlock_turnLeft_param0":function(d){return "angle"},
"dropletBlock_turnRight_description":function(d){return "Schildpad met de klok mee draaien volgens het opgegeven aantal graden"},
"dropletBlock_turnRight_param0":function(d){return "angle"},
"dropletBlock_turnTo_description":function(d){return "Draai de schildpad in de opgegeven richting (0 graden is omhoog)"},
"dropletBlock_turnTo_param0":function(d){return "angle"},
"dropletBlock_updateRecord_description":function(d){return "Met behulp van de tabel opslaggegevens van de App Lab, wordt het gegeven record bijgewerkt in tableName. Het record moet uniek geïdentificeerd worden met een id. Wanneer dit voltooid is, wordt de callbackFunction aangeroepen"},
"dropletBlock_updateRecord_param0":function(d){return "tabelNaam"},
"dropletBlock_updateRecord_param1":function(d){return "record"},
"dropletBlock_updateRecord_param2":function(d){return "functie"},
"dropletBlock_vanish_description":function(d){return "Laat de acteur verdwijnen."},
"dropletBlock_whileBlock_description":function(d){return "Hiermee maak je een lus die bestaat uit een voorwaardelijke expressie en een blok instructies uitgevoerd voor elke iteratie van de lus. De lus gaat door met uitvoeren zolang de gestelde voorwaarde waar is"},
"dropletBlock_whileBlock_signatureOverride":function(d){return "'while' lus"},
"dropletBlock_write_description":function(d){return "Een blok tekst maken"},
"dropletBlock_write_param0":function(d){return "tekst"},
"end":function(d){return "einde"},
"emptyBlocksErrorMsg":function(d){return "De \"herhaal\" of \"als\" blokken hebben andere blokken in zich nodig om te werken. Zorg ervoor dat het binnenste blok correct past in het buitenste blok."},
"emptyFunctionalBlock":function(d){return "Je hebt een blok zonder waarde."},
"emptyFunctionBlocksErrorMsg":function(d){return "Het functie-blok moet andere blokken bevatten om te werken."},
"errorEmptyFunctionBlockModal":function(d){return "In je functie-definitie moeten blokken staan . Klik op \"bewerk\" en sleep blokken  het groene blok in."},
"errorIncompleteBlockInFunction":function(d){return "Klik \"bewerk\" en zorg ervoor dat je geen blokken mist in je functie-definitie."},
"errorParamInputUnattached":function(d){return "Denk er aan om aan iedere parameter input op het functieblok in je werkruimte een blok toe te voegen."},
"errorUnusedParam":function(d){return "Je voegde een parameter blok toe maar gebruikte deze niet in je functie. Zorg ervoor dat je je parameter gebruikt door op \"bewerk\" te klikken en de parameter blok binnen de groene blok te plaatsen."},
"errorRequiredParamsMissing":function(d){return "Maak een parameter voor je functie door op \"bewerk\" te klikken en de nodige parameters toe te voegen. Sleep de nieuwe parameter blok in je functie-definitie."},
"errorUnusedFunction":function(d){return "Je maakte een functie  maar gebruikte deze nooit in je werkruimte! Klik op \"Functies\" in de gereedschapskist en zorg ervoor dat je ze gebruikt in je programma."},
"errorQuestionMarksInNumberField":function(d){return "Vervang \"???\" door een waarde."},
"extraTopBlocks":function(d){return "Je hebt niet-gekoppelde blokken."},
"extraTopBlocksWhenRun":function(d){return "Je hebt niet-gekoppelde blokken. Was het de bedoeling om deze te koppelen aan het \"bij uitvoeren\"-blok?"},
"finalStage":function(d){return "Gefeliciteerd! Je hebt de laatste fase voltooid."},
"finalStageTrophies":function(d){return "Gefeliciteerd! U hebt de laatste fase voltooid en won "+locale.p(d,"numTrophies",0,"nl",{"one":"een trofee","other":locale.n(d,"numTrophies")+" trofeeën"})+"."},
"finish":function(d){return "Voltooien"},
"generatedCodeInfo":function(d){return "Zelfs op topuniversiteiten wordt les gegevens met programmeertalen die op blokken zijn gebaseerd (bijv. "+locale.v(d,"berkeleyLink")+", "+locale.v(d,"harvardLink")+"). Maar onder de motorkap kunnen de blokken waarmee je een programma hebt gemaakt ook getoond worden in JavaScript, de programmeertaal die wereldwijd het meest wordt gebruikt:"},
"hashError":function(d){return "Sorry, '%1' komt niet overeen met een opgeslagen programma."},
"help":function(d){return "Hulp"},
"hintTitle":function(d){return "Tip:"},
"jump":function(d){return "spring"},
"keepPlaying":function(d){return "Doorgaan met spelen"},
"levelIncompleteError":function(d){return "Je gebruikt alle soorten blokken die nodig zijn, maar niet op de juiste manier."},
"listVariable":function(d){return "lijst"},
"makeYourOwnFlappy":function(d){return "Maak je eigen 'Flappy'-spel"},
"missingBlocksErrorMsg":function(d){return "Probeer een of meer van de blokken onderaan om deze puzzel op te lossen."},
"nextLevel":function(d){return "Gefeliciteerd! Je hebt puzzel "+locale.v(d,"puzzleNumber")+" af."},
"nextLevelTrophies":function(d){return "Gefeliciteerd! Je hebt puzzel "+locale.v(d,"puzzleNumber")+" opgelost en je hebt "+locale.p(d,"numTrophies",0,"nl",{"one":"een trofee","other":locale.n(d,"numTrophies")+" trofeeën"})+" gewonnen."},
"nextPuzzle":function(d){return "Next Puzzle"},
"nextStage":function(d){return "Gefeliciteerd! Je hebt "+locale.v(d,"stageName")+" af."},
"nextStageTrophies":function(d){return "Gefeliciteerd! Je hebt "+locale.v(d,"stageName")+" af en je hebt "+locale.p(d,"numTrophies",0,"nl",{"one":"een medaille","other":locale.n(d,"numTrophies")+" medailles"})+" gewonnen."},
"numBlocksNeeded":function(d){return "Gefeliciteerd! Je hebt puzzel "+locale.v(d,"puzzleNumber")+" opgelost. (Maar je had het het ook met "+locale.p(d,"numBlocks",0,"nl",{"one":"1 block","other":locale.n(d,"numBlocks")+" blocks"})+" op kunnen lossen.)"},
"numLinesOfCodeWritten":function(d){return "Je schreef zojuist "+locale.p(d,"numLines",0,"nl",{"one":"1 regel","other":locale.n(d,"numLines")+" regels"})+" code!"},
"play":function(d){return "afspelen"},
"print":function(d){return "Afdrukken"},
"puzzleTitle":function(d){return "Puzzel "+locale.v(d,"puzzle_number")+" van "+locale.v(d,"stage_total")},
"repeat":function(d){return "herhaal"},
"resetProgram":function(d){return "Herstellen"},
"runProgram":function(d){return "Start"},
"runTooltip":function(d){return "Voer het programma gedefinieerd door de blokken uit in de werkruimte."},
"score":function(d){return "score"},
"showCodeHeader":function(d){return "Code weergeven"},
"showBlocksHeader":function(d){return "Toon blokken"},
"showGeneratedCode":function(d){return "Code weergeven"},
"stringEquals":function(d){return "tekenreeks =?"},
"subtitle":function(d){return "een visuele programmeeromgeving"},
"textVariable":function(d){return "tekst"},
"tooFewBlocksMsg":function(d){return "Je gebruikt alle soorten blokken die je nodig hebt, maar probeer meer van deze blokken te gebruiken om deze puzzel op te lossen."},
"tooManyBlocksMsg":function(d){return "Deze puzzel kan worden opgelost met <x id='START_SPAN'/><x id='END_SPAN'/> blokken."},
"tooMuchWork":function(d){return "Je laat me veel werk doen! Kun je proberen minder te herhalen?"},
"toolboxHeader":function(d){return "blokken"},
"toolboxHeaderDroplet":function(d){return "Toolbox"},
"hideToolbox":function(d){return "(Verbergen)"},
"showToolbox":function(d){return "Toon Toolbox"},
"openWorkspace":function(d){return "Hoe het werkt"},
"totalNumLinesOfCodeWritten":function(d){return "Totale tijd: "+locale.p(d,"numLines",0,"nl",{"one":"1 regel","other":locale.n(d,"numLines")+" regels"})+" code."},
"tryAgain":function(d){return "Probeer opnieuw"},
"hintRequest":function(d){return "Bekijk tip"},
"backToPreviousLevel":function(d){return "Terug naar het vorige niveau"},
"saveToGallery":function(d){return "Opslaan in galerij"},
"savedToGallery":function(d){return "Opgeslagen in galerij!"},
"shareFailure":function(d){return "Sorry, we kunnen dit programma niet delen."},
"workspaceHeaderShort":function(d){return "Werkplaats: "},
"infinity":function(d){return "Oneindig"},
"rotateText":function(d){return "Draai je apparaat."},
"orientationLock":function(d){return "Schakel de oriëntatieblokkering uit in de instellingen van je apparaat."},
"wantToLearn":function(d){return "Wil je leren programmeren?"},
"watchVideo":function(d){return "Bekijk de video"},
"when":function(d){return "wanneer"},
"whenRun":function(d){return "als gestart"},
"tryHOC":function(d){return "Probeer \"Hour of Code\""},
"signup":function(d){return "Neem deel aan de introductie cursus"},
"hintHeader":function(d){return "Een tip:"},
"genericFeedback":function(d){return "Kijk wat er gebeurde, en probeer je programma te verbeteren."},
"toggleBlocksErrorMsg":function(d){return "je moet een fout in je programma corrigeren voordat het kan worden weergeven in blokken."},
"defaultTwitterText":function(d){return "Kijk wat ik gemaakt heb"}};