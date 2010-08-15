#!/bin/bash
# This makefile generates the turtle_procedures.js file
# from the global_procedures.js file, so that the separate versions
# do not have to be maintained by hand
# also updates js source in demo apps
JSDIR=js
EXPLORER=explorer
EXAMPLE=example
#generate turtle_procedures 
OUTPUT_FILE=$(JSDIR)/turtle_procedures.js
$(OUTPUT_FILE):	$(JSDIR)/global_procedures.js
	@./gen_turtle_procedures.pl $(JSDIR)/global_procedures.js >> $(OUTPUT_FILE)
	@cp -R $(JSDIR) $(EXPLORER)/
	@cp -R $(JSDIR) $(EXAMPLE)/
	@rm -rf procedures
	@mkdir procedures
	@rm -rf $(EXPLORER)/procedures
	@rm $(EXPLORER)/procedures.html
	@./gen_procedures.pl $(JSDIR)/global_procedures.js > $(EXPLORER)/procedures.html
	@mv procedures $(EXPLORER)/



