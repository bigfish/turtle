#!/usr/bin/perl
#generate procedure files for turtle explorer using global_procedures
my @functions = ();
my $procedure_file = "";
my $procedure = "";
my $function_name = "";
#first argument should be path to global_procedures.js
my $file = shift;
#2nd arg should be dir where generated procedures go
my $procedures_dir = shift
$header = <<END;
<html>
	<head>
    <style>
      body {
        font-family: Verdana, Arial, Helvetica;
        font-size: 0.8em;
		background: #000000;
		color: #00FF00;
      }
	  a {
		text-decoration:none;
	  }
    </style>
	</head>
	<body>
END
$snippet_header = <<EOF;
<html>
	<head>
	<style>
      body, pre {
        font-family: Verdana, Arial, Helvetica;
        font-size: .85em;
		background: #000000;
		color: #00FF00;
      }
	  </style>
	</head>
	<body>
	<pre>
EOF
$snippet_footer = "</pre></body></html>";
#read global procedures file 
open(FILE, $file);
@lines = <FILE>;
close(FILE);
#parse functions
my $started_function = 0;
foreach $line(@lines) {
	#match a function statement and capture the name
	#start of function -- must be at start of line
	if ($line =~ /^function ([A-Za-z0-9_\$]+)/) {
		if ($started_function) {
			print SNIPPET_FILE $snippet_footer;
			#close previous procedure file
			close (SNIPPET_FILE);
		}
		$function_name = $1;
		push(@functions, $function_name);
		$procedure_file = $procedures_dir."/".$function_name.".html";
		open (SNIPPET_FILE, ">>$procedure_file");
		print SNIPPET_FILE $snippet_header;
		$started_function = 1;
	}
	print SNIPPET_FILE $line;
}
close (SNIPPET_FILE);
#echo procedures index html file
print $header;
#spit out options for including in turtle_explorer
foreach $f(@functions){
	print "<a href=\"procedures/$f.html\" target=\"preview\">$f</a><br/>\n";
}
print "</body>\n</html>";
