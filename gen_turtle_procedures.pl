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
    //to avoid calling as methods

    function FORWARD(len) {
        t.forward(len);
    }

    function RIGHT(angle) {
        t.right(angle);
    }

    function LEFT(angle) {
        t.left(angle);
    }

    function BACK(len) {
        t.back(len);
    }

    function REPEAT(times, fn, args) {
        t.repeat(times, fn, args);
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
