# using libraries

## option 1

- Create a zip file with *index.js* file + *node_modules* folder

- Instead of using the editor in the browser to write the function, use the button "upload from", and choose the zip file to be uploaded.

- Deploy



## Option 2

- on the diagram of the general info, click on "layers"

- Add layer

- custom layer

- create a new layer hyperlink , before clicking "add"

    - name: bcrypt
    - load a zip file, only the node_modules dir with a specific path -> "nodejs/node_modules"
    - choose runtime -> nodejs
    - click "create"

- now that the layer exists, go back to the menu you were on and add it

Now you don't have to zip everything every time you change the source code, as long as the libraries you need don't change, the layer can stay the same and be shared amonst several lambda functions.


## Note

I wasn't able to run this example, I got a timeout from javascript, however, I know that the layer was successfully uploaded because I no longer got the error "module not found", so that was the purpose of this tutorial, and I'm giving up on javascript, lol.