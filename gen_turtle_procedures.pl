#!/usr/bin/perl

#get a list of functions defined in the global_procedures files
#and add as methods to the 't' Turtle instance
my $TAB = '	';
my @functions = ();

my $turtle_file = shift;

#first argument should be path to global_procedures.js
my $procedures_file = shift;

#first echo header
$HEADER = <<END_HEADER;
//exposes the global function TURTLE_PROCEDURES
//to add procedures to the turtle object given as parameter

var TURTLE_PROCEDURES = function (t) {
        
    //wrap core turtle methods in functions

END_HEADER
print $HEADER;

#read turtle procedures file 
open(FILE, $turtle_file);
@lines = <FILE>;
close(FILE);

#get functions from turtle and wrap for use in procedures
#except INIT
my $fname;
my $sig;
foreach $line(@lines) {
	#wrap the function
	if ($line =~ /^function ([A-Za-z0-9_\$]+)([^{]*)/) {
		print $TAB.$line;
		$fname = $1;
		$sig = $2;
		$sig =~ s/\s+$//;
		print $TAB.$TAB."return t.".$fname.$sig.";\n";
		print $TAB."}\n";
		print "\n";
	}
}
print( "   //end wrapper functions\n");

#read global procedures file 
open(FILE, $procedures_file);
@lines = <FILE>;
close(FILE);
#skip the starting comments as they do not apply in this context
my $skipped_starting_comments = 0;

foreach $line(@lines) {
	#match a function statement and capture the name
	if ($skipped_starting_comments) {
		if ($line =~ /^function ([A-Za-z0-9_\$]+)/) {
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
