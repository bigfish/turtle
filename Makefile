#!/bin/bash
# This makefile generates the turtle_procedures.js file
# from the global_procedures.js file, so that the separate versions
# do not have to be maintained by hand
# also updates js source in demo apps
JSDIR=js
DEMO=demos
TURTLE_DEMO_1=$(DEMO)/turtle_explorer
TURTLE_DEMO_2=$(DEMO)/turtle
#generate turtle_procedures 
OUTPUT_FILE=$(JSDIR)/turtle_procedures.js
$(OUTPUT_FILE):	$(JSDIR)/global_procedures.js
	@./gen_turtle_procedures.pl $(JSDIR)/global_procedures.js >> $(OUTPUT_FILE)
	@cp -R $(JSDIR) $(TURTLE_DEMO_1)/
	@cp -R $(JSDIR) $(TURTLE_DEMO_2)/
	@rm -rf procedures
	@mkdir procedures
	@rm -rf $(TURTLE_DEMO_1)/procedures
	@rm $(TURTLE_DEMO_1)/procedures.html
	@./gen_procedures.pl $(JSDIR)/global_procedures.js > $(TURTLE_DEMO_1)/procedures.html
	@mv procedures $(TURTLE_DEMO_1)/



