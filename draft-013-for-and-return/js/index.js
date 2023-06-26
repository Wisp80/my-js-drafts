let array = [1, 2, 3];

function checkReturn() {
    for (let i in array) {
        if (i > 0) {
            console.log('here');
    
            return 3;
        };
    
        console.log('there');
    };  
};

checkReturn();