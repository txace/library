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
