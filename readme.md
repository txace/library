# TxAce Library Project

This project holds standard libraries and include files for TxAce projects.

## inc_GetParm

_function include_ :: Include after the `end` statement of a main script

`getparm(parmfile)`

`getparm()` maps parameter definitions from a CMHC parameter file to variable in the calling script, by name. 

### Usage

#### Map a variable

`varname value`

_example_

`callscript myscript`

This is the equivalent of the uscript statement of 

`callscript = "myscript"`. 

#### Map an Array Variable

`varname-arrayindx value` 

_example_ 

`callscript-1 myscript`
`callscript-2 anotherscript`

This is the equivalent of the uscript statement of 

```
callscript[1] = "myscript"
callscript[2] = "anotherscript"
```

#### Map a 2d Array Variable

`varname-indexY-indexX value`

_example_

```
dstname-1-1 c.fn
dstname-1-2 c.ln
dstname-2-1 c.bd
```

Is the equivalent of the uscript statements of 

```
dstname[1,1] = "c.fn"
dstname[1,2] = "c.ln"
dstname[2,1] = "c.bd"
```

*note* `getparm` assumes that the variable being assigned have been previously declared in the script. Any parameters that attempt to assign undeclared variables are silently ignored.

## inc_GetOption

_function include_ :: Include after the `end` statement of a main script

`getoption(option)`

`getoption()` checks the `option` argument for options that match the script variable names if a match is found the option value is converted to the script's variable type and the variable is updated with that value.

### default delim string format:

Variable name and values are delimted by a `\`` and variable name:value pairs are delimited by a `;`

```
  variable name`variable value;var name`var value;
```

_example_

```
callscript`myscript;dstname-1-1`c.fn;dstname-1-2`c.ln;dstname-2-1`c.bd;
```

Is the equivalent of the uscript statements of 

```
callscript = "myscript"
dstname[1,1] = "c.fn"
dstname[1,2] = "c.ln"
dstname[2,1] = "c.bd"
```

*IMPORTANT NOTE*
This function allows you to override the optend and optdelim values in the option string to allow you to not have to reformat the option string to match the prescribed delims

_example_

```
option = "optend`|;optdelim |v1 example1|v2 example 2"
```

This changes optend = "|" and optdelim = " ", which will result in the following statements

```
v1 = "example1" 
v2 = "example 2"
```

## lib_txaceUI

### `public dynamic function GetClientID() is x`

#### Return 

string clientid

#### Description

screen to allow the user to select a client id

### `public dynamic function ConfirmExit() is x`

#### Return

`"Y"` or `!dp`

#### Description

Displays screen to get 'are you sure' confirmation from the user. Warning message that data will not be saved is displayed.

### `public dynamic function DisplayErrors(errors[], HeaderYN) is null`

#### Return 

null

#### Description

Creates screen to display the list of strings in `errors[]` array as 'errors'. The HeaderYN argument controls the display of the `ClientPageHeader`: if HeaderYN != "N" then the `ClientPageHeader` will display

### `public dynamic function ClientPageHeader(CID) is null`

#### Return 

null

#### Description

Writes an html table to 'current' form to display the name and id of `CID`

*Note* you must call the function inbetween `$form()` and `$sendform()` functions

### `public dynamic function report(e_ser, e_ru, e_start, e_dur, e_loc, video) is x`

#### Return

DNP

#### Description

Writes an html table to 'current' form to display the event data passed in through the arguments

*Note* you must call the function inbetween `$form()` and `$sendform()` functions
