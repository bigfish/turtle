#!/bin/bash
# This makefile generates the turtle_procedures.js file
# from the global_procedures.js file, so that the separate versions
# do not have to be maintained by hand
# also updates js source in demo apps
JSDIR=js
EXPLORER=explorer
EXAMPLE=example
TURTLE_SHELL=shell

all:	turtle min example explorer turtle_shell

.PHONY: all turtle min example explorer turtle_shell

#generate OOP turtle from global version
turtle:	$(JSDIR)/global_procedures.js
	@./gen_turtle_procedures.pl $(JSDIR)/turtle_global.js $(JSDIR)/global_procedures.js > $(JSDIR)/turtle_procedures.js
	@./gen_turtle.pl $(JSDIR)/turtle_global.js > js/turtle.js

#generate minified version of js files
min:	$(JSDIR)/global_procedures.js $(JSDIR)/turtle_global.js
	@rm -rf js/min
	@mkdir js/min
	@jsmin.pl js/turtle_global.js js/min/turtle_global.js
	@jsmin.pl js/global_procedures.js js/min/global_procedures.js
	@jsmin.pl js/turtle.js js/min/turtle.js
	@jsmin.pl js/turtle_procedures.js js/min/turtle_procedures.js

#generate example
example:	$(JSDIR)/turtle.js
	@rm -rf $(EXAMPLE)/js
	@cp -R $(JSDIR) $(EXAMPLE)/

#generate explorer js files
explorer: $(JSDIR)/turtle.js
	@cp $(JSDIR)/turtle_global.js $(EXPLORER)/js/
	@cp $(JSDIR)/global_procedures.js $(EXPLORER)/js/
	@cp -R $(JSDIR)/min $(EXPLORER)/js/
	@rm -rf $(EXPLORER)/procedures
	@mkdir $(EXPLORER)/procedures
	@rm $(EXPLORER)/procedures.html
	@./gen_procedures.pl $(JSDIR)/global_procedures.js $(EXPLORER)/procedures > $(EXPLORER)/procedures.html
	@cp -R images/* $(EXPLORER)/images/

#generate a stripped down version (no procedures html files)
turtle_shell: $(JSDIR)/turtle.js
	@cp $(JSDIR)/min/turtle_global.js $(TURTLE_SHELL)/js/
	@cp $(JSDIR)/min/global_procedures.js $(TURTLE_SHELL)/js/
	@cp -R images/* $(TURTLE_SHELL)/images/


