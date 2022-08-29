
<!--#echo json="package.json" key="name" underline="=" -->
dictlist-util-pmb
=================
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
Utilities for dealing with lists of dictionaries.
<!--/#echo -->



API
---

This module exports one function:

### makeDictList(x)

Returns a _dictionary list_ (shortened "DL" from now),
i.e. an array that holds some extra methods described below.

* If `x` is an array,
  the resulting DL will contain all elements of `x` that
  look like dictionary objects.
  (Currently, any truthy value qualifies.)
* Otherwise, if `x` looks like a dictionary object,
  the resulting DL will contain just `x`.
* If `x` is false-y (e.g. not supplied),
  the resulting DL will be empty.



Methods on dictionary lists
---------------------------

### .getEachOwnProp(key)

Return an array with the values of all own `key`-named properties from
all dictionaries that have them.





Usage
-----

see [test/usage.mjs](test/usage.mjs).


<!--#toc stop="scan" -->



Known issues
------------

* Needs more/better tests and docs.




&nbsp;


License
-------
<!--#echo json="package.json" key=".license" -->
ISC
<!--/#echo -->
