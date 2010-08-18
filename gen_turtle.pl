#!/usr/bin/perl

#get a list of functions defined in the turtle_global file
#and add as methods to the Turtle
my $TAB = '	';
my @functions = ();
my @vars = ();
#first argument should be path to turtle_global.js
my $file = shift;
#first echo header
$HEADER = <<END_HEADER;

function Turtle(canvas, bgcolor, fgcolor, procedures) {

END_HEADER
print $HEADER;

#read global turtle file
open(FILE, $file);
@lines = <FILE>;
close(FILE);

#skip the starting comments as they do not apply in this context
my $skipped_starting_comments = 0;
my $got_global_vars = 0;

foreach $line(@lines) {
	#vars are after starting comment and before first function
	if ($got_global_vars == 0) {
		if ($line =~ /^var\s([A-Za-z0-9_\$]+)/) {
			$skipped_starting_comments = 1;
			#push(@vars, $1);
			print $TAB.$line;
		}
	}
	#match a function statement and capture the name
	if ($skipped_starting_comments) {
		if ($line =~ /^\s*function ([A-Za-z0-9_\$]+)/) {
			$got_global_vars = 1;
			push(@functions, $1);
		}
		if(	$got_global_vars == 1) {
			print $TAB.$line;
		}
	}
#starting comments not necessarily multiline
	#if ($line =~ /\*\//) {
		#$skipped_starting_comments = 1;
	#}
}
#dont set vars as properties -- they will not update dynamically
#print "\n";
#print "$TAB//public variables \n";
#foreach $var(@vars) {
		##assign var to turtle instance this
		#print $TAB."this.$var = $var;\n";
#}
print "\n";
print "$TAB//public methods \n";
foreach $function(@functions) {
		#assign function to turtle instance this
		print $TAB."this.$function = $function;\n";
}

$FOOTER = <<END_FOOTER;

	INIT(canvas, bgcolor, fgcolor);

	var that = this;
	//apply additional procedures to turtle
	if (procedures) {
		for (var p = 0; p < procedures.length; p++) {
			procedures[p](that);
		}
	}
	return that;
}
END_FOOTER
print $FOOTER;
