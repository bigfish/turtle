
REPEAT(100, function(){
    SET_LINE(RANDOM_COLOR());
    RANDOM_MOVE_IN_BOX(RAND(-10,10), RAND(-10, 10),
        RAND(-90, 90), RAND(-90, 90));
});

