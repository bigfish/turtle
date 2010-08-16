//perform a hundred iterations of RANDOM_MOVE with random parameters
//this may take a while to run...
REPEAT(100, function(){
    RANDOM_MOVE(RAND(-10,10), RAND(-10, 10),
        RAND(-90, 90), RAND(-90, 90));
});

