RecursiveReplacement.js
=======================

This will be a simple JavaScript file for recursively making replacements inside of strings.

For example, you might replace 

```
"Bob has a {object}"
```

Where `{object}` can be given the value:

```
"can of {color} paint"
```

And `{color}` could be `"red"`.

Leaving you with the sentance:
 
```
Bob has a can of red paint
```

Development Notes:
------------------

I've added a docker-compose file that will automatically bring up gulp and run a gulp task called `watch`. To update
NPM dependencies, change `package.json` and rebuild the container with something like `docker-compose up --build`.
