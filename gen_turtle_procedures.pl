#!/usr/bin/perl

#get a list of functions defined in the global_procedures files
#and add as methods to the 't' Turtle instance
my $TAB = '	';
my @functions = ();
#first argument should be path to global_procedures.js
my $file = shift;
#first echo header
$HEADER = <<END_HEADER;
//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions

    function FORWARD(len) {
        t.FORWARD(len);
    }

    function RIGHT(angle) {
        t.RIGHT(angle);
    }

    function LEFT(angle) {
        t.LEFT(angle);
    }

    function BACK(len) {
        t.BACK(len);
    }

    function REPEAT(times, fn, args) {
        t.REPEAT(times, fn, args);
    }

    function PENUP() {
        t.PENUP();
    }

    function PENDOWN() {
        t.PENDOWN();
    }

	function BEARING() {
		return t.BEARING();
	}

	function OUT_OF_BOUNDS() {
		return t.OUT_OF_BOUNDS();
	}

	function CHECK_FORWARD(len) {
		t.CHECK_FORWARD(len);
	}

	function STUCK() {
		return t.STUCK();
	}

    //end wrapper functions
END_HEADER
print $HEADER;
#read global procedures file 
open(FILE, $file);
@lines = <FILE>;
close(FILE);
#skip the starting comments as they do not apply in this context
my $skipped_starting_comments = 0;

foreach $line(@lines) {
	#match a function statement and capture the name
	if ($skipped_starting_comments) {
		if ($line =~ /^\s*function ([A-Za-z0-9_\$]+)/) {
			push(@functions, $1);
		}
		print $TAB.$line;
	}
	if ($line =~ /\*\//) {
		$skipped_starting_comments = 1;
	}
}
print "\n";
foreach $function(@functions) {
		#assign function to turtle instance 't'
		print $TAB."t.$function = $function;\n";
}
print "\n";
print '};';
